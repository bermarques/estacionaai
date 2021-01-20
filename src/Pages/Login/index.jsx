import { CarIcon } from "../../Components/icon/index";
import LoginTabs from "../../Components/login-tabs";
import LoginForm from "../../Components/Login/index";

const Login = () => {
  return (
    <>
      <CarIcon />
      <LoginTabs />
      <div className="text-center">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
