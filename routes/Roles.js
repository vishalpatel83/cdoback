import express from "express";
const router = express.Router();
import rolesController from "../controllers/rolesController.js";

router.get("/", rolesController.getAllRoles);
router.get("/:id", rolesController.getSingleRole);
router.post("/create", rolesController.createRole);
router.get("/edit/:id", rolesController.getSingleRole);
router.put("/edit/:id", rolesController.updateRole);
router.delete("/:id", rolesController.deleteRole);

export default router;
