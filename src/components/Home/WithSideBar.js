import React from "react";
import SideBar from "../Menubar/SideBar";
import { Outlet } from "react-router";

export default () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};
