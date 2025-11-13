import { updateDepartment } from "../../../controllers/department.controller";
import * as departmentService from "../../../services/department.service";
// Mock the department service
jest.mock("../../../services/department.service");
describe("Department Controller - updateDepartment", () => {
    let mockRequest;
    let mockResponse;
    let mockNext;
    beforeEach(() => {
        mockRequest = {
            params: {},
            body: {},
        };
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        mockNext = jest.fn();
        jest.clearAllMocks();
    });
    it("should update department name successfully", async () => {
        const mockDepartment = {
            dep_id: "dep-123",
            org_id: "org-123",
            name: "Updated Engineering",
            head_id: "emp-456",
            parent_department_id: null,
            created_at: new Date(),
            update_at: new Date(),
            organization: { name: "Test Org", email: "test@example.com" },
            head: { emp_id: "emp-456", first_name: "John", last_name: "Doe", email: "john@example.com", designation: "Manager" },
            parent_department: null,
            sub_departments: [],
            _count: { employees: 5 },
        };
        mockRequest.user = { org_id: "org-123" };
        mockRequest.params = { dep_id: "dep-123" };
        mockRequest.body = { name: "Updated Engineering" };
        departmentService.updateDepartment.mockResolvedValue(mockDepartment);
        await updateDepartment(mockRequest, mockResponse, mockNext);
        expect(departmentService.updateDepartment).toHaveBeenCalledWith("dep-123", "org-123", {
            name: "Updated Engineering",
        });
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalledWith({
            department: mockDepartment,
            message: "Department updated successfully",
        });
    });
    it("should clear head_id when set to '-'", async () => {
        const mockDepartment = {
            dep_id: "dep-123",
            org_id: "org-123",
            name: "Engineering",
            head_id: null,
            parent_department_id: null,
            created_at: new Date(),
            update_at: new Date(),
        };
        mockRequest.user = { org_id: "org-123" };
        mockRequest.params = { dep_id: "dep-123" };
        mockRequest.body = { head_id: "-" };
        departmentService.updateDepartment.mockResolvedValue(mockDepartment);
        await updateDepartment(mockRequest, mockResponse, mockNext);
        expect(departmentService.updateDepartment).toHaveBeenCalledWith("dep-123", "org-123", {
            head_id: "-",
        });
    });
    it("should update all fields successfully", async () => {
        const mockDepartment = {
            dep_id: "dep-123",
            org_id: "org-123",
            name: "New Engineering",
            head_id: "emp-789",
            parent_department_id: "dep-999",
            created_at: new Date(),
            update_at: new Date(),
        };
        mockRequest.user = { org_id: "org-123" };
        mockRequest.params = { dep_id: "dep-123" };
        mockRequest.body = {
            name: "New Engineering",
            head_id: "emp-789",
            parent_department_id: "dep-999"
        };
        departmentService.updateDepartment.mockResolvedValue(mockDepartment);
        await updateDepartment(mockRequest, mockResponse, mockNext);
        expect(departmentService.updateDepartment).toHaveBeenCalledWith("dep-123", "org-123", {
            name: "New Engineering",
            head_id: "emp-789",
            parent_department_id: "dep-999",
        });
    });
    it("should return 400 if org_id is not found in token", async () => {
        mockRequest.user = {};
        mockRequest.params = { dep_id: "dep-123" };
        mockRequest.body = { name: "New Name" };
        await updateDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Organization ID not found in token",
        });
    });
    it("should return 400 if dep_id is not provided", async () => {
        mockRequest.user = { org_id: "org-123" };
        mockRequest.params = {};
        mockRequest.body = { name: "New Name" };
        await updateDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Department ID is required",
        });
    });
    it("should return 400 if no fields are provided for update", async () => {
        mockRequest.user = { org_id: "org-123" };
        mockRequest.params = { dep_id: "dep-123" };
        mockRequest.body = {};
        await updateDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "At least one field (name, head_id, or parent_department_id) must be provided for update",
        });
    });
    it("should return 400 if name is empty string", async () => {
        mockRequest.user = { org_id: "org-123" };
        mockRequest.params = { dep_id: "dep-123" };
        mockRequest.body = { name: "" };
        await updateDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Department name must be a non-empty string",
        });
    });
    it("should return 400 if name is whitespace only", async () => {
        mockRequest.user = { org_id: "org-123" };
        mockRequest.params = { dep_id: "dep-123" };
        mockRequest.body = { name: "   " };
        await updateDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Department name must be a non-empty string",
        });
    });
    it("should return 400 if head_id is not a string", async () => {
        mockRequest.user = { org_id: "org-123" };
        mockRequest.params = { dep_id: "dep-123" };
        mockRequest.body = { head_id: 123 };
        await updateDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Head ID must be a string",
        });
    });
    it("should return 400 if parent_department_id is not a string", async () => {
        mockRequest.user = { org_id: "org-123" };
        mockRequest.params = { dep_id: "dep-123" };
        mockRequest.body = { parent_department_id: 123 };
        await updateDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Parent department ID must be a string",
        });
    });
    it("should trim whitespace from department name", async () => {
        const mockDepartment = {
            dep_id: "dep-123",
            org_id: "org-123",
            name: "Clean Name",
            head_id: null,
            parent_department_id: null,
            created_at: new Date(),
            update_at: new Date(),
        };
        mockRequest.user = { org_id: "org-123" };
        mockRequest.params = { dep_id: "dep-123" };
        mockRequest.body = { name: "  Clean Name  " };
        departmentService.updateDepartment.mockResolvedValue(mockDepartment);
        await updateDepartment(mockRequest, mockResponse, mockNext);
        expect(departmentService.updateDepartment).toHaveBeenCalledWith("dep-123", "org-123", {
            name: "Clean Name",
        });
    });
    it("should call next with error if service throws", async () => {
        const error = new Error("Department name already exists in this organization");
        mockRequest.user = { org_id: "org-123" };
        mockRequest.params = { dep_id: "dep-123" };
        mockRequest.body = { name: "Duplicate Name" };
        departmentService.updateDepartment.mockRejectedValue(error);
        await updateDepartment(mockRequest, mockResponse, mockNext);
        expect(mockNext).toHaveBeenCalledWith(error);
    });
});
