import { Switch, Route } from "react-router-dom";
import GlobalStyle from "../Style/globalStyles";
import Welcome from "../Pages/Welcome/index";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ParkingForm from "../Pages/ParkingForm/index";
import AvailableParking from "../Pages/AvailableParking/index";
import EndingBar from "../Components/ending-bar";
import { useSelector, useDispatch } from "react-redux";
import { addUserThunk } from "../Store/modules/user/thunk";
import { StyleAlert } from "../Style/globalStyles";
import Header from "../Components/Header";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Routes = () => {
  const { message, typeMessage } = useSelector((state) => state.errorMessage);

  const { user } = useSelector((state) => state.user);

  const [cookies] = useCookies();

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    cookies.token && dispatch(addUserThunk(cookies.token, cookies.ID));
    user !== "" && history.push("/vagas");
  }, []);

  return (
    <>
      <GlobalStyle />
      {message && <StyleAlert variant={typeMessage}>{message}</StyleAlert>}
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
      {user !== "" && (
        <>
          <Header />
          <Switch>
            <Route exact path="/cadastroDeVagas" component={ParkingForm} />
            <Route exact path="/vagas" component={AvailableParking} />
          </Switch>
        </>
      )}
      <EndingBar />
    </>
  );
};

export default Routes;
