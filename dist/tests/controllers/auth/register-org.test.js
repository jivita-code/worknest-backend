// Mock the org service
jest.mock("../../../services/org.service", () => ({
    registerOrganizationWithTrial: jest.fn(),
}));
import * as orgService from "../../../services/org.service";
import { registerOrganization } from "../../../controllers/org.controller";
describe("registerOrganization", () => {
    let req;
    let res;
    let next;
    let jsonMock;
    let statusMock;
    beforeEach(() => {
        jsonMock = jest.fn();
        statusMock = jest.fn().mockReturnValue({ json: jsonMock });
        req = { body: { name: "Test Org", email: "test@example.com", password: "password123" } };
        res = { status: statusMock };
        next = jest.fn();
        orgService.registerOrganizationWithTrial.mockReset();
    });
    test("should create organization and return 201", async () => {
        const mockOrg = { org_id: "123", name: "Test Org", email: "test@example.com" };
        orgService.registerOrganizationWithTrial.mockResolvedValue(mockOrg);
        await registerOrganization(req, res, next);
        expect(orgService.registerOrganizationWithTrial).toHaveBeenCalledWith({
            name: "Test Org",
            email: "test@example.com",
            password: "password123",
        });
        expect(statusMock).toHaveBeenCalledWith(201);
        expect(jsonMock).toHaveBeenCalledWith({
            organization: mockOrg,
        });
        expect(next).not.toHaveBeenCalled();
    });
    test("should call next with error on service failure", async () => {
        const error = new Error("DB error");
        orgService.registerOrganizationWithTrial.mockRejectedValue(error);
        await registerOrganization(req, res, next);
        expect(orgService.registerOrganizationWithTrial).toHaveBeenCalledWith({
            name: "Test Org",
            email: "test@example.com",
            password: "password123",
        });
        expect(next).toHaveBeenCalledWith(error);
        expect(statusMock).not.toHaveBeenCalled();
    });
    test("should handle missing name", async () => {
        req.body = { email: "test@example.com", password: "password123" };
        const error = new Error("Validation error");
        orgService.registerOrganizationWithTrial.mockRejectedValue(error);
        await registerOrganization(req, res, next);
        expect(orgService.registerOrganizationWithTrial).toHaveBeenCalledWith({
            name: undefined,
            email: "test@example.com",
            password: "password123",
        });
        expect(next).toHaveBeenCalledWith(error);
    });
    test("should handle missing email", async () => {
        req.body = { name: "Test Org", password: "password123" };
        const error = new Error("Validation error");
        orgService.registerOrganizationWithTrial.mockRejectedValue(error);
        await registerOrganization(req, res, next);
        expect(orgService.registerOrganizationWithTrial).toHaveBeenCalledWith({
            name: "Test Org",
            email: undefined,
            password: "password123",
        });
        expect(next).toHaveBeenCalledWith(error);
    });
    test("should handle empty body", async () => {
        req.body = {};
        const error = new Error("Validation error");
        orgService.registerOrganizationWithTrial.mockRejectedValue(error);
        await registerOrganization(req, res, next);
        expect(orgService.registerOrganizationWithTrial).toHaveBeenCalledWith({
            name: undefined,
            email: undefined,
            password: undefined,
        });
        expect(next).toHaveBeenCalledWith(error);
    });
    test("should handle missing password", async () => {
        req.body = { name: "Test Org", email: "test@example.com" };
        const error = new Error("Validation error");
        orgService.registerOrganizationWithTrial.mockRejectedValue(error);
        await registerOrganization(req, res, next);
        expect(orgService.registerOrganizationWithTrial).toHaveBeenCalledWith({
            name: "Test Org",
            email: "test@example.com",
            password: undefined,
        });
        expect(next).toHaveBeenCalledWith(error);
    });
});
//# sourceMappingURL=register-org.test.js.map