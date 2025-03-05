import { CronJob, validateCronExpression } from "cron";
import { taskAdd } from "./task/queue";

export const createTask = (name: string, cronTime: string) => {
  const { valid, error } = validateCronExpression(cronTime);
  if (!valid) {
    throw new Error(error?.message);
  }
  const job = CronJob.from({
    cronTime,
    onTick: async function () {
      await taskAdd(name);
      job.stop();
    },
    start: true,
    waitForCompletion: true,
  });
};
