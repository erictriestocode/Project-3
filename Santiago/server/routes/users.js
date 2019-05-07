// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var {User} = require("../models");
const router = require('express').Router()

console.log('User in routes/users.js: ', User)


// Routes
// =============================================================
module.exports = router

// module.exports = function(app)
 //{

  // Get all Users
  router.get("/", function(req, res) {

    // Finding all Users, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    User.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  router.get("/:id", function(req, res) {

    // Finding all Users, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    User.findById(req.params.id).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a User
  router.post("/", function(req, res) {

    console.log("user Data:");
    console.log(req.body);

    User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created User
      res.end();
    });

  });

// };