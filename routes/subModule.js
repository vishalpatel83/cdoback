import express from "express";
const router = express.Router();
import SubModuleController from "../controllers/SubModuleController.js";

router.get("/", SubModuleController.getAllSubModules);
router.get("/:id", SubModuleController.getSubModulesByModuleId);
router.post("/create", SubModuleController.createSubModule);
router.get("/edit/:id", SubModuleController.getSingleSubModule);
router.put("/edit/:id", SubModuleController.updateSubModuleById);
router.delete("/:id", SubModuleController.deleteSubModuleById);

export default router;
