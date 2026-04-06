import express from "express";
import { createUser, getAllUsers } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/createUser", createUser);
userRoutes.get("/getAllUsers", getAllUsers);

export default userRoutes;
