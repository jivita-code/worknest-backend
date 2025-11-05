import type { Request, Response, NextFunction } from "express";

// Mock the auth service
jest.mock("../../../services/auth.service", () => ({
  loginOrganization: jest.fn(),
}));
import * as authService from "../../../services/auth.service";

import { loginOrganization } from "../../../controllers/auth.controller";

describe("Auth Controller", () => {
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
    (authService.loginOrganization as jest.Mock).mockReset();
  });

  describe("loginOrganization", () => {
    test("should login successfully", async () => {
      req.body = { email: "test@example.com", password: "password123" };
      const mockAuthData = {
        token: "jwt-token",
        organization: { org_id: "org-123", name: "Test Org", email: "test@example.com" },
      };

      (authService.loginOrganization as jest.Mock).mockResolvedValue(mockAuthData);

      await loginOrganization(req as Request, res as Response, next);

      expect(authService.loginOrganization).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
      });
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(mockAuthData);
      expect(next).not.toHaveBeenCalled();
    });

    test("should return 400 for missing email", async () => {
      req.body = { password: "password123" };

      await loginOrganization(req as Request, res as Response, next);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({ error: "Email and password are required" });
      expect(authService.loginOrganization).not.toHaveBeenCalled();
    });

    test("should return 400 for missing password", async () => {
      req.body = { email: "test@example.com" };

      await loginOrganization(req as Request, res as Response, next);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({ error: "Email and password are required" });
      expect(authService.loginOrganization).not.toHaveBeenCalled();
    });

    test("should call next on service error", async () => {
      req.body = { email: "test@example.com", password: "password123" };
      const error = new Error("Invalid credentials");

      (authService.loginOrganization as jest.Mock).mockRejectedValue(error);

      await loginOrganization(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(error);
      expect(statusMock).not.toHaveBeenCalled();
    });
  });

  describe("getOrganizationProfile", () => {
    test("should return organization profile", async () => {
      req.user = { org_id: "org-123" };
      const mockOrg = {
        org_id: "org-123",
        name: "Test Org",
        email: "test@example.com",
        industry: "Tech",
        phone: "1234567890",
        logo_url: "logo.png",
        created_at: new Date(),
      };

      (authService.getOrganizationById as jest.Mock).mockResolvedValue(mockOrg);

      await getOrganizationProfile(req as Request, res as Response, next);

      expect(authService.getOrganizationById).toHaveBeenCalledWith("org-123");
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(mockOrg);
    });

    test("should return 404 if organization not found", async () => {
      req.user = { org_id: "org-123" };

      (authService.getOrganizationById as jest.Mock).mockResolvedValue(null);

      await getOrganizationProfile(req as Request, res as Response, next);

      expect(statusMock).toHaveBeenCalledWith(404);
      expect(jsonMock).toHaveBeenCalledWith({ error: "Organization not found" });
    });

    test("should call next on service error", async () => {
      req.user = { org_id: "org-123" };
      const error = new Error("DB error");

      (authService.getOrganizationById as jest.Mock).mockRejectedValue(error);

      await getOrganizationProfile(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});