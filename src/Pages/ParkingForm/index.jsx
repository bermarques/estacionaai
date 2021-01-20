import "../../Style/ParkingForm/style.css";
import ParkingLocation from "../../Components/ParkingForm/ParkingLocation/index";

const ParkingForm = () => {
  return (
    <div>
      <ParkingLocation />
      <div className="logo-parking"></div>
    </div>
  );
};

export default ParkingForm;
