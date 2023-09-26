import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Episode = sequelize.define(
    "episode",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  return Episode;
};
