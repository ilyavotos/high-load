import express, { urlencoded } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import { userRouter } from "@routes/user";
import { sequelize } from "config/database";
import { errorHandler } from "@middlewares/error";

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(urlencoded({ extended: false }));
app.use(express.json());

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log(`Unable to connect to the database: ${error}`);
  }
})();

app.use("/api/user", userRouter);
app.use(errorHandler);

process.on("SIGINT", async () => {
  await sequelize.close();
  console.log("Database connection closed. Exiting the application...");
  process.exit();
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
