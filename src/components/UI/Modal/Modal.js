import React, { Component } from "react";

import classes from "./Modal.module.scss";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/auxiliary";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.show !== nextProps.show ||
      this.props.spinner !== nextProps.spinner
    );
  }

  render() {
    return (
      <Aux>
        {this.props.show ? (
          <Backdrop purchaseHandler={this.props.clicked} />
        ) : null}
        <div
          className={[
            classes.Modal,
            classes[this.props.show ? "show" : "hide"],
          ].join(" ")}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
