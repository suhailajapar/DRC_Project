import React from "react";
import SideBar from "../Menubar/FinalTestBar";
import { Outlet } from "react-router";

export default (props) => {
  return (
    <>
      <SideBar titleName={props.nameIt} UserDP={props.profilePic} />
      <Outlet />
    </>
  );
};
