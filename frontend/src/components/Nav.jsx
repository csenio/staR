import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home"
    };
  }

  render() {
    return (
      <nav>
        <NavLink exact activeClassName="active" to="/">
          <i className="fas fa-home" />
        </NavLink>
        <NavLink exact activeClassName="active" to="/search">
          <i className="fas fa-search" />
        </NavLink>
        <NavLink exact activeClassName="active" to="/notifications">
          <i className="fas fa-heart" />
        </NavLink>
        <NavLink exact activeClassName="active" to="/profile">
          <i className="fas fa-user" />
        </NavLink>
      </nav>
    );
  }
}

export default Nav;
