import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL } = process.env;

export const sequelize = new Sequelize(DATABASE_URL, {
  define: {
    timestamps: false,
  },
});
