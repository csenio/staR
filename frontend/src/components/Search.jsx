import React, { Component } from "react";
import SearchBar from "./subcomponents/SearchBar";
import axios from "axios";
import config from "../config";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
    query: []
  };

  getMatches = input => {
    console.log(input);
    axios({
      method: "post",
      withCredentials: true,
      url: `${config.backend}/search`,
      data: {
        name: input
      }
    }).then(people => {
      this.setState({ query: people.data });
      console.log(this.state.query);
    });
  };

  render() {
    return (
      <div>
        <div className="search__bar search__bar__container">
          <SearchBar getMatches={this.getMatches} />
        </div>
        <div className="search__results__container">
          {this.state.query.map(onePerson => (
            <Link key={onePerson._id} to={`/user/${onePerson.name}`}>
              {onePerson.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
