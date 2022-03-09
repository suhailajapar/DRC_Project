import React, { useContext, useState } from "react";
import ImageUpload from "../ImageUpload/ImageUpload";
import ChangePasswordModal from "../Modal/ChangePasswordModal";
import classes from "./Profile.module.css";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useForm } from "react-hook-form";
import ProfBar from "../Menubar/HeaderBar";
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
    <div className={classes.profile_bg}>
      <div className={classes.main_wrapper}>
        {/* <div className={classes.profile_header}>
          <ProfBar titleName={"Profile"} theme={theme} setTheme={setTheme} />
        </div> */}
        <ChangePasswordModal display={display} setDisplay={setDisplay} />

        <Menubar
          theme={theme}
          setTheme={setTheme}
          className={classes.profile_menubar}
        />
        <div>
          <div className={classes.user_container}>
            <div className={classes.photo_box}></div>
            <ImageUpload className={classes.photo_box} />
            <div className={classes.container1}>
              {" "}
              <div className={classes.username}>@suhaila</div>
              <div className={classes.date_joined}>Date joined: 28-9-2021 </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <span className={classes.error_message}>
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

              <div className={classes.form_boxes}>
                <div className={classes.headers}>Full Name :</div>
                <input
                  className={classes.InputBox}
                  placeholder="Ho Laa Hoo"
                  {...register("fullname", {
                    required: true,
                    maxLength: 50,
                    pattern: /^[a-zA-Z ]*$/,
                  })}
                />
              </div>

              <span className={classes.error_message}>
                {errors?.Email?.type === "pattern" && (
                  <p>Enter valid email only</p>
                )}
                {errors?.Email?.type === "required" && (
                  <p>This field is required</p>
                )}
              </span>

              <div className={classes.form_boxes}>
                <div className={classes.headers}>Email :</div>
                <input
                  className={classes.InputBox}
                  placeholder="email@email.com"
                  {...register("Email", {
                    pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                    required: true,
                  })}
                />
              </div>

              <span className={classes.error_message}>
                {errors?.MobileNumber?.type === "pattern" && (
                  <p>Valid Mobile Number only</p>
                )}
                {errors.MobileNumber && <p>Min 10 digits</p>}
                {errors?.MobileNumber?.type === "required" && (
                  <p>This field is required</p>
                )}
              </span>

              <div className={classes.form_boxes}>
                <div className={classes.headers}>Mobile Number :</div>
                <input
                  className={classes.InputBox}
                  placeholder="012-3456789"
                  {...register("MobileNumber", {
                    required: true,
                    minlegth: 10,
                    maxlength: 15,
                    pattern: /\d+/,
                  })}
                />
              </div>
              <span className={classes.error_message}>
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

              <div className={classes.form_boxes}>
                <div className={classes.headers}>Password :</div>
                <div className={classes.InputBox_p}>
                  <span className={classes.pwd_bullet}>
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
              <div className={classes.form_boxes}>
                <button className={classes.Save_Button}>Save </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
