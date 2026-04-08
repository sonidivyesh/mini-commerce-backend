import express from "express";
import { healthCheck } from "../controllers/healthController.js";

const healthRoute = express.Router();

healthRoute.get("/health", healthCheck);

export default healthRoute;
