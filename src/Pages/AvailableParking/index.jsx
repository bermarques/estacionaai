import AvailableParkingComponents from "../../Components/AvailableParking/index";
import { States } from "../../Helpers/Available/index";
import { useState } from "react";
import { StyledInput, StyledSelect } from "../../Style/globalStyles";

const AvailableParking = () => {
  const [city, setCity] = useState("");
  const [selectedState, setSelectedStates] = useState("");

  return (
    <div>
      <div>
        <StyledInput
          placeholder="Buscar por cidade"
          onChange={(e) => setCity(e.target.value)}
        />
        <StyledSelect onChange={(e) => setSelectedStates(e.target.value)}>
          {States.map(({ value, name }, index) => (
            <option key={index} value={value}>
              {name}
            </option>
          ))}
        </StyledSelect>
      </div>
      <AvailableParkingComponents />
    </div>
  );
};

export default AvailableParking;
