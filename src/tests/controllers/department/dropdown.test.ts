import { Request, Response, NextFunction } from "express";
import { getDepartmentsDropdown } from "../../../controllers/department.controller.js";
import * as departmentService from "../../../services/department.service.js";

// Mock the department service
jest.mock("../../../services/department.service");

describe("Department Controller - getDepartmentsDropdown", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
    jest.clearAllMocks();
  });

  it("should return departments dropdown successfully", async () => {
    const mockDepartments = [
      { dep_id: "dep-123", name: "Engineering" },
      { dep_id: "dep-456", name: "Human Resources" },
      { dep_id: "dep-789", name: "Marketing" },
    ];

    (mockRequest as any).user = { org_id: "org-123" };
    (departmentService.getDepartmentsDropdown as jest.Mock).mockResolvedValue(mockDepartments);

    await getDepartmentsDropdown(mockRequest as Request, mockResponse as Response, mockNext);

    expect(departmentService.getDepartmentsDropdown).toHaveBeenCalledWith("org-123");
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({
      departments: mockDepartments,
      message: "Departments retrieved successfully",
    });
  });

  it("should return empty array when no departments exist", async () => {
    const mockDepartments: any[] = [];

    (mockRequest as any).user = { org_id: "org-123" };
    (departmentService.getDepartmentsDropdown as jest.Mock).mockResolvedValue(mockDepartments);

    await getDepartmentsDropdown(mockRequest as Request, mockResponse as Response, mockNext);

    expect(departmentService.getDepartmentsDropdown).toHaveBeenCalledWith("org-123");
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({
      departments: [],
      message: "Departments retrieved successfully",
    });
  });

  it("should return 400 if org_id is not found in token", async () => {
    (mockRequest as any).user = {};

    await getDepartmentsDropdown(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: "Organization ID not found in token",
    });
    expect(departmentService.getDepartmentsDropdown).not.toHaveBeenCalled();
  });

  it("should call next with error if service throws", async () => {
    const error = new Error("Database connection failed");
    (mockRequest as any).user = { org_id: "org-123" };

    (departmentService.getDepartmentsDropdown as jest.Mock).mockRejectedValue(error);

    await getDepartmentsDropdown(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockNext).toHaveBeenCalledWith(error);
  });
});