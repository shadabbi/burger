import React, { Component } from "react";

import classes from "./ContactData.module.scss";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    customerData: {
      name: "",
      email: "",
      street: "",
      postal: "",
    },
  };

  inputHandler = (e) => {
    e.target.classList.remove("red");
    this.setState((prevSate) => {
      return {
        customerData: {
          ...prevSate.customerData,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  submitHandler = (e) => {
    const invalidInput = [];
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => input.classList.remove("red"));
    e.preventDefault();
    for (const input in this.state.customerData) {
      if (this.state.customerData.hasOwnProperty(input)) {
        const value = this.state.customerData[input].trim();

        if (!value) {
          invalidInput.push(input);
        }
      }
    }

    invalidInput.forEach((el) => {
      const input = document.querySelector(`input[name=${el}]`);
      input.classList.add("red");
    });

    if (invalidInput.length === 0) {
      this.props.checkoutContinueHandler(this.state.customerData);
    }
  };

  render() {
    return (
      <div className={classes.contactData}>
        <h4>Enter Your Contact Data</h4>
        <form onSubmit={this.submitHandler}>
          <Input
            value={this.state.customerData.name}
            onChange={this.inputHandler}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <Input
            value={this.state.customerData.email}
            onChange={this.inputHandler}
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <Input
            value={this.state.customerData.street}
            onChange={this.inputHandler}
            type="text"
            name="street"
            placeholder="Street"
          />
          <Input
            value={this.state.customerData.postal}
            onChange={this.inputHandler}
            type="text"
            name="postal"
            placeholder="Postal Code"
          />
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
