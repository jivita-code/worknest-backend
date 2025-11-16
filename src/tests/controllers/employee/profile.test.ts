import type { Request, Response, NextFunction } from "express";

jest.mock("../../../services/employees.service", () => ({
  getEmployeeProfile: jest.fn(),
}));
import * as employeeService from "../../../services/employees.service.js";

import { getEmployeeProfile as getEmployeeProfileHandler } from "../../../controllers/employee.controller.js";

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
