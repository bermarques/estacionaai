import CarIcon from "../../Components/icon";
import LoginTabs from "../../Components/login-tabs";
import LoginForm from "../../Components/Login/index";
import "../../Style/Login/style.css";

const Login = () => {
  return (
    <div className="master-login">
      <CarIcon />
      <div className="form-login">
        <LoginTabs />
      </div>
      <div className="form-login">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
