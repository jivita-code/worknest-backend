// Auth routes for organizations
import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const router = Router();

// Public routes
router.post("/login", authController.loginOrganization);

export default router;