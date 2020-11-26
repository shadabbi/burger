import React, { Component } from "react";

import Aux from "../../hoc/auxiliary";
import Button from "../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      (key) => {
        return (
          <li key={key}>
            <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
            {this.props.ingredients[key]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total is: Rs {this.props.total}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseHandler} btnType="Danger">
          CANCEL
        </Button>
        <Button
          clicked={() => {
            this.props.purchaseContinueHandler();
          }}
          btnType="Success"
        >
          PROCEED
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
