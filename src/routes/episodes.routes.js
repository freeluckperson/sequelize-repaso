import { Router } from "express";
import {
  findAllEpisodes,
  createEpisode,
} from "../controller/episode.controller.js";

const routes = Router();

routes.get("/episode", findAllEpisodes);
routes.post("/episode", createEpisode);

export default routes;
