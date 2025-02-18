import express from "express";
import { getUsers, updateBalance } from "@controllers/user";
import { validateData } from "@middlewares/validation";
import { userUpdateBalanceSchema } from "@schemas/user";

const userRouter = express.Router();

userRouter.get("/list", getUsers);
userRouter.put("/update-balance", validateData(userUpdateBalanceSchema), updateBalance);

export { userRouter };
