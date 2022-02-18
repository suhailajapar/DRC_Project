import Home from "./components/Home/Home";
import Market from "./components/Market/Market";
import Login from "./components/Login/Login";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home className="home" />
        </Route>
        <Route exact path="/market">
          <Market />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
