import type { Request, Response, NextFunction } from "express";

// Mock the org service
jest.mock("../../../services/org.service", () => ({
  createOrganization: jest.fn(),
  deleteOrganization: jest.fn(),
}));
import * as orgService from "../../../services/org.service";

// Mock the subscription service
jest.mock("../../../services/subscriptions.service", () => ({
  getTrialPlanId: jest.fn(),
  createTrialSubscription: jest.fn(),
}));
import * as subscriptionService from "../../../services/subscriptions.service";

import { registerOrganization } from "../../../controllers/org.controller";

describe("registerOrganization", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    req = { body: { name: "Test Org", email: "test@example.com", password: "password123" } };
    res = { status: statusMock };
    next = jest.fn();
    (orgService.createOrganization as jest.Mock).mockReset();
    (orgService.deleteOrganization as jest.Mock).mockReset();
    (subscriptionService.getTrialPlanId as jest.Mock).mockReset();
    (subscriptionService.createTrialSubscription as jest.Mock).mockReset();
  });

  test("should create organization and return 201", async () => {
    const mockOrg = { org_id: "123", name: "Test Org", email: "test@example.com" };
    (orgService.createOrganization as jest.Mock).mockResolvedValue(mockOrg);
    (subscriptionService.getTrialPlanId as jest.Mock).mockResolvedValue("trial-plan-id");
    (subscriptionService.createTrialSubscription as jest.Mock).mockResolvedValue({});

    await registerOrganization(req as Request, res as Response, next);

    expect(orgService.createOrganization).toHaveBeenCalledWith({
      name: "Test Org",
      email: "test@example.com",
      password: "password123",
    });
    expect(subscriptionService.getTrialPlanId).toHaveBeenCalled();
    expect(subscriptionService.createTrialSubscription).toHaveBeenCalledWith("123", "trial-plan-id");
    expect(statusMock).toHaveBeenCalledWith(201);
    expect(jsonMock).toHaveBeenCalledWith(mockOrg);
    expect(next).not.toHaveBeenCalled();
  });

  test("should call next with error on failure", async () => {
    const error = new Error("DB error");
    (orgService.createOrganization as jest.Mock).mockRejectedValue(error);

    await registerOrganization(req as Request, res as Response, next);

    expect(orgService.createOrganization).toHaveBeenCalledWith({
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
    (orgService.createOrganization as jest.Mock).mockRejectedValue(error);

    await registerOrganization(req as Request, res as Response, next);

    expect(orgService.createOrganization).toHaveBeenCalledWith({
      name: undefined,
      email: "test@example.com",
      password: "password123",
    });
    expect(next).toHaveBeenCalledWith(error);
  });

  test("should handle missing email", async () => {
    req.body = { name: "Test Org", password: "password123" };
    const error = new Error("Validation error");
    (orgService.createOrganization as jest.Mock).mockRejectedValue(error);

    await registerOrganization(req as Request, res as Response, next);

    expect(orgService.createOrganization).toHaveBeenCalledWith({
      name: "Test Org",
      email: undefined,
      password: "password123",
    });
    expect(next).toHaveBeenCalledWith(error);
  });

  test("should handle empty body", async () => {
    req.body = {};
    const error = new Error("Validation error");
    (orgService.createOrganization as jest.Mock).mockRejectedValue(error);

    await registerOrganization(req as Request, res as Response, next);

    expect(orgService.createOrganization).toHaveBeenCalledWith({
      name: undefined,
      email: undefined,
      password: undefined,
    });
    expect(next).toHaveBeenCalledWith(error);
  });

  test("should handle missing password", async () => {
    req.body = { name: "Test Org", email: "test@example.com" };
    const error = new Error("Validation error");
    (orgService.createOrganization as jest.Mock).mockRejectedValue(error);

    await registerOrganization(req as Request, res as Response, next);

    expect(orgService.createOrganization).toHaveBeenCalledWith({
      name: "Test Org",
      email: "test@example.com",
      password: undefined,
    });
    expect(next).toHaveBeenCalledWith(error);
  });

  test("should rollback organization creation if subscription creation fails", async () => {
    const mockOrg = { org_id: "123", name: "Test Org", email: "test@example.com" };
    const subscriptionError = new Error("Subscription creation failed");
    (orgService.createOrganization as jest.Mock).mockResolvedValue(mockOrg);
    (subscriptionService.getTrialPlanId as jest.Mock).mockResolvedValue("trial-plan-id");
    (subscriptionService.createTrialSubscription as jest.Mock).mockRejectedValue(subscriptionError);

    await registerOrganization(req as Request, res as Response, next);

    expect(orgService.createOrganization).toHaveBeenCalledWith({
      name: "Test Org",
      email: "test@example.com",
      password: "password123",
    });
    expect(subscriptionService.getTrialPlanId).toHaveBeenCalled();
    expect(subscriptionService.createTrialSubscription).toHaveBeenCalledWith("123", "trial-plan-id");
    expect(orgService.deleteOrganization).toHaveBeenCalledWith("123");
    expect(next).toHaveBeenCalledWith(subscriptionError);
    expect(statusMock).not.toHaveBeenCalled();
  });
});