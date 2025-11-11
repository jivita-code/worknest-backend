// Department routes (protected - require authentication)
import { Router } from "express";
import { getDepartmentsDropdown, createDepartment } from "../controllers/department.controller";

const router = Router();

// Protected department routes
router.get("/dropdown", getDepartmentsDropdown);
router.post("/create", createDepartment);

// Future protected routes will go here

export default router;
