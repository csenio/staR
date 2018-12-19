import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

class ProtectedRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
  }

  componentDidMount() {
    this.props.auth();
  }

  render() {
    if (this.props.isAuthenticated === undefined) {
      return <div>one second please :)</div>;
    } else {
      return this.props.isAuthenticated === true ? (
        <Route path={this.props.path} component={this.props.component} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      );
    }
  }
}

export default ProtectedRoute;
