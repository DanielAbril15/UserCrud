//Aqui van todos los request y response
const userControllers = require("./users.controllers");

const getUsers = (req, res) => {
  const data = userControllers.getAllUsers();
  res.status(200).json(data);
};

const createNewUser = (req, res) => {
  const { data } = req.body;
  if (data) {
    const userData = userControllers.createUser(data);
    res.status(201).json(userData);
  } else {
    res.status(400).json({ message: "Missing Data" });
  }
};
const getUserById = (req, res) => {
  const id = req.params.id;
  const data = userControllers.getOneUser(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: "id invalid" });
  }
};

module.exports = {
  getUserById,
  getUsers,
  createNewUser,
};
