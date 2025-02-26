import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const message = err.message || "Something went wrong";
  res.status(500).json({ message });
};
