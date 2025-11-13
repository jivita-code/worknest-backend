// Employee controller
import { Request, Response, NextFunction } from "express";
import * as employeeService from "../services/employees.service.js";

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

export const getAllEmployees = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { org_id } = (req as any).user;

    if (!org_id) {
      return res.status(400).json({ error: "Organization ID not found in token" });
    }

    const employees = await employeeService.getAllEmployees(org_id);

    res.status(200).json({
      employees,
      message: "Employees retrieved successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const createEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { org_id } = (req as any).user;

    if (!org_id) {
      return res.status(400).json({ error: "Organization ID not found in token" });
    }

    const {
      employee_number,
      first_name,
      last_name,
      email,
      password,
      phone,
      designation,
      employment_type,
      join_date,
      dep_id,
    } = req.body;

    // Validate required fields
    if (!employee_number || !first_name || !last_name || !email || !password || !employment_type) {
      return res.status(400).json({
        error: "Employee number, first name, last name, email, password, and employment type are required"
      });
    }

    // Validate employment type
    const validEmploymentTypes = ['full-time', 'part-time', 'intern', 'contract'];
    if (!validEmploymentTypes.includes(employment_type)) {
      return res.status(400).json({
        error: "Employment type must be one of: full-time, part-time, intern, contract"
      });
    }

    const employeeData: any = {
      employee_number,
      first_name,
      last_name,
      email,
      password,
      employment_type,
    };

    // Add optional fields if provided
    if (phone) employeeData.phone = phone;
    if (designation) employeeData.designation = designation;
    if (join_date) employeeData.join_date = new Date(join_date);
    if (dep_id) employeeData.dep_id = dep_id;

    const employee = await employeeService.createEmployee(org_id, employeeData);

    res.status(201).json({
      employee,
      message: "Employee created successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const updateEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { org_id } = (req as any).user;
    const { emp_id } = req.params;

    if (!org_id) {
      return res.status(400).json({ error: "Organization ID not found in token" });
    }

    if (!emp_id) {
      return res.status(400).json({ error: "Employee ID is required" });
    }

    const {
      employee_number,
      first_name,
      last_name,
      email,
      password,
      phone,
      designation,
      employment_type,
      join_date,
      status,
      dep_id,
    } = req.body;

    // Validate employment type if provided
    if (employment_type) {
      const validEmploymentTypes = ['full-time', 'part-time', 'intern', 'contract'];
      if (!validEmploymentTypes.includes(employment_type)) {
        return res.status(400).json({
          error: "Employment type must be one of: full-time, part-time, intern, contract"
        });
      }
    }

    // Validate status if provided
    if (status) {
      const validStatuses = ['active', 'resigned'];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({
          error: "Status must be one of: active, resigned"
        });
      }
    }

    const employeeData: any = {};

    // Add fields if provided
    if (employee_number !== undefined) employeeData.employee_number = employee_number;
    if (first_name !== undefined) employeeData.first_name = first_name;
    if (last_name !== undefined) employeeData.last_name = last_name;
    if (email !== undefined) employeeData.email = email;
    if (password !== undefined) employeeData.password = password;
    if (phone !== undefined) employeeData.phone = phone;
    if (designation !== undefined) employeeData.designation = designation;
    if (employment_type !== undefined) employeeData.employment_type = employment_type;
    if (join_date !== undefined) employeeData.join_date = new Date(join_date);
    if (status !== undefined) employeeData.status = status;
    if (dep_id !== undefined) employeeData.dep_id = dep_id;

    const employee = await employeeService.updateEmployee(emp_id, org_id, employeeData);

    res.status(200).json({
      employee,
      message: "Employee updated successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const deleteEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { org_id } = (req as any).user;
    const { emp_id } = req.params;

    if (!org_id) {
      return res.status(400).json({ error: "Organization ID not found in token" });
    }

    if (!emp_id) {
      return res.status(400).json({ error: "Employee ID is required" });
    }

    const result = await employeeService.deleteEmployee(emp_id, org_id);

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
