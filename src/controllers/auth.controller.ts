// Auth controller for organizations
import { Request, Response, NextFunction } from "express";
import * as authService from "../services/auth.service";

export const loginOrganization = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const authData = await authService.loginOrganization({ email, password });
    res.status(200).json(authData);
  } catch (err) {
    next(err);
  }
};

export const getOrganizationProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { org_id } = req.user as { org_id: string };

    const organization = await authService.getOrganizationById(org_id);
    if (!organization) {
      return res.status(404).json({ error: "Organization not found" });
    }

    res.status(200).json(organization);
  } catch (err) {
    next(err);
  }
};