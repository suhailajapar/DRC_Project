import React, { useContext, useState } from "react";
import ImageUpload from "../ImageUpload/ImageUpload";
import ChangePasswordModal from "../Modal/ChangePasswordModal";
import "./Profile.css";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useForm } from "react-hook-form";
import SideBar from "../Menubar/SideBar";
import Menubar from "../Menubar/Menubar";
import { SiteDataContext } from "../../SiteData";

const Profile = () => {
  const [theme, setTheme] = React.useState("dark");
  const { user_data } = useContext(SiteDataContext);
  const [display, setDisplay] = useState("none");
  const pwdPopupHandler = () => {
    setDisplay("unset");
  };

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
      <ChangePasswordModal display={display} setDisplay={setDisplay} />
      <SideBar />
      <Menubar theme={theme} setTheme={setTheme} />
      <div>
        <div className="user-container">
          <div className="photo-box"></div>
          <ImageUpload className="photo-box" />
          <div className="container1">
            {" "}
            <div className="username">@suhaila</div>
            <div className="date-joined">Date joined: 28-9-2021 </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <span className="error-message">
              {errors?.fullname?.type === "required" && (
                <p>This field is required</p>
              )}
              {errors?.fullname?.type === "maxLength" && (
                <p>Full name cannot exceed 50 characters</p>
              )}
              {errors?.fullname?.type === "pattern" && (
                <p>Alphabetical characters only</p>
              )}
            </span>

            <div className="form-boxes">
              <div className="headers">Full Name :</div>
              <input
                className="InputBox"
                placeholder="Ho Laa Hoo"
                {...register("fullname", {
                  required: true,
                  maxLength: 50,
                  pattern: /^[a-zA-Z ]*$/,
                })}
              />
            </div>

            <span className="error-message">
              {errors?.Email?.type === "pattern" && (
                <p>Enter valid email only</p>
              )}
              {errors?.Email?.type === "required" && (
                <p>This field is required</p>
              )}
            </span>

            <div className="form-boxes">
              <div className="headers">Email :</div>
              <input
                className="InputBox"
                placeholder="email@email.com"
                {...register("Email", {
                  pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                  required: true,
                })}
              />
            </div>

            <span className="error-message">
              {errors?.MobileNumber?.type === "pattern" && (
                <p>Valid Mobile Number only</p>
              )}
              {errors.MobileNumber && <p>Min 10 digits</p>}
              {errors?.MobileNumber?.type === "required" && (
                <p>This field is required</p>
              )}
            </span>

            <div className="form-boxes">
              <div className="headers">Mobile Number :</div>
              <input
                className="InputBox"
                placeholder="012-3456789"
                {...register("MobileNumber", {
                  required: true,
                  minlegth: 10,
                  maxlength: 15,
                  pattern: /\d+/,
                })}
              />
            </div>
            <span className="error-message">
              {errors?.Password?.type === "pattern" && (
                <p>Only Alphanumeric and underscores are accepted</p>
              )}
              {errors.Password && (
                <p>Password must have at least 8 characters. </p>
              )}
              {errors?.Password?.type === "required" && (
                <p> This field is required</p>
              )}
            </span>

            <div className="form-boxes">
              <div className="headers">Password :</div>
              <div className="InputBox-p">
                <span className="pwd-bullet">
                  <span>
                    &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;
                  </span>
                  <EditRoundedIcon
                    fontSize="medium"
                    style={{ color: "white" }}
                    onClick={pwdPopupHandler}
                  />
                </span>
              </div>
            </div>
            <div className="form-boxes">
              <button className="Save-Button">Save </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
