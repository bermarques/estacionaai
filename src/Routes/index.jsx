import { Switch, Route } from "react-router-dom";
import GlobalStyle from "../Style/globalStyles";
import Welcome from "../Pages/Welcome/index";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ParkingForm from "../Pages/ParkingForm/index";
import AvailableParking from "../Pages/AvailableParking/index";
import EndingBar from "../Components/ending-bar";
import { useSelector } from "react-redux";
import { StyleAlert } from "../Style/globalStyles";
import Header from "../Components/Header";

const Routes = () => {
  const { message, typeMessage } = useSelector((state) => state.errorMessage);
  console.log(typeMessage);

  return (
    <>
      <GlobalStyle />
      {message && <StyleAlert variant={typeMessage}>{message}</StyleAlert>}
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/available" component={AvailableParking} />
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
