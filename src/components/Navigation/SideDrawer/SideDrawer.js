import React from "react";

import classes from "./SideDrawer.module.scss";
import Logo from "../../Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";

function SideDrawer() {
  return (
    <div className={classes.sideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
}

export default SideDrawer;
