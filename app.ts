import express, { urlencoded } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import { userRouter } from "@routes/user";
import { sequelize } from "config/database";
import { errorHandler } from "@middlewares/error";
import { taskRouter } from "@routes/task";
import { createTask } from "@services/cron";
import { migrated } from "migrate";

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(urlencoded({ extended: false }));
app.use(express.json());

(async () => {
  try {
    await sequelize.authenticate();
    await migrated();
    [
      createTask("Task 1", "2 18 * * *"),
      createTask("Task 2", "2 18 * * *"),
      createTask("Task 3", "2 18 * * *"),
      createTask("Task 4", "2 18 * * *"),
      createTask("Task 5", "2 18 * * *"),
      createTask("Task 6", "2 18 * * *"),
      createTask("Task 7", "2 18 * * *"),
      createTask("Task 8", "3 18 * * *"),
      createTask("Task 9", "5 18 * * *"),
      createTask("Task 10", "5 18 * * *"),
    ];
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log(`Unable to connect to the database: ${error}`);
  }
})();

app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);
app.use(errorHandler);

process.on("SIGINT", async () => {
  await sequelize.close();
  console.log("Database connection closed. Exiting the application...");
  process.exit();
});

app.listen(PORT, () => {
  console.log(`Running server`);
});
