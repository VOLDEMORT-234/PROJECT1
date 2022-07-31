import { useRef } from "react";

import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPassword = useRef();

  const submitHandler = (event) => {
    event.preventDefault;

    const enternewPassword = newPasswordInputRef.current.value;

    fetch(){}
  };

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" Ref={newPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
