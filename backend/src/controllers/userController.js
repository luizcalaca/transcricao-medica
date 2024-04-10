const userService = require('../services/userService');

const createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);

  return res.status(201).json(newUser);
};

const getUserByEmailAndPassword = async (req, res) => {
  const user = await userService.getUserByEmailAndPassword(req.body)

  return res.status(200).json(user);
};

const loginUser = async (req, res) => {
    const user = await userService.loginUser(req.body)
  
    return res.status(200).json(user);
  };


const updateUser = async (req, res) => {
  const { id } = req.params;
  const isUpdated = await userService.updateUser(id, req.body);

  if (isUpdated) {
    return res.status(200).json({ message: `user ${id} atualizado com sucesso` });
  }

  return res.status(404).json({ message: `user ${id} não encontrado` });
};

const removeUser = async (req, res) => {
  const { id } = req.params;
  const isRemoved = await userService.removeUser(id);
  
  if (isRemoved) {
    return res.status(200).json({ message: `User ${id} removido com sucesso` });
  }

  return res.status(404).json({ message: `User ${id} não encontrado` });
};

module.exports = {
  createUser,
  getUserByEmailAndPassword,
  removeUser,
  updateUser,
  loginUser
};