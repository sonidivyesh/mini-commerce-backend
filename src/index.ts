import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.send("API is running 🚀");
});

import userRoutes from "./routes/userRoutes.js";
import healthRoute from "./routes/healthRoutes.js";

const API_PREFIX = "/api";

app.use(`${API_PREFIX}/site`, healthRoute);
app.use(`${API_PREFIX}/users`, userRoutes);

console.log(`Running in ${process.env.NODE_ENV} mode`);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
