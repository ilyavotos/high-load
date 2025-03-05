import { Request, Response } from "express";
import { taskList } from "@services/task/db";
import { tasksActiveAndWaiting } from "@services/task/queue";

export const getTaskQueue = async (_: Request, res: Response) => {
  const tasksWaiting = await tasksActiveAndWaiting();
  res.status(200).json(tasksWaiting);
};

export const getTaskHistoryList = async (_: Request, res: Response) => {
  const tasks = await taskList();
  res.status(200).json(tasks);
};
