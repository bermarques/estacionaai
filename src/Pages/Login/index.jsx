import { CarIcon } from "../../Components/icon/index";
import LoginTabs from "../../Components/login-tabs";
import LoginForm from "../../Components/Login/index";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserThunk } from "../../Store/modules/user/thunk";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.user);
  const [cookies] = useCookies();

  useEffect(() => {
    cookies.token && dispatch(addUserThunk(cookies.token, cookies.ID));
  }, []);

  useEffect(() => {
    user !== "" && history.push("/vagas");
  }, [user]);

  return (
    <>
      <CarIcon />
      <LoginTabs />
      <LoginForm />
    </>
  );
};

export default Login;
