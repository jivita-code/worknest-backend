// Mock the employee service
jest.mock("../../../services/employees.service", () => ({
    getAllEmployees: jest.fn(),
}));
import * as employeeService from "../../../services/employees.service.js";
import { getAllEmployees } from "../../../controllers/employee.controller.js";
describe("getAllEmployees", () => {
    let req;
    let res;
    let next;
    let jsonMock;
    let statusMock;
    beforeEach(() => {
        jsonMock = jest.fn();
        statusMock = jest.fn().mockReturnValue({ json: jsonMock });
        req = {};
        res = { status: statusMock };
        next = jest.fn();
        employeeService.getAllEmployees.mockReset();
    });
    test("should return all employees successfully", async () => {
        const mockEmployees = [
            {
                emp_id: "emp-1",
                org_id: "org-123",
                dep_id: "dep-1",
                employee_number: "EMP001",
                first_name: "John",
                last_name: "Doe",
                email: "john.doe@example.com",
                phone: "+1234567890",
                designation: "Software Engineer",
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
                _count: {
                    attendances: 10,
                    leave_requests: 2,
                    petty_cash_requests: 1,
                },
            },
            {
                emp_id: "emp-2",
                org_id: "org-123",
                dep_id: null,
                employee_number: "EMP002",
                first_name: "Jane",
                last_name: "Smith",
                email: "jane.smith@example.com",
                phone: null,
                designation: "HR Manager",
                employment_type: "full-time",
                join_date: new Date("2023-02-01"),
                status: "active",
                created_at: new Date(),
                update_at: new Date(),
                department: null,
                headed_department: {
                    dep_id: "dep-2",
                    name: "Human Resources",
                },
                organization: {
                    name: "Test Org",
                    email: "org@example.com",
                },
                _count: {
                    attendances: 8,
                    leave_requests: 0,
                    petty_cash_requests: 3,
                },
            },
        ];
        req.user = { org_id: "org-123" };
        employeeService.getAllEmployees.mockResolvedValue(mockEmployees);
        await getAllEmployees(req, res, next);
        expect(employeeService.getAllEmployees).toHaveBeenCalledWith("org-123");
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith({
            employees: mockEmployees,
            message: "Employees retrieved successfully",
        });
    });
    test("should return empty array when no employees exist", async () => {
        const mockEmployees = [];
        req.user = { org_id: "org-123" };
        employeeService.getAllEmployees.mockResolvedValue(mockEmployees);
        await getAllEmployees(req, res, next);
        expect(employeeService.getAllEmployees).toHaveBeenCalledWith("org-123");
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith({
            employees: [],
            message: "Employees retrieved successfully",
        });
    });
    test("should return 400 if org_id is not found in token", async () => {
        req.user = {};
        await getAllEmployees(req, res, next);
        expect(employeeService.getAllEmployees).not.toHaveBeenCalled();
        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({
            error: "Organization ID not found in token",
        });
    });
    test("should call next with error if service throws", async () => {
        const error = new Error("Database connection failed");
        req.user = { org_id: "org-123" };
        employeeService.getAllEmployees.mockRejectedValue(error);
        await getAllEmployees(req, res, next);
        expect(employeeService.getAllEmployees).toHaveBeenCalledWith("org-123");
        expect(next).toHaveBeenCalledWith(error);
    });
});
