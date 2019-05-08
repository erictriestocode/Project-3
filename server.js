const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const http = require("http"); // For initial testing!
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./config/passport"); // ***** BEC TODO
const db = require("./models");

// const Sequelize = require("sequelize"); ***** SANTIAGO TODO
// const routes = require("./routes"); ***** ERIC TODO

//MIDDLEWARE--------------------------------------------------
// Define middleware here
// app.use(express.urlencoded({
//   extended: true
// }));
// app.use(express.json());

// Define middleware here
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Static directory
app.use(express.static("client/public"));
app.use('/api', require('/routes'))

//passport middleware ***** BEC TODO
app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
//-----------------------------------------------------------------

// Passport config ***** BEC TODO
// require("./config/passport")(passport);

// Routes ***** ERIC TODO
// Requiring our routes
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, "client","build","index.html"));
  });
}

// Add routes, both API and view
// app.use(routes);

// Start the API server
db.sequelize.sync({ force: true }).then(function () {
  // console.log("DB connected!");
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

