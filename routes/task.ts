import express from "express";
import { getTaskQueue, getTaskHistoryList } from "@controllers/task";

const taskRouter = express.Router();

taskRouter.get("/queue", getTaskQueue);
taskRouter.get("/history/list", getTaskHistoryList);

export { taskRouter };
