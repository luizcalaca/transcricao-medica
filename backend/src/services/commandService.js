const { Command } = require('../models/');

const createCommand = async ({ nameCommand, textGenerated, userId }) => {
 try {
    const command = await Command.create({ nameCommand, textGenerated, userId });
    return command;
 } catch (error) {
    throw error;
 }
};

const getCommandsByUserId = async (userId) => {
    try {
       const commands = await Command.findAll({
         where: {
           userId: userId,
           active: true,
         }
       });
       return commands;
    } catch (error) {
       throw error;
    }
};

const getCommandByName = async (nameCommand) => {
  try {
     const commands = await Command.findAll({
       where: {
         nameCommand: nameCommand,
       }
     });
     return commands;
  } catch (error) {
     throw error;
  }
};

const updateCommand = async (id, { nameCommand, textGenerated}) => {
    const [qtdUpdated] = await Command.update(
      { nameCommand, textGenerated},
      { where: { id } },
    );
  
    return qtdUpdated > 0;
  };

module.exports = {
    createCommand,
    getCommandsByUserId,
    updateCommand,
    getCommandByName
}
