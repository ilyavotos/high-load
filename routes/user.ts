import express from "express";
import { userList, updateBalance } from "@services/user";
import { validateData } from "@middlewares/validation";
import { userUpdateBalanceSchema } from "@schemas/user";

const userRouter = express.Router();

userRouter.get("/list", userList);
userRouter.put("/update-balance", validateData(userUpdateBalanceSchema), updateBalance);

export { userRouter };
