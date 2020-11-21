import React from "react";

import classes from "./BuildControls.module.scss";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

function BuildControls(props) {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map((control) => (
        <BuildControl
          key={control.type}
          type={control.type}
          removeIngredientHandler={props.removeIngredientHandler}
          addIngredientHandler={props.addIngredientHandler}
          label={control.label}
          disabled={props.disabled}
        />
      ))}
      <button
        disabled={props.totalPrice <= 20}
        onClick={() => props.purchaseHandler()}
        className={classes.OrderButton}
      >
        ORDER NOW!
      </button>
    </div>
  );
}

export default BuildControls;
