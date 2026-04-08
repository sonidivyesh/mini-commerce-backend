import { Request, Response } from "express";

export const healthCheck = (_req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    env: process.env.NODE_ENV,
  });
};
