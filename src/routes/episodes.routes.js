import { Router } from "express";
import {
  findAllEpisodes,
  createEpisode,
  bulkCreateEpisode,
} from "../controller/episode.controller.js";

const routes = Router();

routes.get("/episode", findAllEpisodes);
routes.post("/episode", createEpisode);
routes.post("/episode/bulk", bulkCreateEpisode);

export default routes;
