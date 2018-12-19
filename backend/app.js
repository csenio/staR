const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
// const config = require("./config");

const config = {
  frontend: "http://localhost:3000",
  backend: "http://localhost:4500",
  mongodb: "localhost:27017"
};

mongoose.connect(
  `mongodb://${config.mongodb}/clone`,
  { useNewUrlParser: true }
);

var app = express();

app.use(
  cors({
    origin: `${config.frontend}`,
    credentials: true
  })
);

app.use(cookieParser());

app.use(
  session({
    saveUninitialized: true,
    resave: true,
    secret: "my secret",
    cookie: { maxAge: 600000 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60
    })
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/index"));
app.use("/", require("./routes/users"));
app.use("/", require("./routes/tweet"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
