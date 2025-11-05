// Organization controller
import { Request, Response, NextFunction } from "express";
import * as orgService from "../services/org.service";

export const registerOrganization = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;
    const org = await orgService.createOrganization({ name, email, password });
    res.status(201).json(org);
  } catch (err) {
    next(err);
  }
};