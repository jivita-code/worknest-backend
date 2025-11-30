// PettyCash routes
import { Router } from "express";
import { createPettyCash, getMyPettyCash, deletePettyCash } from "../controllers/petty-cash.controller.js";

const router = Router();

// Protected: auth middleware applied in app.ts
router.post("/", createPettyCash);
router.get("/my", getMyPettyCash);
router.delete("/:pet_id", deletePettyCash);

export default router;
