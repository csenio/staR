import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomeFeed from "./subcomponents/Home/HomeFeed";
import HomeTrending from "./subcomponents/Home/HomeTrending";
import HomeNav from "./subcomponents/Home/HomeNav";



class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="home__navbar home__navbar__container">
          <HomeNav />
        </div>
        <div className="home__content home__content__container">
          <HomeFeed />
          {/* <Switch>
            <Route exact path="/home/feed" component={HomeFeed} />
            <Route exact path="/home/trending" component={HomeTrending} />
          </Switch> */}
        </div>
      </div>
    );
  }
}

export default Home;
