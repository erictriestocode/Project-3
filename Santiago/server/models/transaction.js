// Dependencies
// =============================================================
module.exports = function (sequelize, DataTypes) {
  // This may be confusing but here Sequelize (capital) references the standard library
  //var Sequelize = require("sequelize");
  // sequelize (lowercase) references our connection to the DB.
  // var db = require("../../config/connection");

  // Creates a "user" model that matches up with DB
  var Transaction = sequelize.define("Transaction", {
    Transaction_Desc: DataTypes.TEXT,
    Tokens_Transaction_amount: DataTypes.INTEGER,
    User_Name_requesting_service: DataTypes.STRING,
    User_Name_Providing_service: DataTypes.STRING,
    TotalTokensBalance: DataTypes.STRING,
    created_at: DataTypes.DATE
  },
  
  {

    freezeTableName: true
  
  });

    Transaction.associate = function (models) {
      // We're saying that a Transaction should belong to an User
      // A Transaction can't be created without an User due to the foreign key constraint
      Transaction.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        },

      });
    };

 

  return Transaction;
};

// // Syncs with DB
// Transaction.sync();
// console.log('User in model/transactions.js: ', Transaction)
// // Makes the user Model available for other files (will also create a table)
// module.exports = Transaction;
