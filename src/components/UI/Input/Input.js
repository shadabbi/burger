import React from "react";

import classes from "./Input.module.scss";

function Input(props) {
  let inputElement = null;

  switch (props.inputtype) {
    case "textarea":
      inputElement = <textarea className={classes.inputElement} {...props} />;
      break;

    default:
      inputElement = <input className={classes.inputElement} {...props} />;
      break;
  }
  return (
    <div className={classes.input}>
      <label className={classes.label}>{props.label}</label>
      {inputElement}
    </div>
  );
}

export default Input;
