const { Command } = require('../models/');

const createCommand = async (commandData) => {
 try {
    const command = await Command.create(commandData);
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

module.exports = {
    createCommand,
    getCommandsByUserId,
}
