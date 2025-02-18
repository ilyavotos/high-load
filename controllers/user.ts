import { Request, Response } from "express";
import { userUpdateBalance, userList } from "@services/user";

export const getUsers = async (_: Request, res: Response) => {
  try {
    const users = await userList();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateBalance = async (req: Request, res: Response): Promise<any> => {
  try {
    const balance = await userUpdateBalance(req.body);

    if (!balance) {
      return res.status(400).json("This might be due to insufficient funds in your account.");
    }

    res.status(200).json(balance);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating balance", error });
  }
};
