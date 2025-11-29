// Attendance routes
import { Router } from "express";
import { checkInEmployee, checkOutEmployee, getTodayStatus, getOrganizationAttendanceHistory, getMyWeeklyAttendance, getEmployeeYearSummary } from "../controllers/attendance.controller.js";

const router = Router();

// Protected routes (auth middleware applied in app.ts)
router.post("/check-in", checkInEmployee);
router.post("/check-out", checkOutEmployee);
router.get("/today", getTodayStatus);
router.get("/history", getOrganizationAttendanceHistory);
router.get("/weekly", getMyWeeklyAttendance);
router.get("/org/employee/:emp_id/summary", getEmployeeYearSummary);

export default router;

