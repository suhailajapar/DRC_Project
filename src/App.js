import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar className="navbar" />
      <Home className="home" />
    </BrowserRouter>
  );
}

export default App;
