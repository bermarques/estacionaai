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
import Loading from "../Pages/Loading";
import MyParking from "../Pages/MyParking";

const Routes = () => {
  const { message, typeMessage } = useSelector((state) => state.errorMessage);

  const { user } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.loading);
  console.log(user);

  const [cookies] = useCookies();

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    cookies.token && dispatch(addUserThunk(cookies.token, cookies.ID));
    user !== "" ? history.push("/vagas") : history.push("/login");
  }, []);

  return (
    <>
      <GlobalStyle />
      {message && <StyleAlert variant={typeMessage}>{message}</StyleAlert>}
      <Switch>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </>
        )}
      </Switch>
      {user !== "" && (
        <>
          <Header />
          <Switch>
            {loading ? (
              <Loading />
            ) : (
              <>
                <Route exact path="/cadastroDeVagas" component={ParkingForm} />
                <Route exact path="/vagas" component={AvailableParking} />
                <Route exact path="/minhasvagas" component={MyParking} />
              </>
            )}
          </Switch>
        </>
      )}
      <EndingBar />
    </>
  );
};

export default Routes;
