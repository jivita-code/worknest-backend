// Auth routes for organizations
import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

// Public routes
router.post("/login", authController.loginOrganization);

// Protected routes
router.get("/profile", authMiddleware, authController.getOrganizationProfile);

export default router;