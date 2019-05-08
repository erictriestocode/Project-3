// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var {Transaction} = require("../models");
const router = require('express').Router()

//console.log('User in routes/transactions.js: ', Transaction)
// Routes
// =============================================================
module.exports = router
// module.exports = function(app) {

  // Get all Users
  router.get("/", function(req, res) {

    // Finding all Users, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Transaction.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });
  router.get("/:id", function(req, res) {

    // Finding all Users, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Transaction.findById(req.params.id).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });


  // Add a User
  router.post("/", function(req, res) {

    console.log("transaction Data:");
    console.log(req.body);

    Transaction.create({
      Transaction_Desc: req.body.Transaction_Desc,
      Tokens_Transaction_amount: req.body.Tokens_Transaction_amount,
      User_Name_requesting_service: req.body.User_Name_requesting_service,
      User_Name_Providing_service: req.body.User_Name_Providing_service,
      TotalTokensBalance: req.body.TotalTokensBalance,
      created_at: req.body.created_at
    }).then(function(results) {
      //console.log(results)
      // `results` here would be the newly created User
      res.end();
    });

  });

//};