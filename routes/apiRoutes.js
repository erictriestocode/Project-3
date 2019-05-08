// Requiring our models and passport as we've configured
var db = require("../models");
var passport = require("../config/passport");
// **** PASSPORT ROUTES *****
module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json("/members");
  });
  // Route for signing up a user; users password is automatically hashed and stored securely
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });
  //
  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
  //
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
// ***** END PASSPORT ROUTES *****

// ***** START SQL ROUTES *****
