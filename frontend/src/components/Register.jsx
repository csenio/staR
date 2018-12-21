import React, { Component } from "react";
import Inputfield from "./subcomponents/Login/Inputfield";
import axios from "axios";
import config from "../config";
import { NavLink } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = (arg, type, action) => {
    this.setState({ [action + type]: arg });
    console.log(this.state);
  };

  register = () => {
    if (
      this.state.Registername &&
      this.state.Registeremail &&
      this.state.Registerpassword
    ) {
      console.log("sending register");
      //post action
      axios({
        method: "post",
        withCredentials: true,
        url: `${config.backend}/register`,
        data: {
          ...this.state
        }
      }).then(response => {
        console.log(response);
        if (response.data.error) {
          this.setState({ error: response.data.error });
        } else if (response.data.success) {
          console.log("success");
          this.setState({ success: response.data.success });
        }
      });
    } else {
      console.log("please specify all the fields");
    }
  };

  render() {
    return (
      <div className="register">
        {this.state.error && !this.state.success && (
          <div>ERROR: {this.state.error}</div>
        )}
        <div className="register__content">
          <div className="register__content__containers register__content__title">
            <img src={require("../images/logo.png")} alt="" className="register__content__title__pic" />
            <h3>Clone</h3>
          </div>
          <div className="register__content__containers register__content__input__name">
            <Inputfield type="name" action="Register" submit={this.submit} />
          </div>
          <div className="register__content__containers register__content__input__email">
            <Inputfield type="email" action="Register" submit={this.submit} />
          </div>
          <div className="register__content__containers register__content__input__password">
            <Inputfield type="password" action="Register" submit={this.submit} />
          </div>
          <div className="register__content__containers register__content__bottom">
            <div className="register__content__button">
              <button onClick={this.register} className="register__button">register</button>
            </div>
            <div className="register__content__register">
              <h5>Already have an account?</h5>
              <NavLink exact activeClassName="active" to="/login">
                <h5>
                  Login here
                    </h5>
              </NavLink>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Register;
