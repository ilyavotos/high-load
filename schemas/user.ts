import { z } from "zod";

export const userUpdateBalanceSchema = z.object({
  userId: z.number(),
  amount: z.number(),
});

export type UserUpdateBalance = z.infer<typeof userUpdateBalanceSchema>;
