import React, { Component } from "react";
import SearchBar from "./subcomponents/SearchBar";
// import axios from 'axios'

// const { API_KEY } = process.env
// const API_URL = ''

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  // getInfo = () => {
  //   axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
  //     .then(({ data }) => {
  //       this.setState({
  //         results: data.data // MusicGraph returns an object named data, 
  //         // as does axios. So... data.data                             
  //       })
  //     })
  // }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      }
    })
  }

  render() {
    return (
      <div className="search__bar search__bar__container">
        <SearchBar />
      </div>
    );
  }
}

export default Search;
