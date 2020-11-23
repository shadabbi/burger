import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/auxiliary";

function withErrorHandler(WrappedComponent, axios) {
  return class extends Component {
    state = {
      error: null,
    };
    componentDidMount() {
      axios.interceptors.response.use(null, (err) => {
        this.setState({ error: err });
      });
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          <Modal clicked={this.errorConfirmedHandler} show={this.state.error}>
            something didn't work
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
}

export default withErrorHandler;
