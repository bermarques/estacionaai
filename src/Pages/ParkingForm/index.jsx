import "../../Style/ParkingForm/style.css";
import ParkingLocation from "../../Components/ParkingForm/ParkingLocation/index";
import { StyledTitle } from "../../Style/globalStyles";

const ParkingForm = () => {
  return (
    <div>
      <StyledTitle>Cadastro de Vaga</StyledTitle>
      <ParkingLocation />
    </div>
  );
};

export default ParkingForm;
