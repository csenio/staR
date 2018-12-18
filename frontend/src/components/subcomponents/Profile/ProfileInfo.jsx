import React, { Component } from "react";


class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home"
    };
  }

  render() {
    return (
      <div className="profile__info">
        <div className="profile__personal">
          <img
            className="profile__personal__picture"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
          <div className="profile__personal__text">
            <h3 className="profile__personal__title">just a title</h3>
            <p className="profile__personal__name">Max Musterman</p>
          </div>
        </div>
        <div className="card__content">
          <h3 className="card__profile__title">just a title</h3>
          <p className="card__profile__name">Max Musterman</p>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;