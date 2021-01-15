import { Switch, Route } from "react-router-dom";
import GlobalStyle from "../Style/globalStyles";
import Welcome from "../Pages/Welcome/index";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ParkingForm from "../Pages/ParkingForm/index";
import EndingBar from "../Components/ending-bar";
import { useSelector } from "react-redux";
import { StyleAlert } from "../Style/globalStyles";

const Routes = () => {
  const { message } = useSelector((state) => state.errorMessage);

  return (
    <>
      <GlobalStyle />
      {message && <StyleAlert variant={"danger"}>{message}</StyleAlert>}
      <Switch>
        <Route exact path="/" component={Welcome} />
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
