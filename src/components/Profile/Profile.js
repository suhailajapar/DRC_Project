import React from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
import "./Profile.css";
import InputAdornment from "@mui/material/InputAdornment";
import EditIcon from "@mui/icons-material/Edit";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import SideBar from "../Menubar/SideBar";
import Box from "@mui/material/Box";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <div className="main-wrapper">
      <SideBar />
      <div className="photo-box"></div>
      <div className="container1">
        {" "}
        <div className="username">Username: </div>
        <div className="date-joined">Date-Joined : </div>
      </div>
      <div className="div1">
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors?.fullname?.type === "required" && (
            <p id="msg">This field is required</p>
          )}
          {errors?.fullname?.type === "maxLength" && (
            <p id="msg">Full name cannot exceed 50 characters</p>
          )}
          {errors?.fullname?.type === "pattern" && (
            <p id="msg">Alphabetical characters only</p>
          )}
          <h1 className="headers">
            Full Name :
            <input
              className="InputBox"
              {...register("fullname", {
                required: true,
                maxLength: 50,
                pattern: /^[a-zA-Z ]*$/,
              })}
            />
          </h1>

          {errors?.Email?.type === "pattern" && (
            <p id="msg">Enter valid email only</p>
          )}
          {errors?.Email?.type === "required" && (
            <p id="msg">This field is required</p>
          )}
          <h1 className="headers">
            Email :
            <input
              className="InputBox"
              {...register("Email", {
                pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                required: true,
              })}
            />
          </h1>

          {errors?.MobileNumber?.type === "pattern" && (
            <p id="msg">Valid Mobile Number only</p>
          )}
          {errors.MobileNumber && <p id="msg">Min 10 digits</p>}
          {errors?.MobileNumber?.type === "required" && (
            <p id="msg">This field is required</p>
          )}
          <h1 className="headers">
            Mobile Number :
            <input
              className="InputBox"
              {...register("MobileNumber", {
                required: true,
                minlegth: 10,
                maxlength: 15,
                pattern: /\d+/,
              })}
            />
          </h1>

          {errors?.Password?.type === "pattern" && (
            <p id="msg">Only Alphanumeric and underscores are accepted</p>
          )}
          {errors.Password && <p id="msg">Min 10 digits</p>}
          {errors?.Password?.type === "required" && (
            <p id="msg">This field is required</p>
          )}
          <h1 className="headers">
            Password
            <input
              type="password"
              className="InputBox-p"
              {...register("Password", {
                required: true,
                minlegth: 10,
                maxlength: 16,
                pattern: /^[a-zA-Z0-9_]*$/,
              })}
            />
          </h1>

          <button className="Save-Button">Save </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;

const rootElement = document.getElementById("root");
ReactDOM.render(<Profile />, rootElement);
