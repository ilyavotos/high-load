import { User } from "@models/user";
import { fn, Op } from "sequelize";
import { UserUpdateBalance } from "@schemas/user";
import { Request, Response } from "express";

export const userList = async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.send(users);
};

export const updateBalance = async (req: Request, res: Response): Promise<any> => {
  const { userId, amount }: UserUpdateBalance = req.body;

  const [[_, count]] = await User.increment("balance", {
    by: amount,
    where: {
      id: userId,
      ...(amount < 0 ? { balance: { [Op.gte]: fn("abs", amount) } } : {}),
    },
  });

  if (!count) {
    return res.status(400).json("This might be due to insufficient funds in your account.");
  }

  res.status(200).json("The account balance has been changed");
};
