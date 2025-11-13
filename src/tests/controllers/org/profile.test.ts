import type { Request, Response, NextFunction } from "express";

// Mock the org service
jest.mock("../../../services/org.service", () => ({
  getOrganizationById: jest.fn(),
}));
import * as orgService from "../../../services/org.service.js";

import { getOrganizationProfile } from "../../../controllers/org.controller.js";

describe("getOrganizationProfile", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    req = {};
    res = { status: statusMock };
    next = jest.fn();
    (orgService.getOrganizationById as jest.Mock).mockReset();
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

    (req as any).user = { org_id: "123e4567-e89b-12d3-a456-426614174000" };
    (orgService.getOrganizationById as jest.Mock).mockResolvedValue(mockOrg);

    await getOrganizationProfile(req as Request, res as Response, next);

    expect(orgService.getOrganizationById).toHaveBeenCalledWith("123e4567-e89b-12d3-a456-426614174000");
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      organization: mockOrg,
    });
    expect(next).not.toHaveBeenCalled();
  });

  test("should return 400 when org_id is not in token", async () => {
    (req as any).user = {}; // No org_id

    await getOrganizationProfile(req as Request, res as Response, next);

    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Organization ID not found in token" });
    expect(orgService.getOrganizationById).not.toHaveBeenCalled();
  });

  test("should return 404 when organization not found", async () => {
    (req as any).user = { org_id: "123e4567-e89b-12d3-a456-426614174000" };
    (orgService.getOrganizationById as jest.Mock).mockResolvedValue(null);

    await getOrganizationProfile(req as Request, res as Response, next);

    expect(statusMock).toHaveBeenCalledWith(404);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Organization not found" });
    expect(orgService.getOrganizationById).toHaveBeenCalledWith("123e4567-e89b-12d3-a456-426614174000");
  });

  test("should call next on service error", async () => {
    const error = new Error("Database connection failed");
    (req as any).user = { org_id: "123e4567-e89b-12d3-a456-426614174000" };
    (orgService.getOrganizationById as jest.Mock).mockRejectedValue(error);

    await getOrganizationProfile(req as Request, res as Response, next);

    expect(next).toHaveBeenCalledWith(error);
    expect(orgService.getOrganizationById).toHaveBeenCalledWith("123e4567-e89b-12d3-a456-426614174000");
  });
});