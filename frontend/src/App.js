import React, { Component } from "react";
import "./styles/App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import HomeFeed from "./components/subcomponents/Home/HomeFeed";
import HomeTrending from "./components/subcomponents/Home/HomeTrending";
import Settings from "./components/subcomponents/Profile/Settings";
import Post from "./components/Post";
import Friend from "./components/Friend";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import axios from "axios";
import config from "./config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.auth();
  }

  auth = () => {
    axios({
      method: "post",
      withCredentials: true,
      url: `${config.backend}/auth`
    }).then(response => {
      if (response.data === "authenticated") {
        // debugger;
        this.setState({ isAuthenticated: true });
        console.log("authenticated:", this.state.isAuthenticated);
      } else if (response.data === "unauthenticated") {
        this.setState({ isAuthenticated: false });
        console.log("authenticated:", this.state.isAuthenticated);
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/login"
            render={props => (
              <Login
                {...props}
                auth={this.auth}
                isAuthenticated={this.state.isAuthenticated}
              />
            )}
          />
          <ProtectedRoute
            exact
            auth={this.auth}
            isAuthenticated={this.state.isAuthenticated}
            path="/register"
            component={Register}
          />
          <ProtectedRoute
            exact
            auth={this.auth}
            isAuthenticated={this.state.isAuthenticated}
            path="/home"
            component={Home}
          />
          <ProtectedRoute
            exact
            auth={this.auth}
            isAuthenticated={this.state.isAuthenticated}
            path="/search"
            component={Search}
          />
          <ProtectedRoute
            exact
            auth={this.auth}
            isAuthenticated={this.state.isAuthenticated}
            path="/notifications"
            component={Notifications}
          />
          <ProtectedRoute
            exact
            auth={this.auth}
            isAuthenticated={this.state.isAuthenticated}
            path="/profile"
            component={Profile}
          />
          {/* <Route exact path="/home/feed" component={HomeFeed} />
          <Route exact path="/home/trending" component={HomeTrending} /> */}
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/friend" component={Friend} />
        </Switch>
        <Nav />
      </div>
    );
  }
}

export default App;
