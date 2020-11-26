import React, { Component } from "react";
import { connect } from "react-redux";

import Aux from "../../hoc/auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import axios from "../../axios/axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import {
  setIngredients,
  setTotalPrice,
} from "../../redux/reducer/burgerReducer/actions";

const INGREDIENTS_PRICE = {
  meat: 20,
  cheese: 10,
  salad: 15,
  bacon: 25,
};

export class BurgerBuilder extends Component {
  state = {
    purchase: false,
    backdrop: false,
    spinner: false,
    error: null,
  };

  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then((res) => {
        this.props.setIngredients(res.data);
      })
      .catch((err) => this.setState({ error: err }));
  }

  addIngredientHandler = (type) => {
    const oldCount = this.props.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredients = { ...this.props.ingredients };
    updateIngredients[type] = updatedCount;
    const newPrice = INGREDIENTS_PRICE[type] + this.props.totalPrice;
    this.props.setIngredients(updateIngredients);
    this.props.setTotalPrice(newPrice);
  };
  removeIngredientHandler = (type) => {
    if (!(this.props.ingredients[type] > 0)) {
      return;
    }
    const oldCount = this.props.ingredients[type];
    const updatedCount = oldCount - 1;
    const updateIngredients = { ...this.props.ingredients };
    updateIngredients[type] = updatedCount;
    const newPrice = this.props.totalPrice - INGREDIENTS_PRICE[type];

    this.props.setIngredients(updateIngredients);
    this.props.setTotalPrice(newPrice);
  };

  purchaseHandler = () => {
    this.setState(function (state, props) {
      return {
        purchase: !state.purchase,
      };
    });
  };

  purchaseContinueHandler = () => {
    // const queryParams = [];
    // for (const i in this.props.ingredients) {
    //   queryParams.push(
    //     encodeURI(i) + "=" + encodeURI(this.props.ingredients[i])
    //   );
    // }
    // queryParams.push("price=" + this.props.totalPrice);
    // const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      // search: "?" + queryString,
    });
  };

  render() {
    const disabled = { ...this.props.ingredients };
    for (const key in disabled) {
      if (disabled.hasOwnProperty(key)) {
        disabled[key] = disabled[key] <= 0;
      }
    }

    let burger = <Spinner />;

    let orderSummary = null;

    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            addIngredientHandler={this.addIngredientHandler}
            removeIngredientHandler={this.removeIngredientHandler}
            disabled={disabled}
            totalPrice={this.props.totalPrice}
            purchaseHandler={this.purchaseHandler}
          />
        </Aux>
      );

      orderSummary = (
        <Modal
          clicked={this.purchaseHandler}
          show={this.state.purchase}
          spinner={this.state.spinner}
        >
          {this.state.spinner ? (
            <Spinner />
          ) : (
            <OrderSummary
              total={this.props.totalPrice}
              purchaseHandler={this.purchaseHandler}
              purchaseContinueHandler={this.purchaseContinueHandler}
              ingredients={this.props.ingredients}
              purchase={this.state.purchase}
            />
          )}
        </Modal>
      );
    }

    return (
      <Aux>
        {this.state.error ? (
          <p>not working</p>
        ) : (
          <Aux>
            {orderSummary}
            {burger}
          </Aux>
        )}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIngredients: (ingredients) => dispatch(setIngredients(ingredients)),
    setTotalPrice: (totalPrice) => dispatch(setTotalPrice(totalPrice)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(BurgerBuilder, axios));
