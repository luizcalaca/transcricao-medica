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



// const updateCourse = async (req, res) => {
//   const { id } = req.params;
//   const isUpdated = await courseService.updateCourse(id, req.body);

//   if (isUpdated) {
//     return res.status(200).json({ message: `Curso ${id} atualizado com sucesso` });
//   }

//   return res.status(404).json({ message: `Curso ${id} não encontrado` });
// };

// const removeCourse = async (req, res) => {
//   const { id } = req.params;
//   const isRemoved = await courseService.removeCourse(id);
  
//   if (isRemoved) {
//     return res.status(200).json({ message: `Curso ${id} removido com sucesso` });
//   }

//   return res.status(404).json({ message: `Curso ${id} não encontrado` });
// };

module.exports = {
  createCourse,
  getCourses,
  updateCourse,
  removeCourse,
};