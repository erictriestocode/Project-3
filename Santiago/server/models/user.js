// Dependencies
// =============================================================
module.exports = function(sequelize, DataTypes) {
// This may be confusing but here Sequelize (capital) references the standard library

// sequelize (lowercase) references our connection to the DB.
// var db = require("../../config/connection");

// Creates a "user" model that matches up with DB
var User = sequelize.define("User", {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  name: DataTypes.STRING,
  created_at: DataTypes.DATE
},
{

      freezeTableName: true
    
    });

User.associate = function(models) {
  // Associating User with Posts
  // When an User is deleted, also delete any associated Posts
  User.hasMany(models.Transaction, {
    onDelete: "cascade"
  });
};

//   {

//     freezeTableName: true
  
// });

 return User;
};
