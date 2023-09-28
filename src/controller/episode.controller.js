import { episode } from "../db.js";

//FIND
export const findAllEpisodes = async (req, res) => {
  try {
    const episodes = await episode.findAll();
    res.status(200).json(episodes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//CREATE
export const createEpisode = async (req, res) => {
  try {
    const { name } = req.body;
    const newEpisode = await episode.create({ name });
    res.status(200).json(newEpisode);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
