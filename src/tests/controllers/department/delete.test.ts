import { Request, Response, NextFunction } from "express";
import { deleteDepartment } from "../../../controllers/department.controller";
import * as departmentService from "../../../services/department.service";

// Mock the department service
jest.mock("../../../services/department.service");

describe("Department Controller - deleteDepartment", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRequest = {
      params: {},
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
    jest.clearAllMocks();
  });

  it("should delete department successfully", async () => {
    const mockResult = { message: "Department deleted successfully" };

    (mockRequest as any).user = { org_id: "org-123" };
    (mockRequest as any).params = { dep_id: "dep-123" };

    (departmentService.deleteDepartment as jest.Mock).mockResolvedValue(mockResult);

    await deleteDepartment(mockRequest as Request, mockResponse as Response, mockNext);

    expect(departmentService.deleteDepartment).toHaveBeenCalledWith("dep-123", "org-123");
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockResult);
  });

  it("should return 400 if organization ID not found in token", async () => {
    (mockRequest as any).user = {};
    (mockRequest as any).params = { dep_id: "dep-123" };

    await deleteDepartment(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: "Organization ID not found in token" });
    expect(departmentService.deleteDepartment).not.toHaveBeenCalled();
  });

  it("should return 400 if department ID is not provided", async () => {
    (mockRequest as any).user = { org_id: "org-123" };
    (mockRequest as any).params = {};

    await deleteDepartment(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: "Department ID is required" });
    expect(departmentService.deleteDepartment).not.toHaveBeenCalled();
  });

  it("should handle service errors", async () => {
    const error = new Error("Department not found or does not belong to this organization");

    (mockRequest as any).user = { org_id: "org-123" };
    (mockRequest as any).params = { dep_id: "dep-123" };

    (departmentService.deleteDepartment as jest.Mock).mockRejectedValue(error);

    await deleteDepartment(mockRequest as Request, mockResponse as Response, mockNext);

    expect(departmentService.deleteDepartment).toHaveBeenCalledWith("dep-123", "org-123");
    expect(mockNext).toHaveBeenCalledWith(error);
  });

  it("should handle department with employees error", async () => {
    const error = new Error("Cannot delete department that has employees. Please reassign or remove all employees first.");

    (mockRequest as any).user = { org_id: "org-123" };
    (mockRequest as any).params = { dep_id: "dep-123" };

    (departmentService.deleteDepartment as jest.Mock).mockRejectedValue(error);

    await deleteDepartment(mockRequest as Request, mockResponse as Response, mockNext);

    expect(departmentService.deleteDepartment).toHaveBeenCalledWith("dep-123", "org-123");
    expect(mockNext).toHaveBeenCalledWith(error);
  });
});