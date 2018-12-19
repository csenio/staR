import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import FriendFeed from "./subcomponents/Friend/FriendFeed";
import FriendLiked from "./subcomponents/Friend/FriendLiked";
import FriendNav from "./subcomponents/Friend/FriendNav";
import FriendInfo from "./subcomponents/Friend/FriendInfo";
import FriendSettingsNav from "./subcomponents/Friend/FriendSettingsNav";


class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Profile">
        <div className="friendsettings friendsettings__nav__container">
          <FriendSettingsNav />
        </div>
        <div className="friend__info friend__info__container">
          <FriendInfo />
        </div>
        <div className="friend__navbar friend__navbar__container">
          <FriendNav />
        </div>
        <div className="friend__content friend__content__container">
          <FriendFeed />
          {/* <Switch>
            <Route exact path="/Friend/feed" component={FriendFeed} />
            <Route exact path="/Friend/trending" component={FriendLiked} />
          </Switch> */}
        </div>
      </div>
    );
  }
}

export default Friend;