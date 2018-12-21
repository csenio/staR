import React, { Component } from "react";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="setting__logout">
        <div className="setting__containers setting__title">
          <img src={require("../../../images/logo.png")} alt="" className="setting__title__pic" />
          <h3>Clone</h3>
        </div>
        <div className="setting__containers setting__button">
          <button className="setting__logout__button">Log-out</button>
        </div>
      </div>
    );
  }
}

export default Settings;