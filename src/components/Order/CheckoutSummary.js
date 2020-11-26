import React from "react";
import { withRouter } from "react-router-dom";

import Burger from "../Burger/Burger";
import Button from "../UI/Button/Button";
import classes from "./CheckoutSummary.module.scss";

function CheckoutSummary(props) {
  return (
    <div className={classes.checkoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.checkoutCancelHandler} btnType="Danger">
        CANCEL
      </Button>
      <Button
        clicked={() => props.history.push(props.match.path + "/contactData")}
        btnType="Success"
      >
        CONTINUE
      </Button>
    </div>
  );
}

export default withRouter(CheckoutSummary);
