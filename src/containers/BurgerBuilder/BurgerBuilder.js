import React, { Component } from "react";

import Aux from "../../hoc/auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

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
    purchase: false,
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
    const newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
    this.setState({ ingredients: updateIngredients, totalPrice: newPrice });
  };

  purchaseHandler = () => {
    this.setState(function (state, props) {
      return {
        purchase: !state.purchase,
      };
    });
  };

  render() {
    const disabled = { ...this.state.ingredients };

    for (const key in disabled) {
      if (disabled.hasOwnProperty(key)) {
        disabled[key] = disabled[key] <= 0;
      }
    }

    return (
      <Aux>
        {this.state.purchase ? (
          <Backdrop purchaseHandler={this.purchaseHandler} />
        ) : null}

        <Modal show={this.state.purchase}>
          <OrderSummary
            total={this.state.totalPrice}
            purchaseHandler={this.purchaseHandler}
            ingredients={this.state.ingredients}
          />
        </Modal>

        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disabled={disabled}
          totalPrice={this.state.totalPrice}
          purchaseHandler={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
