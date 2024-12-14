import express from "express";
import { userController } from "../controllers/user.controller.js";

const router = express.Router();

const { createUser, deleteUser, getUser, getUsers, updateUser } =
  userController;

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export const userRouter = router;
