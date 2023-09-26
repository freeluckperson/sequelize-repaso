import { Op } from "sequelize";
import { character, episode } from "../db.js";

//ENCONTRAR
export const getCharacter = async (req, res) => {
  try {
    const { id, gender, name } = req.query;

    let characters;

    if (id) {
      characters = await character.findByPk(id, {
        include: {
          model: episode,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
      if (!characters) throw Error("Invalid id");
    } else if (gender) {
      const allowedGenders = ["male", "female", "genderless", "unknown"];
      if (!allowedGenders.includes(gender)) {
        throw Error("Invalid gender");
      }
      characters = await character.findAll({
        where: {
          gender,
        },
        include: {
          model: episode,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
    } else if (name) {
      characters = await character.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: {
          model: episode,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
        limit: 15,
      });
    } else {
      characters = await character.findAll({
        include: {
          model: episode,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
    }

    res.status(200).json(characters);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//CREATE
export const createCharacter = async (req, res) => {
  try {
    const { name, gender, episodes } = req.body;
    const newCharacter = await character.create({ name, gender });
    newCharacter.addEpisodes(episodes);
    res.status(200).json(newCharacter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//FILTRAR PRECIO
// const { price, minPrice, maxPrice } = req.query;
// let products;
// if (price) {
//   products = await Product.findAll({
//     where: {
//       price: {
//         [Op.eq]: price
//       }
//     }
//   });
// } else if (minPrice && maxPrice) {
//   products = await Product.findAll({
//     where: {
//       price: {
//         [Op.between]: [minPrice, maxPrice]
//       }
//     }
//   });
// } else if (minPrice) {
//   products = await Product.findAll({
//     where: {
//       price: {
//         [Op.gte]: minPrice
//       }
//     }
//   });
// } else if (maxPrice) {
//   products = await Product.findAll({
//     where: {
//       price: {
//         [Op.lte]: maxPrice
//       }
//     }
//   });
// }
