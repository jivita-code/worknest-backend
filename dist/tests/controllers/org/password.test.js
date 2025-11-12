// Mock the org service
jest.mock("../../../services/org.service", () => ({
    updateOrganizationPassword: jest.fn(),
}));
import * as orgService from "../../../services/org.service";
import { updateOrganizationPassword } from "../../../controllers/org.controller";
describe("updateOrganizationPassword", () => {
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
        orgService.updateOrganizationPassword.mockReset();
    });
    test("should update password successfully", async () => {
        const requestBody = {
            currentPassword: "OldPass123!",
            newPassword: "NewPass456!",
        };
        const updatedOrg = {
            org_id: "123e4567-e89b-12d3-a456-426614174000",
            name: "Test Organization",
            email: "test@example.com",
            update_at: new Date(),
        };
        req.user = { org_id: "123e4567-e89b-12d3-a456-426614174000" };
        req.body = requestBody;
        orgService.updateOrganizationPassword.mockResolvedValue(updatedOrg);
        await updateOrganizationPassword(req, res, next);
        expect(orgService.updateOrganizationPassword).toHaveBeenCalledWith("123e4567-e89b-12d3-a456-426614174000", requestBody.currentPassword, requestBody.newPassword);
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith({
            organization: updatedOrg,
            message: "Password updated successfully",
        });
        expect(next).not.toHaveBeenCalled();
    });
    test("should return 400 when org_id is not in token", async () => {
        req.user = {}; // No org_id
        req.body = { currentPassword: "old", newPassword: "new" };
        await updateOrganizationPassword(req, res, next);
        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({ error: "Organization ID not found in token" });
        expect(orgService.updateOrganizationPassword).not.toHaveBeenCalled();
    });
    test("should return 400 when currentPassword is missing", async () => {
        req.user = { org_id: "123e4567-e89b-12d3-a456-426614174000" };
        req.body = { newPassword: "NewPass456!" }; // Missing currentPassword
        await updateOrganizationPassword(req, res, next);
        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({ error: "Current password and new password are required" });
        expect(orgService.updateOrganizationPassword).not.toHaveBeenCalled();
    });
    test("should return 400 when newPassword is missing", async () => {
        req.user = { org_id: "123e4567-e89b-12d3-a456-426614174000" };
        req.body = { currentPassword: "OldPass123!" }; // Missing newPassword
        await updateOrganizationPassword(req, res, next);
        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({ error: "Current password and new password are required" });
        expect(orgService.updateOrganizationPassword).not.toHaveBeenCalled();
    });
    test("should return 400 when new password is same as current", async () => {
        req.user = { org_id: "123e4567-e89b-12d3-a456-426614174000" };
        req.body = {
            currentPassword: "SamePass123!",
            newPassword: "SamePass123!", // Same as current
        };
        await updateOrganizationPassword(req, res, next);
        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({ error: "New password must be different from current password" });
        expect(orgService.updateOrganizationPassword).not.toHaveBeenCalled();
    });
    test("should call next on service error", async () => {
        const error = new Error("Current password is incorrect");
        req.user = { org_id: "123e4567-e89b-12d3-a456-426614174000" };
        req.body = {
            currentPassword: "WrongPass123!",
            newPassword: "NewPass456!",
        };
        orgService.updateOrganizationPassword.mockRejectedValue(error);
        await updateOrganizationPassword(req, res, next);
        expect(next).toHaveBeenCalledWith(error);
        expect(orgService.updateOrganizationPassword).toHaveBeenCalledWith("123e4567-e89b-12d3-a456-426614174000", "WrongPass123!", "NewPass456!");
    });
});
//# sourceMappingURL=password.test.js.map