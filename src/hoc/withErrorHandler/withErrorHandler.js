import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/auxiliary";

function withErrorHandler(WrappedComponent, axios) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.axiosId = null;
      this.state = {
        error: null,
      };
    }

    componentWillUnmount() {
      axios.interceptors.response.eject(this.axiosId);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      this.axiosId = axios.interceptors.response.use(null, (err) => {
        this.setState({ error: err });
      });

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
