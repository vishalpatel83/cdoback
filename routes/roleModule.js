import express from "express";
const router = express.Router();
import RoleModuleController from "../controllers/roleModuleController.js";

router.get("/", RoleModuleController.getAllRoleModule);
router.get(
  "/roleandmodule/:roleId/:moduleId",
  RoleModuleController.getSomeRoleModuleByRoleIdAndModuleId
);
router.get("/role/:roleId", RoleModuleController.getSomeRoleModulebyRoleId);
router.get(
  "/module/:moduleId",
  RoleModuleController.getSomeRoleModuleByModuleId
);
router.post("/rolecreate", RoleModuleController.createRoleModuleByRole);
router.post(
  "/submodulecreate",
  RoleModuleController.createRoleModuleBySubModule
);
router.put("/edit/:id", RoleModuleController.updateRoleModuleById);

// router.get("/edit/:id", RoleModuleController.getRoleModuleById);
// router.get("/:moduleId", RoleModuleController.getSubModuleByModuleId);
// router.delete("/:id", RoleModuleController.deleteRoleModuleById);

export default router;
