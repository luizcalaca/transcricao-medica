// models/user.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      clinicName: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      tableName: 'users',
      underscored: true,
    });
  
    User.associate = function(models) {
      User.hasMany(models.Command, {
        foreignKey: 'userId',
        as: 'commands'
      });
    };
  
    return User;
  };
  