// Mock the employee service
jest.mock("../../../services/employees.service", () => ({
    getEmployeesDropdown: jest.fn(),
}));
import * as employeeService from "../../../services/employees.service";
import { getEmployeesDropdown } from "../../../controllers/employee.controller";
describe("getEmployeesDropdown", () => {
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
        employeeService.getEmployeesDropdown.mockReset();
    });
    test("should return employees dropdown successfully", async () => {
        const mockEmployees = [
            {
                emp_id: "emp-1",
                first_name: "John",
                last_name: "Doe",
                employee_number: "EMP001",
            },
            {
                emp_id: "emp-2",
                first_name: "Jane",
                last_name: "Smith",
                employee_number: "EMP002",
            },
        ];
        req.user = { org_id: "org-123" };
        employeeService.getEmployeesDropdown.mockResolvedValue(mockEmployees);
        await getEmployeesDropdown(req, res, next);
        expect(employeeService.getEmployeesDropdown).toHaveBeenCalledWith("org-123");
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith({
            employees: mockEmployees,
            message: "Employees retrieved successfully",
        });
        expect(next).not.toHaveBeenCalled();
    });
    test("should return 400 when org_id is not in token", async () => {
        req.user = {}; // No org_id
        await getEmployeesDropdown(req, res, next);
        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({ error: "Organization ID not found in token" });
        expect(employeeService.getEmployeesDropdown).not.toHaveBeenCalled();
    });
    test("should return empty array when no active employees", async () => {
        const mockEmployees = [];
        req.user = { org_id: "org-123" };
        employeeService.getEmployeesDropdown.mockResolvedValue(mockEmployees);
        await getEmployeesDropdown(req, res, next);
        expect(employeeService.getEmployeesDropdown).toHaveBeenCalledWith("org-123");
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith({
            employees: [],
            message: "Employees retrieved successfully",
        });
    });
    test("should call next on service error", async () => {
        const error = new Error("Database connection failed");
        req.user = { org_id: "org-123" };
        employeeService.getEmployeesDropdown.mockRejectedValue(error);
        await getEmployeesDropdown(req, res, next);
        expect(next).toHaveBeenCalledWith(error);
        expect(employeeService.getEmployeesDropdown).toHaveBeenCalledWith("org-123");
    });
});
