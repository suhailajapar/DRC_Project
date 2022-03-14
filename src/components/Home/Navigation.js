import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Home from "./Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Profile from "../Profile/Profile";
import Market from "../Market/Market";
import WithoutNav from "./WithoutNav";
import WithNav from "./WithNav";
import WithSideBar from "./WithSideBar";
import { SiteDataContext } from "../../SiteData";
import avatarSample from "../../assets/Logo/avatar_sample.png";

// TODO
const LoggedIn = ({ children, is_logged_in }) => {
  if (is_logged_in) return children;
  window.location.href = "/";
};

function Navigation() {
  const { user_data } = React.useContext(SiteDataContext);

  return (
    <Router>
      <Routes>
        <Route element={<WithNav />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route
          element={
            <WithSideBar nameIt={"Dashboard"} profilePic={avatarSample} />
          }
        >
          <Route
            path="/dashboard"
            element={
              <LoggedIn is_logged_in={!!user_data}>
                <Dashboard dashDP={avatarSample} />
              </LoggedIn>
            }
          />
        </Route>
        <Route
          element={<WithSideBar nameIt={"Profile"} profilePic={avatarSample} />}
        >
          <Route
            path="/profile"
            element={
              <LoggedIn is_logged_in={!!user_data}>
                <Profile avatarSample={avatarSample} />
              </LoggedIn>
            }
          />
        </Route>
        <Route
          element={<WithSideBar nameIt={"Market"} profilePic={avatarSample} />}
        >
          <Route path="/market" element={<Market />} />
        </Route>
        <Route
          element={
            <WithSideBar nameIt={"Dashboard"} profilePic={avatarSample} />
          }
        >
          <Route
            path="/dashboard"
            element={<Dashboard dashDP={avatarSample} />}
          />
        </Route>
        <Route element={<WithoutNav />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Navigation;
