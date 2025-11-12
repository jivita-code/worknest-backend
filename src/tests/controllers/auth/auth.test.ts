import type { Request, Response, NextFunction } from "express";

// Mock the auth service
jest.mock("../../../services/auth.service", () => ({
  login: jest.fn(),
}));
import * as authService from "../../../services/auth.service";

import { login } from "../../../controllers/auth.controller";

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
    (authService.login as jest.Mock).mockReset();
  });

  describe("login", () => {
    test("should login organization successfully", async () => {
      req.body = { email: "test@example.com", password: "password123" };
      const mockAuthData = {
        token: "jwt-token",
        organization: { org_id: "org-123", name: "Test Org", email: "test@example.com" },
      };

      (authService.login as jest.Mock).mockResolvedValue(mockAuthData);

      await login(req as Request, res as Response, next);

      expect(authService.login).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
      });
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(mockAuthData);
      expect(next).not.toHaveBeenCalled();
    });

    test("should login employee successfully", async () => {
      req.body = { email: "employee@example.com", password: "password123" };
      const mockAuthData = {
        token: "jwt-token",
        organization: { org_id: "org-123", name: "Test Org", email: "org@example.com" },
        employee: {
          emp_id: "emp-123",
          first_name: "John",
          last_name: "Doe",
          email: "employee@example.com",
          profile_photo_url: "photo.jpg",
        },
      };

      (authService.login as jest.Mock).mockResolvedValue(mockAuthData);

      await login(req as Request, res as Response, next);

      expect(authService.login).toHaveBeenCalledWith({
        email: "employee@example.com",
        password: "password123",
      });
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(mockAuthData);
      expect(next).not.toHaveBeenCalled();
    });

    test("should return 400 for missing email", async () => {
      req.body = { password: "password123" };

      await login(req as Request, res as Response, next);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({ error: "Email and password are required" });
      expect(authService.login).not.toHaveBeenCalled();
    });

    test("should return 400 for missing password", async () => {
      req.body = { email: "test@example.com" };

      await login(req as Request, res as Response, next);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({ error: "Email and password are required" });
      expect(authService.login).not.toHaveBeenCalled();
    });

    test("should handle service errors", async () => {
      req.body = { email: "test@example.com", password: "password123" };
      const error = new Error("Invalid email or password");

      (authService.login as jest.Mock).mockRejectedValue(error);

      await login(req as Request, res as Response, next);

      expect(authService.login).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
      });
      expect(next).toHaveBeenCalledWith(error);
    });
  });
});