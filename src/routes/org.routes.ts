// Organization routes
import { Router } from "express";
import { registerOrganization } from "../controllers/org.controller";

const router = Router();

router.post("/register-org", registerOrganization);

export default router;