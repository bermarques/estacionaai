import { Switch, Route } from "react-router-dom";
import GlobalStyle from "../Style/globalStyles";
import Register from "../Pages/register";
import Login from "../Pages/login";
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
      </Switch>
      <EndingBar />
    </>
  );
};

export default Routes;
