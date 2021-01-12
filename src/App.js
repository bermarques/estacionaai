import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route } from "react-router-dom";

import Login from "./pages/login";
function App() {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exactpath="/register">{/* <Register /> */}</Route>
    </Switch>
  );
}

export default App;
