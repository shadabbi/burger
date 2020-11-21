import React from "react";

import classes from "./Modal.module.scss";

function Modal(props) {
  return (
    <div
      className={[classes.Modal, classes[props.show ? "show" : "hide"]].join(
        " "
      )}
    >
      {props.children}
    </div>
  );
}

export default Modal;
