import React, { useContext, useState, useEffect } from "react";
import ImageUpload from "../ImageUpload/ImageUpload";
import ChangePasswordModal from "../Modal/ChangePasswordModal";
import classes from "./Profile.module.css";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useForm } from "react-hook-form";
import ProfBar from "../Menubar/HeaderBar";
import Menubar from "../Menubar/Menubar";
import { SiteDataContext } from "../../SiteData";

const Profile = (props) => {
  const [theme, setTheme] = React.useState("dark");
  const { user_data, is_data_ready } = useContext(SiteDataContext);
  const [display, setDisplay] = useState("none");
  const pwdPopupHandler = () => {
    setDisplay("unset");
  };
  // const [changeAvatar, setChangeAvatar] = React.useState(genConfig({}));
  const [click, setClick] = React.useState(0);

  // React.useEffect(() => {
  //   console.log(onClick);
  //   if (onClick === 0) {
  //     // setChangeAvatar(null);
  //   } else if (onClick >= 1) {
  //     // setChangeAvatar(null);
  //   }
  // }, [onClick]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  //Check if user_data is ready
  if (!is_data_ready) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className={classes.profile_bg}>
      <div className={classes.main_wrapper}>
        <div className={classes.profile_header}>
          <ProfBar titleName={"Profile"} theme={theme} setTheme={setTheme} />
        </div>
        <ChangePasswordModal display={display} setDisplay={setDisplay} />

        {/* <Menubar
          theme={theme}
          setTheme={setTheme}
          className={classes.profile_menubar}
        /> */}

        <div className={classes.user_container}>
          <div className={classes.photo_box}>
            <img
              src={props.avatarSample}
              id={classes.avatar}
              // style={{ width: "160px", height: "160px" }}
            />
          </div>
          {/* <ImageUpload className={classes.photo_box} />
          <button
            type="button"
            onClick={() => {
              setClick(click + 1);
              console.log(click);
            }}
          >
            Hello
          </button> */}
          <div className={classes.container1}>
            <div className={classes.username}>@{user_data.username}</div>
            <div className={classes.date_joined}>
              Date joined:
              <span style={{ paddingLeft: "10px" }}>
                {user_data.date_joined}
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <span className={classes.error_message}>
              {errors?.fullname?.type === "required" && (
                <p id={classes.warning}>This field is required</p>
              )}
              {errors?.fullname?.type === "maxLength" && (
                <p id={classes.warning}>
                  Full name cannot exceed 50 characters
                </p>
              )}
              {errors?.fullname?.type === "pattern" && (
                <p id={classes.warning}>Alphabetical characters only</p>
              )}
            </span> */}

            <div className={classes.form_boxes}>
              <div className={classes.headers}>Full Name :</div>
              <input
                className={classes.InputBox}
                placeholder={user_data.full_name}
                {...register("fullname", {
                  required: true,
                  maxLength: 50,
                  pattern: /^[a-zA-Z ]*$/,
                })}
              />
            </div>

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
            <div className={classes.form_spacing}></div>
            <div className={classes.form_boxes}>
              <div className={classes.headers}>Email :</div>
              <input
                className={classes.InputBox}
                placeholder={user_data.email}
                {...register("Email", {
                  pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                  required: true,
                })}
              />
            </div>

            <span className={classes.error_message}>
              {errors?.Email?.type === "pattern" && (
                <p id={classes.warning}>Enter valid email only</p>
              )}
              {errors?.Email?.type === "required" && (
                <p id={classes.warning}>This field is required</p>
              )}
            </span>
            <div className={classes.form_spacing}></div>

            <div className={classes.form_boxes}>
              <div className={classes.headers}>Mobile Number :</div>
              <input
                className={classes.InputBox}
                placeholder={
                  user_data.phone ? user_data.phone : "Phone number..."
                }
                {...register("MobileNumber", {
                  required: true,
                  minlegth: 10,
                  maxlength: 15,
                  pattern: /\d+/,
                })}
              />
            </div>
            <span className={classes.error_message}>
              {errors?.MobileNumber?.type === "pattern" && (
                <p id={classes.warning}>Valid Mobile Number only</p>
              )}
              {errors.MobileNumber && <p>Min 10 digits</p>}
              {errors?.MobileNumber?.type === "required" && (
                <p id={classes.warning}>This field is required</p>
              )}
            </span>
            <div className={classes.form_spacing}></div>

            <div className={classes.form_boxes}>
              <div className={classes.headers}>Password :</div>
              <div className={classes.InputBox_p}>
                <span className={classes.pwd_bullet}>
                  <span id={classes.pass_placeholder}>
                    &bull;&bull;&bull;&bull;&bull;&bull;&bull;
                  </span>
                  <EditRoundedIcon
                    fontSize="medium"
                    sx={{
                      color: "white",
                    }}
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
  );
};

export default Profile;
