import React, { Component } from "react";
import Inputfield from "./subcomponents/Login/Inputfield";
import axios from "axios";
import config from "../config";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = e => {
    if (e.target.className === "popup__background") this.props.newPost();
  };

  render() {
    // debugger;
    return this.props.active ? (
      <div className="popup__background" onClick={this.handleClick}>
        <PopupContent newPost={this.props.newPost} />
      </div>
    ) : null;
  }
}

class PopupContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = (arg, type, action) => {
    this.setState({ [action + type]: arg });
    console.log(this.state);
  };

  submitPost = () => {
    axios({
      method: "post",
      withCredentials: true,
      url: `${config.backend}/newPost`,
      data: {
        ...this.state
      }
    })
      .then(response => {
        this.props.newPost();
      })
      .catch(err => console.log("error submitting the post:", err));
  };

  render() {
    return (
      <div className="popup__content">
        <Inputfield type="title" action="newPost" submit={this.submit} />
        <Inputfield type="content" action="newPost" submit={this.submit} />
        <button onClick={this.submitPost}>submit</button>
      </div>
    );
  }
}

// export default PopupContent;

export default NewPost;
