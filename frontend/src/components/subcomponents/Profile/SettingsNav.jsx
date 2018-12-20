import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SettingsNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="settings__navbar">
        <NavLink exact activeClassName="active" to="/settings">
          <p>user.name</p>
          <i className="fas fa-cogs" />
        </NavLink>
      </div>
    );
  }
}

export default SettingsNav;