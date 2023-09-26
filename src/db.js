import { Sequelize } from "sequelize";

import episodeModel from "./models/episode.model.js";
import characterModel from "./models/character.model.js";

export const sequelize = new Sequelize(
  "repaso", // db name,
  "postgres", // username
  "postgree", // password
  {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  }
);

episodeModel(sequelize);
characterModel(sequelize);

//relacion many to many
export const { character, episode } = sequelize.models;

character.belongsToMany(episode, { through: "character_episode" });
episode.belongsToMany(character, { through: "character_episode" });
