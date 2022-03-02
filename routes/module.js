import express from "express";
const router = express.Router();
import ModuleController from "../controllers/moduleController.js";
//module
router.get("/", ModuleController.getAllModule);
router.get("/:id", ModuleController.getSingleModuleById);
router.post("/create", ModuleController.createModule);
router.get("/edit/:id", ModuleController.getSingleModuleById);
router.put("/edit/:id", ModuleController.updateModuleById);
router.delete("/:id", ModuleController.deleteModuleById);

export default router;
