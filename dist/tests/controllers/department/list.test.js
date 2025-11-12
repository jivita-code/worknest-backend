import { getAllDepartments } from "../../../controllers/department.controller";
import * as departmentService from "../../../services/department.service";
// Mock the department service
jest.mock("../../../services/department.service");
describe("Department Controller - getAllDepartments", () => {
    let mockRequest;
    let mockResponse;
    let mockNext;
    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        mockNext = jest.fn();
        jest.clearAllMocks();
    });
    it("should return all departments successfully", async () => {
        const mockDepartments = [
            {
                dep_id: "dep-123",
                org_id: "org-123",
                name: "Engineering",
                head_id: "emp-456",
                parent_department_id: null,
                created_at: new Date(),
                update_at: new Date(),
                head: {
                    emp_id: "emp-456",
                    first_name: "John",
                    last_name: "Doe",
                    email: "john@example.com",
                    designation: "Engineering Manager",
                },
                parent_department: null,
                sub_departments: [],
                employees: [], // Head is not in employees array, so count should be 5 + 1 = 6
                _count: { employees: 6 }, // Updated to reflect head being counted
            },
            {
                dep_id: "dep-789",
                org_id: "org-123",
                name: "Human Resources",
                head_id: "emp-101",
                parent_department_id: null,
                created_at: new Date(),
                update_at: new Date(),
                head: {
                    emp_id: "emp-101",
                    first_name: "Jane",
                    last_name: "Smith",
                    email: "jane@example.com",
                    designation: "HR Manager",
                },
                parent_department: null,
                sub_departments: [],
                employees: [
                    { emp_id: "emp-101" }, // Head is already in employees, so no +1
                ],
                _count: { employees: 3 }, // Remains 3 since head is already counted
            },
        ];
        mockRequest.user = { org_id: "org-123" };
        departmentService.getAllDepartments.mockResolvedValue(mockDepartments);
        await getAllDepartments(mockRequest, mockResponse, mockNext);
        expect(departmentService.getAllDepartments).toHaveBeenCalledWith("org-123");
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalledWith({
            departments: mockDepartments,
            message: "Departments retrieved successfully",
        });
    });
    it("should return empty array when no departments exist", async () => {
        const mockDepartments = [];
        mockRequest.user = { org_id: "org-123" };
        departmentService.getAllDepartments.mockResolvedValue(mockDepartments);
        await getAllDepartments(mockRequest, mockResponse, mockNext);
        expect(departmentService.getAllDepartments).toHaveBeenCalledWith("org-123");
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalledWith({
            departments: [],
            message: "Departments retrieved successfully",
        });
    });
    it("should return 400 if org_id is not found in token", async () => {
        mockRequest.user = {};
        await getAllDepartments(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Organization ID not found in token",
        });
        expect(departmentService.getAllDepartments).not.toHaveBeenCalled();
    });
    it("should call next with error if service throws", async () => {
        const error = new Error("Database connection failed");
        mockRequest.user = { org_id: "org-123" };
        departmentService.getAllDepartments.mockRejectedValue(error);
        await getAllDepartments(mockRequest, mockResponse, mockNext);
        expect(mockNext).toHaveBeenCalledWith(error);
    });
});
//# sourceMappingURL=list.test.js.map