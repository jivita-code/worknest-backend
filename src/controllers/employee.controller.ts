// Employee controller
import { Request, Response, NextFunction } from "express";
import * as employeeService from "../services/employees.service";

export const getEmployeesDropdown = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { org_id } = (req as any).user;

    if (!org_id) {
      return res.status(400).json({ error: "Organization ID not found in token" });
    }

    const employees = await employeeService.getEmployeesDropdown(org_id);

    res.status(200).json({
      employees,
      message: "Employees retrieved successfully",
    });
  } catch (err) {
    next(err);
  }
};
