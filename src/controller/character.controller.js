import { character } from "../db.js";

export const getCharacter = async (req, res) => {
  try {
    const { id } = req.query;
    let characters;
    if (id) {
      characters = await character.findByPk(id);
    } else {
      characters = await character.findAll();
    }
    res.status(200).json(characters);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createCharacter = async (req, res) => {
  try {
    const { name, gender } = req.body;
    const newCharacter = await character.create({ name, gender });
    res.status(200).json(newCharacter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
