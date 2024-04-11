const commandService = require('../services/commandService');

const createCommand = async (req, res) => {
  const newCommand = await commandService.createCommand(req.body);

  return res.status(201).json(newCommand);
};

const getCommandsbyUser = async (req, res) => {
  const user = await commandService.getCommandsByUserId(req.params.id)

  return res.status(200).json(user);
};

const getCommandsbyName = async (req, res) => {
  console.log(req.query.command)
  const user = await commandService.getCommandByName(req.query.command)
  console.log(user)
  return res.status(200).json(user);
};

const updateCommand = async (req, res) => {
    const { id } = req.params;
    const isUpdated = await commandService.updateCommand(id, req.body);
  
    if (isUpdated) {
      return res.status(200).json({ message: `Command ${id} atualizado com sucesso` });
    }
  
    return res.status(404).json({ message: `Command ${id} não encontrado` });
  };

module.exports = {
    createCommand,
    getCommandsbyUser,
    updateCommand,
    getCommandsbyName
}