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