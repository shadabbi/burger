import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.scss";

function NavigationItem(props) {
  return (
    <li className={classes.navigationItem}>
      <NavLink to={props.path} exact activeClassName={classes.active}>
        {props.children}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
