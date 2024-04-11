// models/command.js
module.exports = (sequelize, DataTypes) => {
    const Command = sequelize.define('Command', {
      nameCommand: {
        type: DataTypes.STRING,
        allowNull: false
      },
      textGenerated: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    },{
      tableName: 'commands',
      underscored: true,
    });
  
    Command.associate = function(models) {
      Command.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    };
  
    return Command;
  };
  
  