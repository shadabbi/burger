import React from "react";

import classes from "./NavigationItem.module.scss";

function NavigationItem(props) {
  return (
    <li className={classes.navigationItem}>
      <a href="/" className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
}

export default NavigationItem;
