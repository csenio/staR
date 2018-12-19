import React, { Component } from "react";
import Card from "../Card";
import axios from "axios";
import config from "../../../config";
// import HomeNav from "./subcomponents/HomeNav";

class HomeFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  getfeed = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: `${config.backend}/createFeed`
    }).then(feedItems => {
      this.setState({ tweets: [...feedItems.data] });
      console.log(feedItems.data[2]);
    });
  };

  componentDidMount() {
    this.getfeed();
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
              key={oneTweet._id}
              title={oneTweet.title}
            />
          ))
        )}
      </div>
    );
  }
}

export default HomeFeed;
