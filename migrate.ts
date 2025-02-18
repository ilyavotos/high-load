import dotenv from "dotenv";
import { sequelize } from "config/database";
import { SequelizeStorage, Umzug } from "umzug";

dotenv.config();

const seeds = new Umzug({
  migrations: { glob: "seeds/*.ts" },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});
const migrations = new Umzug({
  migrations: { glob: "migrations/*.ts" },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    if (process.env.MIGRATE && process.env.MIGRATE === "up") {
      console.log("Migrate Up.");
      await migrations.up();
      await seeds.up();
    }
    if (process.env.MIGRATE && process.env.MIGRATE === "down") {
      console.log("Migrate Down.");
      await seeds.down();
      await migrations.down();
    }
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
