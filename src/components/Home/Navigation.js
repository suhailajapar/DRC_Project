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

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route element={<WithNav />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<WithSideBar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/market" element={<Market />} />
        </Route>
        <Route element={<WithoutNav />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Navigation;
