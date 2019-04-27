const express = require("express");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("./config/passport");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//passport middleware
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
