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