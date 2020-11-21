import React from "react";

import logo from "../../assets/img/logo.png";
import classes from "./Logo.module.scss";

function Logo() {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="logo"></img>
    </div>
  );
}

export default Logo;
