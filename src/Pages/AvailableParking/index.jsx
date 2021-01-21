import AvailableParkingComponents from "../../Components/AvailableParking/index";
import SearchParking from "../../Components/SearchParking/index";
import { useState } from "react";
import { StyledInput, StyledButton, MasterDiv } from "../../Style/globalStyles";

const AvailableParking = () => {
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
        <AvailableParkingComponents />
      ) : (
        <SearchParking cityes={cityes} />
      )}
    </>
  );
};

export default AvailableParking;
