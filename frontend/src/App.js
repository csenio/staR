import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <Nav />
      </div>
    );
  }
}

export default App;
