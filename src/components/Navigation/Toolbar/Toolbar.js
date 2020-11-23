import React from "react";

import classes from "./Toolbar.module.scss";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

function Toolbar(props) {
  return (
    <header className={classes.toolbar}>
      <DrawerToggle clickHandler={props.sideDrawerHandler}></DrawerToggle>
      <Logo />
      <nav className={classes.desktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default Toolbar;
