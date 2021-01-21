import AvailableParkingComponents from "../../Components/AvailableParking/index";
import { useState } from "react";
import { StyledInput, StyledButton } from "../../Style/globalStyles";

const AvailableParking = () => {
  const [city, setCity] = useState("");

  const searchCity = () => {};

  return (
    <div>
      <div>
        <StyledInput
          placeholder="Buscar por cidade"
          onChange={(e) => setCity(e.target.value)}
        />
        <StyledButton>Buscar</StyledButton>
      </div>
      <AvailableParkingComponents city={city} />
    </div>
  );
};

export default AvailableParking;
