import express from "express";
import authUser from "../controllers/authUser.js";
import { addTask } from "../controllers/todoControllers.js";

const todoRouter = express.Router();

todoRouter.post("/add-task", authUser, addTask);

export default todoRouter;