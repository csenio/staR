import React, { Component } from "react";
import Inputfield from "./subcomponents/Login/Inputfield";
import axios from "axios";
import config from "../config";

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
        <div>
          <Inputfield type="name" action="Register" submit={this.submit} />
          <Inputfield type="email" action="Register" submit={this.submit} />
          <Inputfield type="password" action="Register" submit={this.submit} />
          <button onClick={this.register}>register</button>
        </div>
      </div>
    );
  }
}

export default Register;
