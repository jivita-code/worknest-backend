// Department controller
import { Request, Response, NextFunction } from "express";
import * as departmentService from "../services/department.service";

export const getDepartmentsDropdown = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { org_id } = (req as any).user;

    if (!org_id) {
      return res.status(400).json({ error: "Organization ID not found in token" });
    }

    const departments = await departmentService.getDepartmentsDropdown(org_id);

    res.status(200).json({
      departments,
      message: "Departments retrieved successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const getAllDepartments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { org_id } = (req as any).user;

    if (!org_id) {
      return res.status(400).json({ error: "Organization ID not found in token" });
    }

    const departments = await departmentService.getAllDepartments(org_id);

    res.status(200).json({
      departments,
      message: "Departments retrieved successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const createDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { org_id } = (req as any).user;

    if (!org_id) {
      return res.status(400).json({ error: "Organization ID not found in token" });
    }

    const { name, head_id, parent_department_id } = req.body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({
        error: "Department name is required and must be a non-empty string"
      });
    }

    // Validate optional fields
    if (head_id && typeof head_id !== 'string') {
      return res.status(400).json({
        error: "Head ID must be a string"
      });
    }

    if (parent_department_id && typeof parent_department_id !== 'string') {
      return res.status(400).json({
        error: "Parent department ID must be a string"
      });
    }

    const department = await departmentService.createDepartment(org_id, {
      name: name.trim(),
      head_id,
      parent_department_id,
    });

    res.status(201).json({
      department,
      message: "Department created successfully",
    });
  } catch (err) {
    next(err);
  }
};
