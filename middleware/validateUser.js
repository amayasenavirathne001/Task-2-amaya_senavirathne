const { errorResponse } = require("../utils/responseHelper");

function validateUser(req, res, next) {
  const { name, email, age } = req.body;

  if (!name || name.trim() === "") {
    return errorResponse(res, 400, "Name is required");
  }

  if (!email || email.trim() === "") {
    return errorResponse(res, 400, "Email is required");
  }

  if (!email.includes("@")) {
    return errorResponse(res, 400, "Email must be valid");
  }

  if (age === undefined || age === null) {
    return errorResponse(res, 400, "Age is required");
  }

  if (typeof age !== "number" || age <= 0) {
    return errorResponse(res, 400, "Age must be a positive number");
  }

  next();
}

module.exports = validateUser;