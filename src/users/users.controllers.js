//aqui va toda la logica que interactue con la base de datos
const uuid = require("uuid");
const DB = [
  {
    id: "bc2452a6-a805-4ca4-a259-8056c6e57a13",
    first_name: "Daniel",
    last_name: "Abril",
    email: "danielabril@gmail.com",
    password: "root",
    birthday: "1993/02/20",
  },
  {
    id: "2ed7b042-294d-4cf9-9a27-5f828bfcf167",
    first_name: "Eduardo",
    last_name: "Garcia",
    email: "eduardogarcia@gmail.com",
    password: "string",
    birthday: "2000/10/22",
  },
];

const getAllUsers = () => {
  return DB;
};

const createUser = (data) => {
  const newUser = {
    id: uuid.v4(),
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    password: data.password,
    birthday: data.birthday,
  };
  DB.push(newUser);
  return newUser;
};

const getOneUser = (id) => {
  const data = DB.find((user) => user.id === id);
  return data;
};

module.exports = {
  getOneUser,
  createUser,
  getAllUsers,
};
