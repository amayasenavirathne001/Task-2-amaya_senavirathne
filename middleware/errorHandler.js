const { errorResponse } = require("../utils/responseHelper");

function errorHandler(err, req, res, next) {
  console.error(err);

  return errorResponse(res, 500, "Internal server error");
}

module.exports = errorHandler;