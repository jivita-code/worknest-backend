// Mock the org service
jest.mock("../../../services/org.service", () => ({
    updateOrganization: jest.fn(),
}));
import * as orgService from "../../../services/org.service";
import { updateOrganization } from "../../../controllers/org.controller";
describe("updateOrganization", () => {
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
        orgService.updateOrganization.mockReset();
    });
    test("should update organization successfully", async () => {
        const updateData = {
            name: "Updated Organization Name",
            industry: "Updated Industry",
            phone: "+1234567890",
        };
        const updatedOrg = {
            org_id: "123e4567-e89b-12d3-a456-426614174000",
            name: "Updated Organization Name",
            industry: "Updated Industry",
            registration_no: null,
            address: null,
            email: "test@example.com",
            phone: "+1234567890",
            logo_url: null,
            created_at: new Date(),
            update_at: new Date(),
            sub_id: "sub-123",
        };
        req.user = { org_id: "123e4567-e89b-12d3-a456-426614174000" };
        req.body = updateData;
        orgService.updateOrganization.mockResolvedValue(updatedOrg);
        await updateOrganization(req, res, next);
        expect(orgService.updateOrganization).toHaveBeenCalledWith("123e4567-e89b-12d3-a456-426614174000", updateData);
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith({
            organization: updatedOrg,
            message: "Organization updated successfully",
        });
        expect(next).not.toHaveBeenCalled();
    });
    test("should return 400 when org_id is not in token", async () => {
        req.user = {}; // No org_id
        req.body = { name: "New Name" };
        await updateOrganization(req, res, next);
        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({ error: "Organization ID not found in token" });
        expect(orgService.updateOrganization).not.toHaveBeenCalled();
    });
    test("should return 400 when no fields are provided for update", async () => {
        req.user = { org_id: "123e4567-e89b-12d3-a456-426614174000" };
        req.body = {}; // Empty body
        await updateOrganization(req, res, next);
        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({ error: "At least one field must be provided for update" });
        expect(orgService.updateOrganization).not.toHaveBeenCalled();
    });
    test("should handle partial updates", async () => {
        const partialUpdate = { phone: "+9876543210" };
        const updatedOrg = {
            org_id: "123e4567-e89b-12d3-a456-426614174000",
            name: "Original Name",
            industry: null,
            registration_no: null,
            address: null,
            email: "test@example.com",
            phone: "+9876543210",
            logo_url: null,
            created_at: new Date(),
            update_at: new Date(),
            sub_id: "sub-123",
        };
        req.user = { org_id: "123e4567-e89b-12d3-a456-426614174000" };
        req.body = partialUpdate;
        orgService.updateOrganization.mockResolvedValue(updatedOrg);
        await updateOrganization(req, res, next);
        expect(orgService.updateOrganization).toHaveBeenCalledWith("123e4567-e89b-12d3-a456-426614174000", partialUpdate);
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith({
            organization: updatedOrg,
            message: "Organization updated successfully",
        });
    });
    test("should call next on service error", async () => {
        const error = new Error("Database connection failed");
        req.user = { org_id: "123e4567-e89b-12d3-a456-426614174000" };
        req.body = { name: "New Name" };
        orgService.updateOrganization.mockRejectedValue(error);
        await updateOrganization(req, res, next);
        expect(next).toHaveBeenCalledWith(error);
        expect(orgService.updateOrganization).toHaveBeenCalledWith("123e4567-e89b-12d3-a456-426614174000", { name: "New Name" });
    });
});
//# sourceMappingURL=update.test.js.map