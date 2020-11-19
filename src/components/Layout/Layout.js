import React from "react";

import Aux from "../../hoc/auxiliary";
import classes from "./Layout.module.scss";

function Layout(props) {
  return (
    <Aux>
      <div>toolbar</div>
      <main className={classes.content}>{props.children}</main>
    </Aux>
  );
}

export default Layout;
