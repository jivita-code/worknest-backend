import { createDepartment } from "../../../controllers/department.controller";
import * as departmentService from "../../../services/department.service";
// Mock the department service
jest.mock("../../../services/department.service");
describe("Department Controller - createDepartment", () => {
    let mockRequest;
    let mockResponse;
    let mockNext;
    beforeEach(() => {
        mockRequest = {
            body: {},
        };
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        mockNext = jest.fn();
        jest.clearAllMocks();
    });
    it("should create a department successfully with only required fields", async () => {
        const mockDepartment = {
            dep_id: "dep-123",
            org_id: "org-123",
            name: "Engineering",
            head_id: null,
            parent_department_id: null,
            created_at: new Date(),
            update_at: new Date(),
            organization: { name: "Test Org", email: "test@example.com" },
            head: null,
            parent_department: null,
        };
        mockRequest.user = { org_id: "org-123" };
        mockRequest.body = {
            name: "Engineering",
        };
        departmentService.createDepartment.mockResolvedValue(mockDepartment);
        await createDepartment(mockRequest, mockResponse, mockNext);
        expect(departmentService.createDepartment).toHaveBeenCalledWith("org-123", {
            name: "Engineering",
        });
        expect(mockResponse.status).toHaveBeenCalledWith(201);
        expect(mockResponse.json).toHaveBeenCalledWith({
            department: mockDepartment,
            message: "Department created successfully",
        });
    });
    it("should create a department successfully with all optional fields", async () => {
        const mockDepartment = {
            dep_id: "dep-123",
            org_id: "org-123",
            name: "Frontend Development",
            head_id: "emp-456",
            parent_department_id: "dep-789",
            created_at: new Date(),
            update_at: new Date(),
            organization: { name: "Test Org", email: "test@example.com" },
            head: { emp_id: "emp-456", first_name: "John", last_name: "Doe", email: "john@example.com" },
            parent_department: { dep_id: "dep-789", name: "Engineering" },
        };
        mockRequest.user = { org_id: "org-123" };
        mockRequest.body = {
            name: "Frontend Development",
            head_id: "emp-456",
            parent_department_id: "dep-789",
        };
        departmentService.createDepartment.mockResolvedValue(mockDepartment);
        await createDepartment(mockRequest, mockResponse, mockNext);
        expect(departmentService.createDepartment).toHaveBeenCalledWith("org-123", {
            name: "Frontend Development",
            head_id: "emp-456",
            parent_department_id: "dep-789",
        });
        expect(mockResponse.status).toHaveBeenCalledWith(201);
        expect(mockResponse.json).toHaveBeenCalledWith({
            department: mockDepartment,
            message: "Department created successfully",
        });
    });
    it("should trim whitespace from department name", async () => {
        const mockDepartment = {
            dep_id: "dep-123",
            org_id: "org-123",
            name: "HR Department",
            head_id: null,
            parent_department_id: null,
            created_at: new Date(),
            update_at: new Date(),
        };
        mockRequest.user = { org_id: "org-123" };
        mockRequest.body = {
            name: "  HR Department  ",
        };
        departmentService.createDepartment.mockResolvedValue(mockDepartment);
        await createDepartment(mockRequest, mockResponse, mockNext);
        expect(departmentService.createDepartment).toHaveBeenCalledWith("org-123", {
            name: "HR Department",
        });
    });
    it("should return 400 if org_id is not found in token", async () => {
        mockRequest.user = {};
        await createDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Organization ID not found in token",
        });
    });
    it("should return 400 if name is missing", async () => {
        mockRequest.user = { org_id: "org-123" };
        mockRequest.body = {};
        await createDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Department name is required and must be a non-empty string",
        });
    });
    it("should return 400 if name is empty string", async () => {
        mockRequest.user = { org_id: "org-123" };
        mockRequest.body = { name: "" };
        await createDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Department name is required and must be a non-empty string",
        });
    });
    it("should return 400 if name is whitespace only", async () => {
        mockRequest.user = { org_id: "org-123" };
        mockRequest.body = { name: "   " };
        await createDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Department name is required and must be a non-empty string",
        });
    });
    it("should return 400 if name is not a string", async () => {
        mockRequest.user = { org_id: "org-123" };
        mockRequest.body = { name: 123 };
        await createDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Department name is required and must be a non-empty string",
        });
    });
    it("should return 400 if head_id is not a string", async () => {
        mockRequest.user = { org_id: "org-123" };
        mockRequest.body = { name: "Engineering", head_id: 123 };
        await createDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Head ID must be a string",
        });
    });
    it("should return 400 if parent_department_id is not a string", async () => {
        mockRequest.user = { org_id: "org-123" };
        mockRequest.body = { name: "Engineering", parent_department_id: 123 };
        await createDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Parent department ID must be a string",
        });
    });
    it("should call next with error if service throws", async () => {
        const error = new Error("Department name already exists in this organization");
        mockRequest.user = { org_id: "org-123" };
        mockRequest.body = {
            name: "Engineering",
        };
        departmentService.createDepartment.mockRejectedValue(error);
        await createDepartment(mockRequest, mockResponse, mockNext);
        expect(mockNext).toHaveBeenCalledWith(error);
    });
});
//# sourceMappingURL=create.test.js.map