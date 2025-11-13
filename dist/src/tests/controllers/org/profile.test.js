// Mock the org service
jest.mock("../../../services/org.service", () => ({
    getOrganizationById: jest.fn(),
}));
import * as orgService from "../../../services/org.service";
import { getOrganizationProfile } from "../../../controllers/org.controller";
describe("getOrganizationProfile", () => {
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
        orgService.getOrganizationById.mockReset();
    });
    test("should return organization profile when found", async () => {
        const mockOrg = {
            org_id: "123e4567-e89b-12d3-a456-426614174000",
            name: "Test Organization",
            industry: "Technology",
            registration_no: "REG123",
            address: "123 Test St",
            email: "test@example.com",
            phone: "+1234567890",
            logo_url: "logo.png",
            created_at: new Date(),
            update_at: new Date(),
            sub_id: "sub-123",
        };
        req.user = { org_id: "123e4567-e89b-12d3-a456-426614174000" };
        orgService.getOrganizationById.mockResolvedValue(mockOrg);
        await getOrganizationProfile(req, res, next);
        expect(orgService.getOrganizationById).toHaveBeenCalledWith("123e4567-e89b-12d3-a456-426614174000");
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith({
            organization: mockOrg,
        });
        expect(next).not.toHaveBeenCalled();
    });
    test("should return 400 when org_id is not in token", async () => {
        req.user = {}; // No org_id
        await getOrganizationProfile(req, res, next);
        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({ error: "Organization ID not found in token" });
        expect(orgService.getOrganizationById).not.toHaveBeenCalled();
    });
    test("should return 404 when organization not found", async () => {
        req.user = { org_id: "123e4567-e89b-12d3-a456-426614174000" };
        orgService.getOrganizationById.mockResolvedValue(null);
        await getOrganizationProfile(req, res, next);
        expect(statusMock).toHaveBeenCalledWith(404);
        expect(jsonMock).toHaveBeenCalledWith({ error: "Organization not found" });
        expect(orgService.getOrganizationById).toHaveBeenCalledWith("123e4567-e89b-12d3-a456-426614174000");
    });
    test("should call next on service error", async () => {
        const error = new Error("Database connection failed");
        req.user = { org_id: "123e4567-e89b-12d3-a456-426614174000" };
        orgService.getOrganizationById.mockRejectedValue(error);
        await getOrganizationProfile(req, res, next);
        expect(next).toHaveBeenCalledWith(error);
        expect(orgService.getOrganizationById).toHaveBeenCalledWith("123e4567-e89b-12d3-a456-426614174000");
    });
});
