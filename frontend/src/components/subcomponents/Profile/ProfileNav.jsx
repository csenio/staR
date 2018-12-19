import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ProfileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home"
    };
  }

  render() {
    return (
      <div className="profile__navbar">
        <NavLink exact activeClassName="active" to="/home/feed">
          <i className="far fa-square" />
        </NavLink>
        <NavLink exact activeClassName="active" to="/home/trending">
          <i className="fas fa-fire" />
        </NavLink>
      </div>
    );
  }
}

export default ProfileNav;