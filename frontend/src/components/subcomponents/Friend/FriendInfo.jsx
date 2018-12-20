import React, { Component } from "react";
import axios from "axios";
import config from "../../../config";

class FriendInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "home", following: false };
  }

  componentDidMount() {
    axios({
      method: "post",
      withCredentials: true,
      url: `${config.backend}/getUserInfo`,
      data: {
        name: this.props.name
      }
    }).then(userInfo => {
      this.setState({ userLoaded: true, ...userInfo });
    });
  }

  follow = () => {
    console.log("hi:)");
    axios({
      method: "post",
      withCredentials: true,
      url: `${config.backend}/follow`,
      data: {
        name: this.state.data.name,
        id: this.state.data._id
      }
    }).then(userInfo => {
      this.setState({ userLoaded: true, ...userInfo });
    });
  };

  render() {
    console.log(this.state);
    return this.state.userLoaded ? (
      <div className="friend__info ">
        <div className="friend__info__top">
          <div className="friend__info__pic">
            <img
              className="friend__personal__picture"
              src={
                this.state.data.profile === "none"
                  ? "https://www.dts.edu/wp-content/uploads/sites/6/2018/04/Blank-Profile-Picture.jpg"
                  : this.state.data.profile
              }
              alt=""
            />
          </div>
          <div className="friend__info__social">
            <div className="friend__info__social__stats">
              <div className="friend__info__stats">
                <div className="friend__info__stats__numbers">
                  <h3>{this.state.data.tweets.length}</h3>
                </div>
                <div className="friend__info__stats__words">
                  <h4>Posted</h4>
                </div>
              </div>
              <div className="friend__info__stats">
                <div className="friend__info__stats__numbers">
                  <h3>{this.state.data.followers.length}</h3>
                </div>
                <div className="friend__info__stats__words">
                  <h4>Followers</h4>
                </div>
              </div>
              <div className="friend__info__stats">
                <div className="friend__info__stats__numbers">
                  <h3>{this.state.data.following.length}</h3>
                </div>
                <div className="friend__info__stats__words">
                  <h4>Followed</h4>
                </div>
              </div>
            </div>
            <div className="friend__button__blue__container">
              <button
                className="friend__button__blue" /*onClick={this.follow }*/
              >
                {this.state.following ? "following" : "follow"}
              </button>
            </div>
          </div>
        </div>
        <div className="friend__info__bio">
          <p className="friend__personal__name">{this.state.data.name}</p>
        </div>
      </div>
    ) : (
      <div>loading...</div>
    );
  }
}

export default FriendInfo;
