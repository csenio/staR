import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class FriendSettingsNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="friendsettings__navbar">
        <div className="top__nav__back">
          <i className="fas fa-angle-left" />
        </div>
        <div className="friendsettings__navbar__username">
          <NavLink exact activeClassName="active" to="/friendsettings">
            <p>{this.props.name}</p>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default FriendSettingsNav;
