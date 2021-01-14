import CarIcon from "../../Components/icon";
import LoginTabs from "../../Components/login-tabs";
import DriverForm from "../../Components/DriverForm";

import "../../Style/DriverForm/style.css";
import DriverFormComponent from "../../Components/DriverForm/index";

const Register = () => {
  return (
    <>
      <CarIcon />
      <LoginTabs />
<<<<<<< HEAD
      <div className="master">
        <DriverFormComponent />
      </div>
=======
      <DriverForm />
>>>>>>> 4cfaf0201cb4bc25c0be390c46661d401b6c7fb3
      <div className="text-center">
        <img src="/assets/img-sign1.png" alt="carinha feliz" />
      </div>
    </>
  );
};

export default Register;
