import React, { useContext, useState, useEffect } from "react";
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
  const { user_data, is_data_ready } = useContext(SiteDataContext);
  const [display, setDisplay] = useState("none");
  const pwdPopupHandler = () => {
    setDisplay("unset");
  };

  //Req to BE for user details (hikers.users)
  // useEffect(() => {
  //   const user_id = user_data.loginid;
  //   const req = new Request(`http://localhost:3001/profile/:${user_id}`, {
  //     method: "GET",
  //     headers: new Headers({ "Content-Type": "application/json" }),
  //   });
  //   fetch(req).then((res) => {
  //     res.json().then((data) => {
  //       return console.log(data);
  //     });
  //   });
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  if (!is_data_ready) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className={classes.main_wrapper}>
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
            <div className={classes.username}>@{user_data.username}</div>
            <div className={classes.date_joined}>
              Date joined:
              <span style={{ paddingLeft: "10px" }}>
                {user_data.date_joined}
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <p>Enter valid email only</p>
              )}
              {errors?.Email?.type === "required" && (
                <p>This field is required</p>
              )}
            </span>

            <div className={classes.form_boxes}>
              <div className={classes.headers}>Mobile Number :</div>
              <input
                className={classes.InputBox}
                placeholder={user_data.phone}
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
                <p>Valid Mobile Number only</p>
              )}
              {errors.MobileNumber && <p>Min 10 digits</p>}
              {errors?.MobileNumber?.type === "required" && (
                <p>This field is required</p>
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
  );
};

export default Profile;
