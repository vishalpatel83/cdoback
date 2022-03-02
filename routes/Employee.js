import express from "express";
const router = express.Router();
import EmployeeController from "../controllers/employeeController.js";
import { check } from "express-validator";

router.get("/", EmployeeController.getAllEmployee);
router.post("/create", EmployeeController.createEmployee);
router.get("/edit/:id", EmployeeController.getSingleEmployee);
router.put("/edit/:id", EmployeeController.updateEmployee);
router.delete("/:id", EmployeeController.deleteEmployee);

export default router;
