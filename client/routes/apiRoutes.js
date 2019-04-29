const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  //These Routes handle user sign in/log ins
  // Route to handle login attempts. Using passport's local authentication strategy
  // user will be served content based on wether the authentication was successful or not
  app.post("/user/login", passport.authenticate("local"));

  //route for handling new user account creation requests. It will use the requirements and methods 
  //given in the user.js model to attempt to insert a new user record into the Users table of the database
  //if the user account is succesfully created, then the user will automatically be loged in via the 'user/login/' route
  app.post("/new-user/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    })
      //after succesfully creating the row for the new user, they will be redierected through the user/login route with their credentials
      .then(function () {
        res.redirect(307, "/user/login")
      }).catch(function (error) {
        res.json(error);
      })
  })

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
};
