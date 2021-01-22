import AvailableParking from "../../Components/AvailableParking";
import { getAddress } from "../../requests/requestAdress";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { Container } from "./style";
import { StyledButton } from "../../Style/globalStyles";
import { useHistory } from "react-router-dom";

const MyParking = () => {
  const [cookies] = useCookies();
  const [myParkings, setMyParkings] = useState([]);

  const history = useHistory();
  useEffect(async () => {
    let data = await getAddress(cookies.token);
    data = data.data.filter((park) => park.userId === cookies.ID);
    data.length >= 1 ? setMyParkings(data) : setMyParkings([]);
  }, []);

  console.log(myParkings);
  return (
    <Container>
      {myParkings.length !== 0 ? (
        myParkings?.map((elmt, idx) => (
          <AvailableParking
            isMyParking
            elmt={elmt}
            key={idx}
            setMyParkings={setMyParkings}
          />
        ))
      ) : (
        <StyledButton onClick={() => history.push("/cadastroDeVagas")}>
          Adicione uma vaga
        </StyledButton>
      )}
    </Container>
  );
};

export default MyParking;
