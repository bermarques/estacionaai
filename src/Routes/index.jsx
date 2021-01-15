import { Switch, Route } from "react-router-dom";
import GlobalStyle from "../Style/globalStyles";
import Register from "../Pages/register";
import Login from "../Pages/login";
import EndingBar from "../Components/ending-bar";
import ParkingForm from "../Pages/ParkingForm"

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
        <Route exact path="/driver">
          <ParkingForm />
        </Route>
      </Switch>
      <EndingBar />
    </>
  );
};

export default Routes;
