// Auth routes for organizations
import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import { registerOrganization } from "../controllers/org.controller.js";

const router = Router();

// Public routes
router.post("/login", authController.login);
router.post("/register-organization", registerOrganization);

export default router;