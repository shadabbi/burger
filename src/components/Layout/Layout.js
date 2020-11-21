import React from "react";

import Aux from "../../hoc/auxiliary";
import classes from "./Layout.module.scss";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

function Layout(props) {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main className={classes.content}>{props.children}</main>
    </Aux>
  );
}

export default Layout;
