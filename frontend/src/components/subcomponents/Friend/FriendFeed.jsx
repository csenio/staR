import React, { Component } from "react";
import Card from "../Card";
import axios from "axios";
import config from "../../../config";

class FriendFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
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
    }).then(feedItems => {
      console.log(feedItems);
      debugger;
      this.setState({ tweets: feedItems.data.tweets });
      // console.log(feedItems.data[2]);
    });
  };

  componentDidMount() {
    this.getUserFeed();
  }

  render() {
    return (
      <div>
        {this.state.tweets.length === 0 ? (
          <p>loading...</p>
        ) : (
          this.state.tweets.map(oneTweet => (
            <Card
              creatorName={oneTweet.creator.name}
              creatorImage={
                oneTweet.creator.profile === "none"
                  ? "https://www.dts.edu/wp-content/uploads/sites/6/2018/04/Blank-Profile-Picture.jpg"
                  : oneTweet.creator.profile
              }
              image={oneTweet.image}
              id={oneTweet.creator._id}
              title={oneTweet.title}
            />
          ))
        )}
      </div>
    );
  }
}

export default FriendFeed;
