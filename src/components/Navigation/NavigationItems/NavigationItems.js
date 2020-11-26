import React from "react";

import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
function NavigationItems() {
  return (
    <ul className={classes.navigationItems}>
      <NavigationItem path="/">Burger Builder</NavigationItem>
      <NavigationItem path="/checkout">Checkout</NavigationItem>
      <NavigationItem path="/orders">Orders</NavigationItem>
    </ul>
  );
}

export default NavigationItems;
