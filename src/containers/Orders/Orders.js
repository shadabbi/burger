import React, { Component } from "react";

import Order from "../../components/Order/Order";
import axios from "../../axios/axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

export class Orders extends Component {
  state = {
    orders: null,
    spinner: true,
  };
  componentDidMount() {
    const orders = [];
    axios
      .get("/order.json")
      .then((res) => {
        const data = res.data;
        for (const order in data) {
          orders.push({ ...data[order], id: order });
        }
        this.setState({ orders: orders, spinner: false });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.spinner ? (
          <Spinner />
        ) : (
          this.state.orders.map((order) => (
            <Order key={order.id} data={order} />
          ))
        )}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
