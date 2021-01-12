import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import EndingBar from "./components/ending-bar";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exactpath="/register">
          <Register />
        </Route>
      </Switch>
      <EndingBar />
    </>
  );
}

export default App;
