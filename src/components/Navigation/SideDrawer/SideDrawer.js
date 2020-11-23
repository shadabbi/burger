import React from "react";

import classes from "./SideDrawer.module.scss";
import Logo from "../../Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/auxiliary";

function SideDrawer(props) {
  return (
    <Aux>
      {props.openDrawer ? (
        <Backdrop purchaseHandler={props.sideDrawerHandler} />
      ) : null}

      <div
        className={[
          classes.sideDrawer,
          props.openDrawer ? classes.open : classes.close,
        ].join(" ")}
      >
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

export default SideDrawer;
