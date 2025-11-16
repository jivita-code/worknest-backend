import type { Request, Response, NextFunction } from "express";

jest.mock("../../../services/employees.service", () => ({
  getEmployeeProfile: jest.fn(),
  updateEmployeeProfile: jest.fn(),
}));
import * as employeeService from "../../../services/employees.service.js";

import {
  getEmployeeProfile as getEmployeeProfileHandler,
  updateEmployeeProfile as updateEmployeeProfileHandler,
} from "../../../controllers/employee.controller.js";

describe("getEmployeeProfile", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    req = { user: {} };
    res = { status: statusMock };
    next = jest.fn();
    (employeeService.getEmployeeProfile as jest.Mock).mockReset();
  });

  test("should return employee profile when token has emp_id and org_id", async () => {
    const mockEmployee = {
      emp_id: "emp-1",
      first_name: "John",
      last_name: "Doe",
      email: "john@example.com",
    };

    (req as any).user = { emp_id: "emp-1", org_id: "org-1" };
    (employeeService.getEmployeeProfile as jest.Mock).mockResolvedValue(mockEmployee);

    await getEmployeeProfileHandler(req as Request, res as Response, next);

    expect(employeeService.getEmployeeProfile).toHaveBeenCalledWith("emp-1", "org-1");
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({ employee: mockEmployee });
    expect(next).not.toHaveBeenCalled();
  });

  test("should return 400 when emp_id missing in token", async () => {
    (req as any).user = { org_id: "org-1" };

    await getEmployeeProfileHandler(req as Request, res as Response, next);

    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Employee ID not found in token" });
    expect(employeeService.getEmployeeProfile).not.toHaveBeenCalled();
  });

  test("should return 400 when org_id missing in token", async () => {
    (req as any).user = { emp_id: "emp-1" };

    await getEmployeeProfileHandler(req as Request, res as Response, next);

    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Organization ID not found in token" });
    expect(employeeService.getEmployeeProfile).not.toHaveBeenCalled();
  });

  test("should return 404 when employee is not found", async () => {
    (req as any).user = { emp_id: "emp-1", org_id: "org-1" };
    (employeeService.getEmployeeProfile as jest.Mock).mockResolvedValue(null);

    await getEmployeeProfileHandler(req as Request, res as Response, next);

    expect(employeeService.getEmployeeProfile).toHaveBeenCalledWith("emp-1", "org-1");
    expect(statusMock).toHaveBeenCalledWith(404);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Employee not found" });
  });
});

describe("updateEmployeeProfile", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    req = { user: {}, body: {} };
    res = { status: statusMock };
    next = jest.fn();
    (employeeService.updateEmployeeProfile as jest.Mock).mockReset();
  });

  test("should update employee profile successfully", async () => {
    const updatedEmployee = { emp_id: "emp-1", first_name: "New", last_name: "Name" };

    (req as any).user = { emp_id: "emp-1", org_id: "org-1" };
    req.body = { first_name: "New", phone: "+123" };
    (employeeService.updateEmployeeProfile as jest.Mock).mockResolvedValue(updatedEmployee);

    await updateEmployeeProfileHandler(req as Request, res as Response, next);

    expect(employeeService.updateEmployeeProfile).toHaveBeenCalledWith("emp-1", "org-1", {
      first_name: "New",
      phone: "+123",
    });
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({ employee: updatedEmployee, message: "Profile updated successfully" });
  });

  test("should return 400 when emp_id missing in token", async () => {
    (req as any).user = { org_id: "org-1" };

    await updateEmployeeProfileHandler(req as Request, res as Response, next);

    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Employee ID not found in token" });
    expect(employeeService.updateEmployeeProfile).not.toHaveBeenCalled();
  });

  test("should return 400 when org_id missing in token", async () => {
    (req as any).user = { emp_id: "emp-1" };

    await updateEmployeeProfileHandler(req as Request, res as Response, next);

    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Organization ID not found in token" });
    expect(employeeService.updateEmployeeProfile).not.toHaveBeenCalled();
  });

  test("should return 400 when no fields provided", async () => {
    (req as any).user = { emp_id: "emp-1", org_id: "org-1" };
    req.body = {};

    await updateEmployeeProfileHandler(req as Request, res as Response, next);

    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({ error: "At least one field must be provided for update" });
    expect(employeeService.updateEmployeeProfile).not.toHaveBeenCalled();
  });

  test("should call next when service throws", async () => {
    const error = new Error("DB error");
    (req as any).user = { emp_id: "emp-1", org_id: "org-1" };
    req.body = { first_name: "New" };
    (employeeService.updateEmployeeProfile as jest.Mock).mockRejectedValue(error);

    await updateEmployeeProfileHandler(req as Request, res as Response, next);

    expect(employeeService.updateEmployeeProfile).toHaveBeenCalledWith("emp-1", "org-1", { first_name: "New" });
    expect(next).toHaveBeenCalledWith(error);
  });
});
