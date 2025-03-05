import { number, z } from "zod";

export const task = z.object({
  id: z.number().optional(),
  name: z.string(),
  server: z.string(),
  durationTime: number(),
  status: z.enum(["completed"]),
});

export type TaskSchema = z.infer<typeof task>;
