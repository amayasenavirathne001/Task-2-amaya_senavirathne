const express = require("express");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const { successResponse, errorResponse } = require("./utils/responseHelper");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return successResponse(res, 200, "Welcome to UserCore API");
});

app.use("/users", userRoutes);

app.use((req, res) => {
  return errorResponse(res, 404, "Route not found");
});

app.use(errorHandler);

module.exports = app;