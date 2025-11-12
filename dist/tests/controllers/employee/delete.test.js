// Mock the employee service
jest.mock("../../../services/employees.service", () => ({
    deleteEmployee: jest.fn(),
}));
import * as employeeService from "../../../services/employees.service";
import { deleteEmployee } from "../../../controllers/employee.controller";
describe("deleteEmployee", () => {
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
        employeeService.deleteEmployee.mockReset();
    });
    test("should delete employee successfully", async () => {
        const mockResult = { message: "Employee deleted successfully" };
        req.user = { org_id: "org-123" };
        req.params = { emp_id: "emp-1" };
        employeeService.deleteEmployee.mockResolvedValue(mockResult);
        await deleteEmployee(req, res, next);
        expect(employeeService.deleteEmployee).toHaveBeenCalledWith("emp-1", "org-123");
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith(mockResult);
    });
    test("should return 400 if org_id is not found in token", async () => {
        req.user = {};
        req.params = { emp_id: "emp-1" };
        await deleteEmployee(req, res, next);
        expect(employeeService.deleteEmployee).not.toHaveBeenCalled();
        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({
            error: "Organization ID not found in token",
        });
    });
    test("should return 400 if emp_id is not provided", async () => {
        req.user = { org_id: "org-123" };
        req.params = {};
        await deleteEmployee(req, res, next);
        expect(employeeService.deleteEmployee).not.toHaveBeenCalled();
        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({
            error: "Employee ID is required",
        });
    });
    test("should call next with error if service throws", async () => {
        const error = new Error("Employee not found");
        req.user = { org_id: "org-123" };
        req.params = { emp_id: "emp-1" };
        employeeService.deleteEmployee.mockRejectedValue(error);
        await deleteEmployee(req, res, next);
        expect(employeeService.deleteEmployee).toHaveBeenCalledWith("emp-1", "org-123");
        expect(next).toHaveBeenCalledWith(error);
    });
    test("should handle department head removal", async () => {
        const mockResult = { message: "Employee deleted successfully" };
        req.user = { org_id: "org-123" };
        req.params = { emp_id: "emp-1" };
        employeeService.deleteEmployee.mockResolvedValue(mockResult);
        await deleteEmployee(req, res, next);
        expect(employeeService.deleteEmployee).toHaveBeenCalledWith("emp-1", "org-123");
        expect(statusMock).toHaveBeenCalledWith(200);
    });
});
//# sourceMappingURL=delete.test.js.map