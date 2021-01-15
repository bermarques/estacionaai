import CarIcon from "../../Components/icon";
import LoginTabs from "../../Components/login-tabs";

import "../../Style/DriverForm/style.css";
import DriverFormComponent from "../../Components/DriverForm/index";

const Register = () => {
  return (
    <>
      <CarIcon />
      <LoginTabs />

      <DriverFormComponent />

      <div className="text-center">
        <img src="/assets/img-sign1.png" alt="carinha feliz" />
      </div>
    </>
  );
};

export default Register;
