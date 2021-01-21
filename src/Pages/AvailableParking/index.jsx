import AvailableParkingComponents from "../../Components/AvailableParking/index";
import SearchParking from "../../Components/SearchParking/index";
import { useState } from "react";
import { StyledInput, StyledButton } from "../../Style/globalStyles";

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
      <div>
        <StyledInput
          placeholder="Buscar por cidade"
          onChange={(e) => setCityes(e.target.value)}
        />
        {activeSearch === false ? (
          <StyledButton onClick={() => searchCity()}>Buscar</StyledButton>
        ) : (
          <StyledButton onClick={() => searchCity()}>
            Todas as Vagas
          </StyledButton>
        )}
      </div>
      {activeSearch === false ? (
        <AvailableParkingComponents />
      ) : (
        <SearchParking cityes={cityes} />
      )}
    </>
  );
};

export default AvailableParking;
