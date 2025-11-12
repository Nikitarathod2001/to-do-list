import express from "express";
import authUser from "../controllers/authUser.js";
import { addTask, changeStatus, deleteTodo, getTodoList } from "../controllers/todoControllers.js";

const todoRouter = express.Router();

todoRouter.post("/add-task", authUser, addTask);
todoRouter.get("/get-todo-list", authUser, getTodoList);
todoRouter.post("/change-status", changeStatus);
todoRouter.delete("/delete-todo", deleteTodo);

export default todoRouter;