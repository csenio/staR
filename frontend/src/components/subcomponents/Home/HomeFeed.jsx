import React, { Component } from "react";
import Card from "../Card";
// import HomeNav from "./subcomponents/HomeNav";

class HomeFeed extends Component {
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

export default HomeFeed;