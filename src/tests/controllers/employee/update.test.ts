import type { Request, Response, NextFunction } from "express";

// Mock the employee service
jest.mock("../../../services/employees.service", () => ({
  updateEmployee: jest.fn(),
}));
import * as employeeService from "../../../services/employees.service.js";

import { updateEmployee } from "../../../controllers/employee.controller.js";

describe("updateEmployee", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    req = {};
    res = { status: statusMock };
    next = jest.fn();
    (employeeService.updateEmployee as jest.Mock).mockReset();
  });

  test("should update employee successfully", async () => {
    const mockEmployee = {
      emp_id: "emp-1",
      employee_number: "EMP001",
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
      designation: "Senior Software Engineer",
      employment_type: "full-time",
      join_date: new Date("2023-01-01"),
      status: "active",
      created_at: new Date(),
      update_at: new Date(),
      department: {
        dep_id: "dep-1",
        name: "Engineering",
      },
      headed_department: null,
      organization: {
        name: "Test Org",
        email: "org@example.com",
      },
    };

    (req as any).user = { org_id: "org-123" };
    (req as any).params = { emp_id: "emp-1" };
    req.body = {
      designation: "Senior Software Engineer",
      phone: "+1234567890",
    };

    (employeeService.updateEmployee as jest.Mock).mockResolvedValue(mockEmployee);

    await updateEmployee(req as Request, res as Response, next);

    expect(employeeService.updateEmployee).toHaveBeenCalledWith("emp-1", "org-123", {
      designation: "Senior Software Engineer",
      phone: "+1234567890",
    });
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      employee: mockEmployee,
      message: "Employee updated successfully",
    });
  });

  test("should update employee status to resigned and set resign_date", async () => {
    const mockEmployee = {
      emp_id: "emp-1",
      employee_number: "EMP001",
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      status: "resigned",
      resign_date: new Date(),
      created_at: new Date(),
      update_at: new Date(),
    };

    (req as any).user = { org_id: "org-123" };
    (req as any).params = { emp_id: "emp-1" };
    req.body = {
      status: "resigned",
    };

    (employeeService.updateEmployee as jest.Mock).mockResolvedValue(mockEmployee);

    await updateEmployee(req as Request, res as Response, next);

    expect(employeeService.updateEmployee).toHaveBeenCalledWith("emp-1", "org-123", {
      status: "resigned",
    });
    expect(statusMock).toHaveBeenCalledWith(200);
  });

  test("should return 400 if org_id is not found in token", async () => {
    (req as any).user = {};
    (req as any).params = { emp_id: "emp-1" };
    req.body = { first_name: "Jane" };

    await updateEmployee(req as Request, res as Response, next);

    expect(employeeService.updateEmployee).not.toHaveBeenCalled();
    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({
      error: "Organization ID not found in token",
    });
  });

  test("should return 400 if emp_id is not provided", async () => {
    (req as any).user = { org_id: "org-123" };
    (req as any).params = {};
    req.body = { first_name: "Jane" };

    await updateEmployee(req as Request, res as Response, next);

    expect(employeeService.updateEmployee).not.toHaveBeenCalled();
    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({
      error: "Employee ID is required",
    });
  });

  test("should return 400 for invalid employment type", async () => {
    (req as any).user = { org_id: "org-123" };
    (req as any).params = { emp_id: "emp-1" };
    req.body = { employment_type: "invalid-type" };

    await updateEmployee(req as Request, res as Response, next);

    expect(employeeService.updateEmployee).not.toHaveBeenCalled();
    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({
      error: "Employment type must be one of: full-time, part-time, intern, contract",
    });
  });

  test("should return 400 for invalid status", async () => {
    (req as any).user = { org_id: "org-123" };
    (req as any).params = { emp_id: "emp-1" };
    req.body = { status: "invalid-status" };

    await updateEmployee(req as Request, res as Response, next);

    expect(employeeService.updateEmployee).not.toHaveBeenCalled();
    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({
      error: "Status must be one of: active, resigned",
    });
  });

  test("should call next with error if service throws", async () => {
    const error = new Error("Employee not found");
    (req as any).user = { org_id: "org-123" };
    (req as any).params = { emp_id: "emp-1" };
    req.body = { first_name: "Jane" };

    (employeeService.updateEmployee as jest.Mock).mockRejectedValue(error);

    await updateEmployee(req as Request, res as Response, next);

    expect(employeeService.updateEmployee).toHaveBeenCalledWith("emp-1", "org-123", {
      first_name: "Jane",
    });
    expect(next).toHaveBeenCalledWith(error);
  });
});