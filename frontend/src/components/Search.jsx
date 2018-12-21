import React, { Component } from "react";
import SearchBar from "./subcomponents/SearchBar";
import axios from "axios";
import config from "../config";
import { Link } from "react-router-dom";
// const { API_KEY } = process.env
// const API_URL = ''

class Search extends Component {
  state = {
    query: []
    // results: []
  };

  // getInfo = () => {
  //   axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
  //     .then(({ data }) => {
  //       this.setState({
  //         results: data.data // MusicGraph returns an object named data,
  //         // as does axios. So... data.data
  //       })
  //     })
  // }

  // handleInputChange = () => {
  //   this.setState({
  //     query: this.search.value
  //   }, () => {
  //     if (this.state.query && this.state.query.length > 1) {
  //       if (this.state.query.length % 2 === 0) {
  //         this.getInfo()
  //       }
  //     }
  //   })
  // }

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
      // debugger;
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
