import React, { Component } from "react";
import Inputfield from "./subcomponents/Login/Inputfield";
import axios from "axios";
import config from "../config";
import { Redirect, Link, NavLink } from "react-router-dom";

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
        <div className="login__content">
          <div className="login__content__containers login__content__title">
            <img
              src={require("../images/logo.png")}
              alt=""
              className="login__content__title__pic"
            />
            <h3>Clone</h3>
          </div>
          <div className="login__content__containers login__content__input__name">
            <Inputfield type="name" action="Login" submit={this.submit} />
          </div>
          <div className="login__content__containers login__content__input__password">
            <Inputfield type="password" action="Login" submit={this.submit} />
          </div>
          <div className="login__content__containers login__content__bottom">
            <div className="login__content__button">
              <button onClick={this.login} className="login__button">
                Login
              </button>
            </div>
            <div className="login__content__register">
              <h5>Don't have an account?</h5>
              <NavLink exact activeClassName="active" to="/register">
                <h5>Register here</h5>
              </NavLink>
            </div>
          </div>
        </div>
        <Link to="/register">register</Link>
      </div>
    );
  }
}

export default Login;
