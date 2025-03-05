import { Queue, Worker, Job } from "bullmq";
import { sleep, getDurationTime } from "@utils/index";
import { redisClient } from "@config/redis";
import { taskCreate } from "./db";

const taskQueue = new Queue("taskQueue", { connection: redisClient });

const worker = new Worker(
  "taskQueue",
  async (job) => {
    console.log(job.id, job.data, process.env.SERVER_NAME);
    job.updateData({ ...job.data, server: process.env.SERVER_NAME });
    await sleep();
  },
  { connection: redisClient },
);

worker.on("completed", async (job) => {
  const jobData = getJobData(job);
  await taskCreate({ ...jobData, status: "completed" });
  console.log(`${job.id} has completed!`);
});

worker.on("failed", (job, err) => {
  console.log(`${job?.id} has failed with ${err.message}`);
});

worker.on("error", (err) => {
  console.error("Worker error:", err);
});

export const taskAdd = async (name: string) => {
  await taskQueue.add(
    name,
    { server: null },
    {
      jobId: name,
      removeOnComplete: true,
    },
  );
};

export const tasksActiveAndWaiting = async () => {
  const jobs = await taskQueue.getJobs(["active", "waiting"], 0, 100, true);
  return jobs.map((job) => getJobData(job));
};

const getJobData = (job: Job) => {
  const { name, processedOn, data } = job;
  const durationTime = getDurationTime(processedOn);
  return {
    name,
    durationTime,
    server: data.server,
    status: processedOn ? "active" : "waiting",
  };
};
