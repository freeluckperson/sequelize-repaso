import app from "./src/app.js";
import { sequelize } from "./src/db.js";

const port = 3000;

// sequelize
//   .sync({ force: true })
//   .then(() =>
//     app.listen(port, () => console.log(`Server rised in port ${port}`))
//   );

(async () => {
  try {
    await sequelize.sync({ force: true });
    app.listen(port, () => {
      console.log(`Server rised in port ${port}`);
    });
  } catch (error) {
    console.error("Unable to start server:", error);
  }
})();
