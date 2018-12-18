var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const Tweet = require("../models/Tweet");
const Comment = require("../models/Comment");
const User = require("../models/User");

/* GET users listing. */
router.post("/register", function(req, res, next) {
  console.log(req);
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    if (err) {
      console.log("error hashing password:", err);
      res.send(`error hashing password: ${err}`);
    } else {
      const name = req.body.name;
      const email = req.body.email;
      const password = hash;
      newUser(name, password, email);
    }
  });
  debugger;
});

router.post("/login", function(req, res, next) {
  console.log(req);
  debugger;
  const name = req.body.name;
  const password = req.body.password;
  User.findOne({ name: name }).then((user, error) => {
    if (error) {
      console.log("error finding user:", error);
      res.send(`error finding user: ${error}`);
    } else {
      bcrypt.compare(password, user.password, function(err, res) {
        if (res == true) {
          //res.cookie
        }
      });
    }
  });
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

function newUser(name, password, email) {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    profile: "none",
    name: name,
    email: email,
    password: password,
    tweets: [],
    following: [],
    followers: []
  });

  user.save(function(err) {
    if (err) return console.log(err);
  });
}

function login(username, password) {}

// newUser("jesco");
// newUser("timmy");
// newUser("tom");
// newUser("gustav");
// newUser("hans");
// newUser("frodo");
// newUser("luise");
// newUser("lisa");

module.exports = router;
