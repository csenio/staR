import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ProfileFeed from "./subcomponents/Profile/ProfileFeed";
import ProfileLiked from "./subcomponents/Profile/ProfileLiked";
import ProfileNav from "./subcomponents/Profile/ProfileNav";
import ProfileInfo from "./subcomponents/Profile/ProfileInfo";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Profile">
        <div className="profile__info profile__info__container">
          <ProfileInfo />
        </div>
        <div className="profile__navbar profile__navbar__container">
          <ProfileNav />
        </div>
        <div className="profile__content profile__content__container">
          <ProfileFeed />
          {/* <Switch>
            <Route exact path="/profile/feed" component={ProfileFeed} />
            <Route exact path="/profile/trending" component={ProfileLiked} />
          </Switch> */}
        </div>
      </div>
    );
  }
}

export default Profile;
