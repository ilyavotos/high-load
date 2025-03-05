import { User } from "@models/user";
import { fn, Op } from "sequelize";
import { Request, Response } from "express";

export const userList = async () => {
  return await User.findAll();
};

export const userUpdateBalance = async (userId: number, amount: number) => {
  const [[_, count]] = await User.increment("balance", {
    by: amount,
    where: {
      id: userId,
      ...(amount < 0 ? { balance: { [Op.gte]: fn("abs", amount) } } : {}),
    },
  });

  return count;
};
