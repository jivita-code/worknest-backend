// Auth routes for organizations
import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { registerOrganization } from "../controllers/org.controller";

const router = Router();

// Public routes
router.post("/login", authController.loginOrganization);
router.post("/register-organization", registerOrganization);

export default router;