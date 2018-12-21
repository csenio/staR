import React, { Component } from "react";
import Inputfield from "./subcomponents/Login/Inputfield";
import axios from "axios";
import config from "../config";
import { Redirect, Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = (arg, type, action) => {
    this.setState({ [action + type]: arg });
    console.log(this.state);
  };

  login = () => {
    if (this.state.Loginname && this.state.Loginpassword) {
      console.log("sending login");
      axios({
        method: "post",
        withCredentials: true,
        url: `${config.backend}/login`,
        data: {
          ...this.state
        }
      })
        .then(res => {
          if (res.status === 200) {
            console.log(`login successfull, status: ${res.status}`);
            this.props.auth();
          }
        })
        .catch(err => {
          console.log("error logging in:", err);
        });
    } else {
      console.log("please specify all the fields");
    }
  };

  render() {
    return this.props.isAuthenticated ? (
      <Redirect to={{ pathname: "/home" }} />
    ) : (
      <div className="login">
        {this.state.error && !this.state.success && (
          <div>ERROR: {this.state.error}</div>
        )}
        <div>
          <Inputfield type="name" action="Login" submit={this.submit} />
          <Inputfield type="password" action="Login" submit={this.submit} />
          <button onClick={this.login}>login</button>
        </div>
        <Link to="/register">register</Link>
      </div>
    );
  }
}

export default Login;
