import React, { Component } from "react";

import Aux from "../../hoc/auxiliary";
import Burger from "../../components/Burger/Burger";

export class BurgerBuilder extends Component {
  state = {
    ingredients: {
      "bread-top": 1,
      meat: 1,
      cheese: 1,
      salad: 2,
      bacon: 1,
      "bread-bottom": 1,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
