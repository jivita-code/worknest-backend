// Leave routes
import { Router } from "express";
import { createLeave, getMyLeaves, deleteLeave, getOrganizationLeavesYear } from "../controllers/leave.controller.js";
import { decisionOnLeave } from "../controllers/leave.controller.js";

const router = Router();

// Protected: auth middleware applied in app.ts
router.post("/", createLeave);
router.get("/my", getMyLeaves);
router.delete("/:leave_id", deleteLeave);
router.get("/org", getOrganizationLeavesYear);
router.patch("/:leave_id/decision", decisionOnLeave);

export default router;
