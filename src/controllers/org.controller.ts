// Organization controller
import { Request, Response, NextFunction } from "express";
import * as orgService from "../services/org.service";

export const registerOrganization = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;

    // Register organization with trial subscription (atomic operation)
    const org = await orgService.registerOrganizationWithTrial({ name, email, password });

    res.status(201).json({
      organization: org,
    });
  } catch (err) {
    next(err);
  }
};

export const getOrganizationProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { org_id } = (req as any).user;

    if (!org_id) {
      return res.status(400).json({ error: "Organization ID not found in token" });
    }

    const organization = await orgService.getOrganizationById(org_id);

    if (!organization) {
      return res.status(404).json({ error: "Organization not found" });
    }

    res.status(200).json({
      organization,
    });
  } catch (err) {
    next(err);
  }
};