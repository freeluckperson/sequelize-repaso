import express from "express";

const app = express();

// imports routes
import episodesRoutes from "./routes/episodes.routes.js";

// middleware
app.use(express.json());

//routes
app.use(episodesRoutes);

export default app;
