const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const http = require("http"); // For initial testing!
// const passport = require("./config/passport"); ***** BEC TODO
// var Sequelize = require("sequelize"); ***** SANTIAGO TODO
// const routes = require("./routes"); ***** ERIC TODO


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//passport middleware ***** BEC TODO
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true}));
// app.use(passport.initialize());
// app.use(passport.session());

// Passport config ***** BEC TODO
// require("./config/passport")(passport);

// Routes ***** ERIC TODO
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);
app.get("*", (req,res) => {
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
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
