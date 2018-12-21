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

router.post("/search", (req, res, next) => {
  search(req.body.name, result => {
    res.send(result);
  });
  // debugger;
});

// router.get("/logout", (req, res, next) => {
//   req.session.destroy(err => {
//     res.end();
//   });
// });

function search(name, cb) {
  User.find({}).then(res => cb(res.filter(obj => obj.name.includes(name))));
}

// search("t");

// debugger;

router.post("/getUserInfo", (req, res, next) => {
  getUserInfo(req.body.name, (result, error) => {
    if (error) {
      console.log(error);
      res.status(404).end();
    } else if (result) {
      res.send(result);
    }
  });
});

router.post("/getUserFeed", (req, res, next) => {
  getUserFeed(req.body.name, (result, error) => {
    if (error) {
      console.log(error);
      res.status(404).end();
    } else if (result) {
      res.send(result);
    }
  });
});

router.post("/follow", (req, res, next) => {
  debugger;
  follow(
    req.session.currentUser.username,
    req.body.name,
    req.body.id,
    (result, error) => {
      if (error) {
        console.log(error);
        res.status(404).end();
      } else if (result) {
        res.send(result);
      }
    }
  );
});

//clean up this mess
function follow(follower, followee, id, cb) {
  User.findOne({ name: follower }).then(res => {
    console.log(res);
    res
      .findOne({
        following: mongoose.Types.ObjectId("5c18c7f97bc26763ec50bbe9")
      })
      .then(xxx => {
        console.log(xxx);
        debugger;
      });
    console.log(
      res.following.includes(
        mongoose.Types.ObjectId("5c18c7f97bc26763ec50bbe9")
      )
    );
    debugger;
    console.log(`${followee} was followed by ${follower}`);
    User.update({ name: followee }, { $push: { followers: res._id } }).catch(
      err => console.log(err)
    );
  });

  User.findOne({ name: followee }).then(user => {
    console.log(user);
    debugger;
    User.update({ name: follower }, { $push: { following: user._id } })
      .then(() => {
        console.log(`${follower} now follows ${followee}`);
        cb(true);
      })
      .catch(err => cb(false, err));
  });
}

function getUserInfo(name, cb) {
  User.findOne({ name: name })
    .then(user => {
      cb(user);
    })
    .catch(err => cb(false, err));
}

function getUserFeed(user, cb) {
  User.findOne({ name: user })
    .populate("tweets")
    // .sort({ tweets: { created_at: -1 } })
    .then((currentUser, err) => {
      // currentUser.tweets.sort({ created_at: -1 });
      console.log(currentUser);
      // debugger;
      if (err) {
        console.log("error fetching 'currentUser'", err);
        cb(false, err);
      } else if (currentUser) {
        console.log(currentUser);
        cb(currentUser);
      }
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

// newUser("jesco");
// newUser("timmy");
// newUser("tom");
// newUser("gustav");
// newUser("hans");
// newUser("frodo");
// newUser("luise");
// newUser("lisa");

module.exports = router;
