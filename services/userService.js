const users = require("../data/users");
const createUserModel = require("../models/userModel");

function getAllUsers() {
  return users;
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function createUser(userData) {
  const { name, email, age } = userData;

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return {
      error: true,
      statusCode: 400,
      message: "Email already exists"
    };
  }

  const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  const newUser = createUserModel(newId, name, email, age);

  users.push(newUser);

  return {
    error: false,
    data: newUser
  };
}

function updateUser(id, userData) {
  const user = users.find((u) => u.id === id);

  if (!user) {
    return {
      error: true,
      statusCode: 404,
      message: "User not found"
    };
  }

  const { name, email, age } = userData;

  const emailExists = users.find(
    (u) => u.email === email && u.id !== id
  );

  if (emailExists) {
    return {
      error: true,
      statusCode: 400,
      message: "Email already exists"
    };
  }

  user.name = name;
  user.email = email;
  user.age = age;

  return {
    error: false,
    data: user
  };
}

function deleteUser(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return {
      error: true,
      statusCode: 404,
      message: "User not found"
    };
  }

  const deletedUser = users.splice(index, 1)[0];

  return {
    error: false,
    data: deletedUser
  };
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};