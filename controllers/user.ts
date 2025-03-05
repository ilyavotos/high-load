import { Request, Response } from "express";
import { userList, userUpdateBalance } from "@services/user";

export const getUsers = async (req: Request, res: Response) => {
  const users = await userList();
  res.status(200).json(users);
};

export const updateUserBalance = async (req: Request, res: Response): Promise<any> => {
  const { userId, amount } = req.body;

  const count = await userUpdateBalance(userId, amount);

  if (!count) {
    return res.status(400).json("This might be due to insufficient funds in your account.");
  }

  res.status(200).json("The account balance has been changed");
};
