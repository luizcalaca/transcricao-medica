// models/command.js
module.exports = (sequelize, DataTypes) => {
    const Command = sequelize.define('Command', {
      name_command: {
        type: DataTypes.STRING,
        allowNull: false
      },
      text_generated: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    });
  
    Command.associate = function(models) {
      Command.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    };
  
    return Command;
  };
  
  