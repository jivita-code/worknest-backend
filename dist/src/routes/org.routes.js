// Organization routes (protected - require authentication)
import { Router } from "express";
import { getOrganizationProfile, updateOrganization, updateOrganizationPassword } from "../controllers/org.controller";
const router = Router();
// Protected organization routes
router.get("/profile", getOrganizationProfile);
router.put("/profile", updateOrganization);
router.put("/password", updateOrganizationPassword);
// Future protected routes will go here
export default router;
