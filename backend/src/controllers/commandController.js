const commandService = require('../services/commandService');

const createCommand = async (req, res) => {
  const newCommand = await commandService.createCommand(req.body);

  return res.status(201).json(newCommand);
};

const getCommandsbyUser = async (req, res) => {
  const user = await commandService.getCommandsByUserId(req.params.id)

  return res.status(200).json(user);
};

module.exports = {
    createCommand,
    getCommandsbyUser,
}