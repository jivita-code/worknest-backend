// Organization controller
import { Request, Response, NextFunction } from "express";
import * as orgService from "../services/org.service";
import * as subscriptionService from "../services/subscriptions.service";

export const registerOrganization = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;
    const org = await orgService.createOrganization({ name, email, password });
    
    try {
      // Create trial subscription for the new organization
      const planId = await subscriptionService.getTrialPlanId();
      await subscriptionService.createTrialSubscription(org.org_id, planId);
    } catch (subscriptionError) {
      // Rollback: delete the organization if subscription creation fails
      await orgService.deleteOrganization(org.org_id);
      throw subscriptionError;
    }
    
    res.status(201).json(org);
  } catch (err) {
    next(err);
  }
};