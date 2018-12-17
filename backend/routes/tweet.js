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
  User.findOne({ name: user })
    .distinct("following", {})
    .exec((err, following) => {
      if (err) console.log("error fetching 'following'", err);
      console.log(following);
      Tweet.find({ creator: { $in: following } })
        .limit(2)
        .sort({ created_at: -1 })
        .exec((err, result) => {
          console.log(result);
        });
    });
}

createFeed("timmy");
// deletePost("timmy", "5c151ad865ce2f3494801d7c");
// newPost("tom", "toms third post", "content1");
// newPost("tom", "toms first post", "content");
// newPost("tom", "toms second post", "content");
// newPost("hans", "hans first post", "content4");
// newPost("gustav", "gustavs second post", "content5");

module.exports = router;
