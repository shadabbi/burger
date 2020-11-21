import React from "react";

import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

function NavigationItems() {
  return (
    <ul className={classes.navigationItems}>
      <NavigationItem active>Burger Builder</NavigationItem>
      <NavigationItem>Checkout</NavigationItem>
    </ul>
  );
}

export default NavigationItems;
