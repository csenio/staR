var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const Tweet = require("../models/Tweet");
const Comment = require("../models/Comment");
const User = require("../models/User");

// router.use((req, res, next) => {
//   if (req.session.currentUser) {
//
//     next();
//   } else {
//     res.redirect("/login");
//   }
// });

// follow("jesco", " timmy");
// follow("jesco", " tom");
// debugger;

router.post("/register", function(req, res, next) {
  // console.log(req);

  bcrypt.hash(req.body.Registerpassword, saltRounds, function(err, hash) {
    if (err) {
      console.log("error hashing password:", err);
      res.send(`error hashing password: ${err}`);
    } else {
      const name = req.body.Registername;
      const email = req.body.Registeremail;
      const password = hash;
      User.findOne({
        $or: [{ name: name }, { email: email }]
      }).exec(function(err, user) {
        if (user) {
          console.log("there is already a user with that email/password");
        } else {
          newUser(name, password, email);
        }
      });
    }
  });
});

router.post("/login", function(req, res, next) {
  // console.log(req);
  const name = req.body.Loginname;
  const password = req.body.Loginpassword;
  var sess = req.session;

  User.findOne({ name: name })
    .then((user, error) => {
      if (error) {
        console.log("error finding user:", error);
        res.send(`error finding user: ${error}`);
      } else {
        bcrypt.compare(password, user.password, function(
          err,
          passwordIsCorrect
        ) {
          if (passwordIsCorrect == true) {
            req.session.currentUser = {
              username: user.name,
              id: user._id,
              email: user.email
            };
            // sess.currentUser = user;
            console.log(name, "just logged in");
            res.status(200).end();

            // res.cookie(user, { signed: true });
          }
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/auth", (req, res, next) => {
  // console.log(req);

  if (req.session.currentUser) {
    res.send("authenticated");
  } else {
    res.send("unauthenticated");
  }
});

// router.get("/logout", (req, res, next) => {
//   req.session.destroy(err => {
//     res.end();
//   });
// });

function follow(follower, followee) {
  User.findOne({ name: followee }).then(res => {
    console.log(`${follower} now follows ${followee}`);
    User.update({ name: follower }, { $push: { following: res._id } }).catch(
      err => console.log(err)
    );

    // debugger;
  });

  User.findOne({ name: follower }).then(res => {
    console.log(`${followee} was followed by ${follower}`);
    User.update({ name: followee }, { $push: { followers: res._id } }).catch(
      err => console.log(err)
    );
  });
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
