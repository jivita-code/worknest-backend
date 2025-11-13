// Department routes (protected - require authentication)
import { Router } from "express";
import { getDepartmentsDropdown, getAllDepartments, createDepartment, updateDepartment, deleteDepartment } from "../controllers/department.controller";
const router = Router();
// Protected department routes
router.get("/dropdown", getDepartmentsDropdown);
router.get("/list", getAllDepartments);
router.post("/create", createDepartment);
router.put("/update/:dep_id", updateDepartment);
router.delete("/delete/:dep_id", deleteDepartment);
// Future protected routes will go here
export default router;
