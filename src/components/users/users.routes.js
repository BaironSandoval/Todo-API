import { Router } from "express";
import { getAllUsers, createUser, getUser } from "./users.controllers.js";

const router = Router();

router.route("/users").get(getAllUsers).post(createUser);
router.route("/users/:id").get(getUser);
export default router;
