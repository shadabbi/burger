import React, { Component } from "react";

import Aux from "../../hoc/auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICE = {
  meat: 20,
  cheese: 10,
  salad: 15,
  bacon: 25,
};

export class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0,
    },

    totalPrice: 20,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = updatedCount;
    const newPrice = INGREDIENTS_PRICE[type] + this.state.totalPrice;
    this.setState({ ingredients: updateIngredients, totalPrice: newPrice });
  };
  removeIngredientHandler = (type) => {
    if (!(this.state.ingredients[type] > 0)) {
      return;
    }
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = updatedCount;
    this.setState({ ingredients: updateIngredients });
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
