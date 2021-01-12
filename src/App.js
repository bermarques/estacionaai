import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./Style/globalStyles";

import { Switch, Route } from "react-router-dom";

import Login from "./Pages/login";
import Register from "./Pages/register";
import EndingBar from "./Components/ending-bar";

function App() {
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
}

export default App;
