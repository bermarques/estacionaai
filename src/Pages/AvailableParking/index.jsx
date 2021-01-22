import AvailableParkingComponents from "../../Components/AvailableParking/index";
import SearchParking from "../../Components/SearchParking/index";
import { Container } from "./style";
import { useState, useEffect } from "react";
import { StyledInput, StyledButton, MasterDiv } from "../../Style/globalStyles";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { changeLoading } from "../../Store/modules/loading/actions";
import { getAddress } from "../../requests/requestAdress";
import { addUserThunk } from "../../Store/modules/user/thunk";

const AvailableParking = () => {
  const [cookies, setCookies, removeCookies] = useCookies();
  const [parking, setParking] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLoading(true));
    getAddress(cookies.token)
      .then((res) => {
        if (res.data !== "jwt expired") {
          setParking(res.data);
        } else {
          removeCookies("token");
          dispatch(addUserThunk(""));
        }
      })
      .then(parking !== [] && dispatch(changeLoading(false)));
  }, []);
  const [cityes, setCityes] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);

  const searchCity = () => {
    if (activeSearch === false) {
      setActiveSearch(true);
    } else {
      setActiveSearch(false);
    }
  };

  return (
    <>
      <MasterDiv>
        <div>
          <StyledInput
            placeholder="Buscar por cidade"
            onChange={(e) => setCityes(e.target.value)}
          />
        </div>
        {activeSearch === false ? (
          <StyledButton onClick={() => searchCity()}>Buscar</StyledButton>
        ) : (
          <StyledButton onClick={() => searchCity()}>
            Todas as Vagas
          </StyledButton>
        )}
      </MasterDiv>
      {activeSearch === false ? (
        <Container>
          {parking.map((elmt, idx) => (
            <AvailableParkingComponents elmt={elmt} key={idx} />
          ))}
        </Container>
      ) : (
        <Container>
          <SearchParking cityes={cityes} />
        </Container>
      )}
    </>
  );
};

export default AvailableParking;
