import { sequelize } from "config/database";
import { SequelizeStorage, Umzug } from "umzug";

const { MIGRATE, SERVER_NAME } = process.env;

const seeds = new Umzug({
  migrations: { glob: "seeds/*.ts" },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

export const migrated = async () => {
  try {
    await sequelize.sync({ alter: true });
    if (MIGRATE === "up" && SERVER_NAME === "app1") {
      console.log("Migrate Up.");
      if (process.env.SERVER_NAME === "app1") {
        await seeds.up();
      }
    }
    if (MIGRATE && MIGRATE === "down") {
      console.log("Migrate Down.");
      await sequelize.drop();
    }
  } catch (error) {
    console.error("Unable migrated:", error);
  }
};
