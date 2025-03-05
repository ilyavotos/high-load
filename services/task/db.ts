import { Task } from "@models/tasks";
import { TaskSchema } from "@schemas/task";

export const taskList = async () => {
  const tasks = await Task.findAll({ order: [["server", "DESC"]] });
  return tasks;
};

export const taskCreate = async (data: TaskSchema) => {
  const task = await Task.create(data, { returning: true });

  return task;
};
