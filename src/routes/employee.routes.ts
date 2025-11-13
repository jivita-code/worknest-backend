// Employee routes (protected - require authentication)
import { Router } from "express";
import { getEmployeesDropdown, getAllEmployees, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employee.controller.js";

const router = Router();

// Protected employee routes
router.get("/dropdown", getEmployeesDropdown);
router.get("/list", getAllEmployees);
router.post("/register", createEmployee);
router.put("/update/:emp_id", updateEmployee);
router.delete("/delete/:emp_id", deleteEmployee);

// Future protected routes will go here

export default router;
