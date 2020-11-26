import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import axios from "../../axios/axios-orders";
import CheckoutSummary from "../../components/Order/CheckoutSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import ContactData from "../Checkout/ContactData/ContactData";
import classes from "./Checkout.module.scss";

class Checkout extends Component {
  state = {
    spinner: false,
    purchased: false,
  };

  componentDidMount() {
    // axios.get("/ingredients.json").then((res) => {
    //   this.setState({ ingredients: res.data, spinner: false });
    // });
    // const query = new URLSearchParams(this.props.location.search);
    // const ingredients = {};
    // for (const param of query) {
    //   if (param[0] === "price") {
    //     this.state.totalPrice = param[1];
    //   } else {
    //     ingredients[param[0]] = +param[1];
    //   }
    // }
    // this.setState({ ingredients: ingredients, spinner: false });
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = (customerData) => {
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        ...customerData,
      },
      deliveryMethod: "cash on delivery",
    };

    this.setState({ spinner: true });

    axios
      .post("/order.json", order)
      .then((res) => {
        this.setState({ spinner: false, purchased: true });
        this.props.history.replace("/");
      })
      .catch((err) => this.setState({ purchased: false }));

    this.props.history.replace(this.props.match.path + "/contactData");
  };
  render() {
    return (
      <div>
        {this.state.spinner ? (
          <Spinner />
        ) : this.state.purchased ? (
          <h1>purchased</h1>
        ) : (
          <div>
            <CheckoutSummary
              checkoutCancelHandler={this.checkoutCancelHandler}
              ingredients={this.props.ingredients}
            />
            <Route
              path={this.props.match.path + "/contactData"}
              render={() => (
                <ContactData
                  checkoutContinueHandler={this.checkoutContinueHandler}
                />
              )}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
  };
};

export default connect(mapStateToProps)(Checkout);
