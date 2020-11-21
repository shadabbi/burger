import React from "react";

import classes from "./Toolbar.module.scss";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

function Toolbar() {
  return (
    <header className={classes.toolbar}>
      <Logo />
      <div>menu</div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default Toolbar;
