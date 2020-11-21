import React from "react";

import classes from "./BuildControl.module.scss";

function BuildControl(props) {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={() => props.removeIngredientHandler(props.type)}
        disabled={props.disabled[props.type]}
      >
        Less
      </button>
      <button
        className={classes.More}
        onClick={() => props.addIngredientHandler(props.type)}
      >
        More
      </button>
    </div>
  );
}

export default BuildControl;
