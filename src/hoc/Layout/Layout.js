import React, { Component } from "react";

import Aux from "../auxiliary";
import classes from "./Layout.module.scss";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = { openDrawer: false };

  sideDrawerHandler = () => {
    this.setState((prevState) => {
      return {
        openDrawer: !prevState.openDrawer,
      };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar
          sideDrawerHandler={this.sideDrawerHandler}
          openDrawer={this.state.openDrawer}
        />
        <SideDrawer
          sideDrawerHandler={this.sideDrawerHandler}
          openDrawer={this.state.openDrawer}
        />
        <main className={classes.content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
