import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.props.getMatches(e.currentTarget.value);
    // debugger;
  };

  render() {
    return (
      <div>
        <input placeholder="Search..." onChange={this.handleChange} />
        <p>{this.state.query}</p>
      </div>
    );
  }
}

export default SearchBar;
