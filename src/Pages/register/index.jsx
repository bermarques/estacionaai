import CarIcon from "../../Components/icon";
import LoginTabs from "../../Components/login-tabs";

import "../../Style/ParkingForm/style.css";
import ParkingLocation from "../../Components/ParkingForm/ParkingLocation/index";

const Register = () => {
  return (
    <>
      <CarIcon />
      <LoginTabs />
      <ParkingLocation />
      <div className="text-center">
        <img src="/assets/img-sign1.png" alt="carinha feliz" />
      </div>
    </>
  );
};

export default Register;
