import { User } from "@models/user";
import { Op } from "sequelize";
import { UserUpdateBalance } from "@schemas/user";

export const userList = async () => {
  const users = await User.findAll();
  return users;
};

export const userUpdateBalance = async ({ userId, amount }: UserUpdateBalance) => {
  const amountAbs = Math.abs(amount);

  if (amount < 0) {
    console.log("decrement");
    const [[_, count]] = await User.decrement("balance", {
      by: amountAbs,
      where: {
        id: userId,
        balance: {
          [Op.gte]: amountAbs,
        },
      },
    });
    return count;
  }

  if (amount > 0) {
    console.log("increment");
    const [[_, count]] = await User.increment("balance", {
      by: amountAbs,
      where: { id: userId },
    });
    return count;
  }
  return null;
};
