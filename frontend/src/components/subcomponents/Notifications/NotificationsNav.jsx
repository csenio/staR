import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NotificationsNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="notifications__navbar">
        <NavLink activeClassName="active" to="/notifications/feed">
          <i className="far fa-square" />
        </NavLink>
        <NavLink activeClassName="active" to="/notifications/message">
          <i className="fas fa-fire" />
        </NavLink>
      </div>
    );
  }
}

export default NotificationsNav;