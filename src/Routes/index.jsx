import { Switch, Route } from "react-router-dom";
import GlobalStyle from "../Style/globalStyles";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ParkingForm from "../Pages/ParkingForm/index";
import EndingBar from "../Components/ending-bar";

const Routes = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/parking">
          <ParkingForm />
        </Route>
      </Switch>
      <EndingBar />
    </>
  );
};

export default Routes;
