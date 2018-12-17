import React, { Component } from "react";
import Card from "./Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>home</h1>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Home;
