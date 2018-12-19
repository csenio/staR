import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import config from "../config";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "home", newPost: true };
  }

  render() {
    return (
      <nav>
        <NavLink exact activeClassName="active" to="/home">
          <i className="fas fa-home" />
        </NavLink>
        <NavLink exact activeClassName="active" to="/search">
          <i className="fas fa-search" />
        </NavLink>
        <div>
          <button className="nav__button" onClick={this.props.newPost}>
            <i className="fas fa-plus" />
          </button>
        </div>
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
