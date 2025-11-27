// Leave routes
import { Router } from "express";
import { createLeave, getMyLeaves, deleteLeave } from "../controllers/leave.controller.js";

const router = Router();

// Protected: auth middleware applied in app.ts
router.post("/", createLeave);
router.get("/my", getMyLeaves);
router.delete("/:leave_id", deleteLeave);

export default router;
