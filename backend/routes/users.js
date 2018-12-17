var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const Tweet = require("../models/Tweet");
const Comment = require("../models/Comment");
const User = require("../models/User");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

function follow(follower, followee) {
  User.findOne({ name: followee }).then(res => {
    User.update({ name: follower }, { $push: { following: res._id } }).catch(
      err => console.log(err)
    );
  });

  User.findOne({ name: follower }).then(res => {
    User.update({ name: followee }, { $push: { followers: res._id } }).catch(
      err => console.log(err)
    );
  });

  console.log(`${follower} now follows ${followee}`);
}

// follow("jesco", "timmy");

function newUser(name) {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    profile: "none",
    name: name,
    email: `${name}@mail.de`,
    password: "pass",
    tweets: [],
    following: [],
    followers: []
  });

  user.save(function(err) {
    if (err) return console.log(err);
  });
}

// newUser("jesco");
// newUser("timmy");
// newUser("tom");
// newUser("gustav");
// newUser("hans");
// newUser("frodo");
// newUser("luise");
// newUser("lisa");

module.exports = router;
