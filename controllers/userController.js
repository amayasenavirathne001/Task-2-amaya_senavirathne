const userService = require("../services/userService");
const {
  successResponse,
  errorResponse
} = require("../utils/responseHelper");

function getAllUsers(req, res) {
  const users = userService.getAllUsers();

  return successResponse(res, 200, "Users retrieved successfully", users);
}

function getUserById(req, res) {
  const id = parseInt(req.params.id);

  const user = userService.getUserById(id);

  if (!user) {
    return errorResponse(res, 404, "User not found");
  }

  return successResponse(res, 200, "User retrieved successfully", user);
}

function createUser(req, res) {
  const result = userService.createUser(req.body);

  if (result.error) {
    return errorResponse(res, result.statusCode, result.message);
  }

  return successResponse(res, 201, "User created successfully", result.data);
}

function updateUser(req, res) {
  const id = parseInt(req.params.id);

  const result = userService.updateUser(id, req.body);

  if (result.error) {
    return errorResponse(res, result.statusCode, result.message);
  }

  return successResponse(res, 200, "User updated successfully", result.data);
}

function deleteUser(req, res) {
  const id = parseInt(req.params.id);

  const result = userService.deleteUser(id);

  if (result.error) {
    return errorResponse(res, result.statusCode, result.message);
  }

  return successResponse(res, 200, "User deleted successfully", result.data);
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};