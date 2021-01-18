import { CarIcon } from "../../Components/icon/index";
import LoginTabs from "../../Components/login-tabs";
import "../../Style/DriverForm/style.css";
import DriverFormComponent from "../../Components/DriverForm/index";

const Register = () => {
  return (
    <div className="master-driver">
      <CarIcon />
      <div className="driver-form">
        <LoginTabs />
      </div>
      <div className="driver-form">
        <DriverFormComponent />
      </div>
      <div className="text-center">
        <img src="/assets/img-sign1.png" alt="carinha feliz" />
      </div>
    </div>
  );
};

export default Register;
