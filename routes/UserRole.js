import express from "express";
const router = express.Router();
import UserRoleController from "../controllers/userRolecontroller.js";
//UserRoleModel
router.get("/", UserRoleController.getAllUserRoleModel);
router.post("/create", UserRoleController.createUserRoleModel);
router.get("/edit/:id", UserRoleController.getSingleUserRoleModelById);
router.put("/edit/:id", UserRoleController.updateUserRoleModelById);
router.delete("/:id", UserRoleController.deleteUserRoleModelById);

export default router;
