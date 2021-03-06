import React from "react";

import classes from "./DrawerToggle.module.scss";

function DrawerToggle(props) {
  return (
    <div className={classes.DrawerToggle} onClick={props.clickHandler}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default DrawerToggle;
