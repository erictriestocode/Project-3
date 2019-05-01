var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes){

    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3,36]
            }
        }

    },{
    hooks: {
        beforeCreate:  function(user) {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        }
      }
    });
    
    User.prototype.validPassword = function(password){
        return bcrypt.compareSync(password, this.password);
    }

    User.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.Transaction, {
          onDelete: "cascade"
        });
      };
    
    return User;
};