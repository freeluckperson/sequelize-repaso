import app from "./src/app.js";
import { sequelize } from "./src/db.js";

const port = 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connection successfully");
    await sequelize.sync({ alter: true });
    app.listen(port, () => {
      console.log(`Server rised in port ${port}`);
    });
  } catch (error) {
    console.error("Unable to start server:", error);
  }
})();
