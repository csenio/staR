import React, { Component } from "react";
import Card from "../Card";

class ProfileFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default ProfileFeed;