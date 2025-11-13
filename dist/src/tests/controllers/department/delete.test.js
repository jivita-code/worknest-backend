import { deleteDepartment } from "../../../controllers/department.controller.js";
import * as departmentService from "../../../services/department.service.js";
// Mock the department service
jest.mock("../../../services/department.service");
describe("Department Controller - deleteDepartment", () => {
    let mockRequest;
    let mockResponse;
    let mockNext;
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
        mockRequest.user = { org_id: "org-123" };
        mockRequest.params = { dep_id: "dep-123" };
        departmentService.deleteDepartment.mockResolvedValue(mockResult);
        await deleteDepartment(mockRequest, mockResponse, mockNext);
        expect(departmentService.deleteDepartment).toHaveBeenCalledWith("dep-123", "org-123");
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalledWith(mockResult);
    });
    it("should return 400 if organization ID not found in token", async () => {
        mockRequest.user = {};
        mockRequest.params = { dep_id: "dep-123" };
        await deleteDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({ error: "Organization ID not found in token" });
        expect(departmentService.deleteDepartment).not.toHaveBeenCalled();
    });
    it("should return 400 if department ID is not provided", async () => {
        mockRequest.user = { org_id: "org-123" };
        mockRequest.params = {};
        await deleteDepartment(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({ error: "Department ID is required" });
        expect(departmentService.deleteDepartment).not.toHaveBeenCalled();
    });
    it("should handle service errors", async () => {
        const error = new Error("Department not found or does not belong to this organization");
        mockRequest.user = { org_id: "org-123" };
        mockRequest.params = { dep_id: "dep-123" };
        departmentService.deleteDepartment.mockRejectedValue(error);
        await deleteDepartment(mockRequest, mockResponse, mockNext);
        expect(departmentService.deleteDepartment).toHaveBeenCalledWith("dep-123", "org-123");
        expect(mockNext).toHaveBeenCalledWith(error);
    });
    it("should handle department with employees error", async () => {
        const error = new Error("Cannot delete department that has employees. Please reassign or remove all employees first.");
        mockRequest.user = { org_id: "org-123" };
        mockRequest.params = { dep_id: "dep-123" };
        departmentService.deleteDepartment.mockRejectedValue(error);
        await deleteDepartment(mockRequest, mockResponse, mockNext);
        expect(departmentService.deleteDepartment).toHaveBeenCalledWith("dep-123", "org-123");
        expect(mockNext).toHaveBeenCalledWith(error);
    });
});
