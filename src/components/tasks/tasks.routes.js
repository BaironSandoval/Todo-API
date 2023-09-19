import { Router } from "express";
import { getAllTasks, createTask, updateTask, deleteTask } from "./tasks.controllers.js";

const router = Router();

router.route("/tasks").get(getAllTasks).post(createTask)
router.route("/tasks/:id").put(updateTask).delete(deleteTask)

export default router;
