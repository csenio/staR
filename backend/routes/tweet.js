const mongoose = require("mongoose");
var express = require("express");
var router = express.Router();

const Tweet = require("../models/Tweet");
const Comment = require("../models/Comment");
const User = require("../models/User");
const ObjectId = mongoose.Types.ObjectId;

function newPost(creator, title, content) {
  User.findOne({ name: creator })
    .then(user => {
      const tweet = new Tweet({
        _id: new mongoose.Types.ObjectId(),
        image: content,
        title: title,
        creator: user._id,
        upvotes: 0
      });

      tweet.save(function(err) {
        if (err) return console.log(err);
      });

      User.updateOne({ name: creator }, { $push: { tweets: tweet._id } }).catch(
        err => console.log(err)
      );
    })
    .catch(err => console.log(err));

  console.log(`${creator} created a post with the title ${title}`);
}

function deletePost(creator, postId) {
  Tweet.findByIdAndRemove(postId)
    .then(res => console.log(res, "was removed"))
    .catch(err => console.log(err));

  User.findOneAndUpdate(
    { name: creator },
    { $pull: { tweets: mongoose.Types.ObjectId(postId) } }
  )
    .then(console.log("success"))
    .catch(err => console.log("error", err));
}

function createFeed(user) {
  // Tweet.findOne({ title: "firstTweet" })
  //   .populate("creator")
  //   .exec(function(err, tweet) {
  //     if (err) return handleError(err);
  //     console.log("The creator is %s", tweet.creator._id);
  //     // prints "The author is Ian Fleming"
  //   });
  // me.following
  // following = Users({ objectId: { $in: me.following }, tweets: 1 })
  // var tweetIds = following.reduce((current, collector) => collector.push(...current.tweets))
  // Tweets.find({ objectId: tweetIds, $limit: 100, $orderby: { createdAt: 1 } })
}

// deletePost("timmy", "5c151ad865ce2f3494801d7c");
// newPost("tom", "toms first post", "content1");
// newPost("timmy", "timmys second post", "content2");
// newPost("timmy", "timmys third post", "content3");
// newPost("timmy", "timmys fourth post", "content4");
// newPost("timmy", "timmys fifth post", "content5");

module.exports = router;
