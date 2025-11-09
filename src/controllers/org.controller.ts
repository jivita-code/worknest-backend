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

export const updateOrganization = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { org_id } = (req as any).user;

    if (!org_id) {
      return res.status(400).json({ error: "Organization ID not found in token" });
    }

    const { name, industry, registration_no, address, phone, logo_url } = req.body;

    // Check if at least one field is provided for update
    const updateData = { name, industry, registration_no, address, phone, logo_url };
    const hasUpdates = Object.values(updateData).some(value => value !== undefined);

    if (!hasUpdates) {
      return res.status(400).json({ error: "At least one field must be provided for update" });
    }

    const updatedOrganization = await orgService.updateOrganization(org_id, updateData);

    res.status(200).json({
      organization: updatedOrganization,
      message: "Organization updated successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const updateOrganizationPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { org_id } = (req as any).user;

    if (!org_id) {
      return res.status(400).json({ error: "Organization ID not found in token" });
    }

    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: "Current password and new password are required" });
    }

    if (currentPassword === newPassword) {
      return res.status(400).json({ error: "New password must be different from current password" });
    }

    const updatedOrganization = await orgService.updateOrganizationPassword(org_id, currentPassword, newPassword);

    res.status(200).json({
      organization: updatedOrganization,
      message: "Password updated successfully",
    });
  } catch (err) {
    next(err);
  }
};