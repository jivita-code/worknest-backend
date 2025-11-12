import { createEmployee } from "../../../controllers/employee.controller";
import * as employeeService from "../../../services/employees.service";
// Mock the employee service
jest.mock("../../../services/employees.service");
describe("Employee Controller - createEmployee", () => {
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
    it("should create an employee successfully with all required fields", async () => {
        const mockEmployee = {
            id: "emp-123",
            employee_number: "EMP001",
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com",
            phone: "+1234567890",
            designation: "Software Engineer",
            employment_type: "full-time",
            join_date: new Date("2024-01-01"),
            dep_id: "dep-123",
            org_id: "org-123",
            created_at: new Date(),
            updated_at: new Date(),
        };
        mockRequest.user = { org_id: "org-123" };
        mockRequest.body = {
            employee_number: "EMP001",
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com",
            password: "password123",
            phone: "+1234567890",
            designation: "Software Engineer",
            employment_type: "full-time",
            join_date: "2024-01-01",
            dep_id: "dep-123",
        };
        employeeService.createEmployee.mockResolvedValue(mockEmployee);
        await createEmployee(mockRequest, mockResponse, mockNext);
        expect(employeeService.createEmployee).toHaveBeenCalledWith("org-123", {
            employee_number: "EMP001",
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com",
            password: "password123",
            phone: "+1234567890",
            designation: "Software Engineer",
            employment_type: "full-time",
            join_date: new Date("2024-01-01"),
            dep_id: "dep-123",
        });
        expect(mockResponse.status).toHaveBeenCalledWith(201);
        expect(mockResponse.json).toHaveBeenCalledWith({
            employee: mockEmployee,
            message: "Employee created successfully",
        });
    });
    it("should create an employee successfully with only required fields", async () => {
        const mockEmployee = {
            id: "emp-123",
            employee_number: "EMP001",
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com",
            employment_type: "full-time",
            org_id: "org-123",
            created_at: new Date(),
            updated_at: new Date(),
        };
        mockRequest.user = { org_id: "org-123" };
        mockRequest.body = {
            employee_number: "EMP001",
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com",
            password: "password123",
            employment_type: "full-time",
        };
        employeeService.createEmployee.mockResolvedValue(mockEmployee);
        await createEmployee(mockRequest, mockResponse, mockNext);
        expect(employeeService.createEmployee).toHaveBeenCalledWith("org-123", {
            employee_number: "EMP001",
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com",
            password: "password123",
            employment_type: "full-time",
        });
        expect(mockResponse.status).toHaveBeenCalledWith(201);
        expect(mockResponse.json).toHaveBeenCalledWith({
            employee: mockEmployee,
            message: "Employee created successfully",
        });
    });
    it("should return 400 if org_id is not found in token", async () => {
        mockRequest.user = {};
        await createEmployee(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Organization ID not found in token",
        });
    });
    it("should return 400 if required fields are missing", async () => {
        mockRequest.user = { org_id: "org-123" };
        mockRequest.body = {
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com",
            password: "password123",
        };
        await createEmployee(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Employee number, first name, last name, email, password, and employment type are required",
        });
    });
    it("should return 400 if employment type is invalid", async () => {
        mockRequest.user = { org_id: "org-123" };
        mockRequest.body = {
            employee_number: "EMP001",
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com",
            password: "password123",
            employment_type: "invalid-type",
        };
        await createEmployee(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: "Employment type must be one of: full-time, part-time, intern, contract",
        });
    });
    it("should call next with error if service throws", async () => {
        const error = new Error("Service error");
        mockRequest.user = { org_id: "org-123" };
        mockRequest.body = {
            employee_number: "EMP001",
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com",
            password: "password123",
            employment_type: "full-time",
        };
        employeeService.createEmployee.mockRejectedValue(error);
        await createEmployee(mockRequest, mockResponse, mockNext);
        expect(mockNext).toHaveBeenCalledWith(error);
    });
});
//# sourceMappingURL=register.test.js.map