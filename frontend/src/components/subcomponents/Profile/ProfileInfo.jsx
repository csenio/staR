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
      <div className="profile__info ">
        <div className="profile__info__top">
          <div className="profile__info__pic">
            <img
              className="profile__personal__picture"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              alt=""
            />
          </div>
          <div className="profile__info__social">
            <div className="profile__info__social__stats">
              <div className="profile__info__stats">
                <div className="profile__info__stats__numbers">
                  <h3>777</h3>
                </div>
                <div className="profile__info__stats__words">
                  <h4>Posted</h4>
                </div>
              </div>
              <div className="profile__info__stats">
                <div className="profile__info__stats__numbers">
                  <h3>777</h3>
                </div>
                <div className="profile__info__stats__words">
                  <h4>Followers</h4>
                </div>
              </div>
              <div className="profile__info__stats">
                <div className="profile__info__stats__numbers">
                  <h3>777</h3>
                </div>
                <div className="profile__info__stats__words">
                  <h4>Followed</h4>
                </div>
              </div>
            </div>
            <div className="profile__button__blue__container">
              <button className="profile__button__blue">Follow</button>
            </div>
          </div>
        </div>
        <div className="profile__info__bio">
          <p className="profile__personal__name">Max Musterman</p>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;