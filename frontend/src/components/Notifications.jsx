import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NotificationsFeed from "./subcomponents/Notifications/NotificationsFeed";
import NotificationsMessages from "./subcomponents/Notifications/NotificationsMessages";
import NotificationsNav from "./subcomponents/Notifications/NotificationsNav";



class Notifications extends Component {
  render() {
    return (
      <div className="notifications">
        <div className="notifications__navbar notifications__navbar__container">
          <NotificationsNav />
        </div>
        <div className="notifications__content notifications__content__container">
          <NotificationsFeed />
          {/* <Switch>
            <Route exact path="/notifications/feed" component={notificationsFeed} />
            <Route exact path="/notifications/messages" component={notificationsMessages} />
          </Switch> */}
        </div>
      </div>
    );
  }
}

export default Notifications;