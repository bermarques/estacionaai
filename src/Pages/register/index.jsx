import CarIcon from "../../Components/icon";
import LoginTabs from "../../Components/login-tabs";
import DriverForm from "../../Components/DriverForm";

const Register = () => {
  return (
    <>
      <CarIcon />
      <LoginTabs />
      <DriverForm />
      <div className="text-center">
        <img src="/assets/img-sign1.png" alt="carinha feliz" />
      </div>
    </>
  );
};

export default Register;
