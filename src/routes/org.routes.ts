// Organization routes (protected - require authentication)
import { Router } from "express";
import { getOrganizationProfile } from "../controllers/org.controller";

const router = Router();

// Protected organization routes
router.get("/profile", getOrganizationProfile);

// Future protected routes will go here

export default router;