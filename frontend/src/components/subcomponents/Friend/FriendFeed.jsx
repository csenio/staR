import React, { Component } from "react";
import Card from "../Card";
import axios from "axios";
import config from "../../../config";

class FriendFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false
    };
  }

  getUserFeed = () => {
    axios({
      method: "post",
      withCredentials: true,
      url: `${config.backend}/getUserFeed`,
      data: {
        name: this.props.name
      }
    }).then(result => {
      this.setState({
        user: result.data,
        tweets: result.data.tweets.sort()
        //profile: result.data.profile,
        //name: result.data.name
      });
    });
  };

  componentDidMount() {
    this.getUserFeed();
  }

  render() {
    return (
      <div>
        {!this.state.user ? (
          <p>loading...</p>
        ) : (
          this.state.user.tweets.map(tweet => (
            <Card
              creatorName={this.state.user.name}
              creatorImage={
                this.state.user.profile === "none"
                  ? "https://www.dts.edu/wp-content/uploads/sites/6/2018/04/Blank-Profile-Picture.jpg"
                  : this.state.user.profile
              }
              image={tweet.image}
              id={this.state.user._id}
              title={tweet.title}
            />
          ))
        )}
      </div>
    );
  }
}

export default FriendFeed;
