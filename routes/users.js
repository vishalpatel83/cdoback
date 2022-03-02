import express from "express";
import UsersController from "../controllers/userscontroller.js";
import { check } from "express-validator";
const router = express.Router();

router.get("/", UsersController.getAllUsers);
router.get("/:Ad_Id", UsersController.getUserByAdId);
router.post("/create", UsersController.createUser);
router.get("/edit/:id", UsersController.getUserById);
router.put("/edit/:id", UsersController.updateUserById);
router.delete("/:id", UsersController.deleteUserById);

export default router;
