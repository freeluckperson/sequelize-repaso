import express from "express";
import morgan from "morgan";

const app = express();

// imports routes
import episodesRoutes from "./routes/episodes.routes.js";
import characterRoutes from "./routes/characters.routes.js";

// middleware
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use(episodesRoutes);
app.use(characterRoutes);

export default app;
