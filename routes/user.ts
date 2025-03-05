import express from "express";
import { validateData } from "@middlewares/validation";
import { userUpdateBalanceSchema } from "@schemas/user";
import { getUsers, updateUserBalance } from "@controllers/user";

const userRouter = express.Router();

userRouter.get("/list", getUsers);
userRouter.put("/update-balance", validateData(userUpdateBalanceSchema), updateUserBalance);

export { userRouter };
