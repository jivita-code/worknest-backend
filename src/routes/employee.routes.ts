// Employee routes (protected - require authentication)
import { Router } from "express";
import { getEmployeesDropdown } from "../controllers/employee.controller";

const router = Router();

// Protected employee routes
router.get("/dropdown", getEmployeesDropdown);

// Future protected routes will go here

export default router;
