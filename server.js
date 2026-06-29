const app = require("./app");
const serverConfig = require("./config/serverConfig");

app.listen(serverConfig.PORT, () => {
  console.log(`UserCore API is running on http://localhost:${serverConfig.PORT}`);
});