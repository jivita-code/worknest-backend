import type { Request, Response, NextFunction } from "express";

// Mock the org service
jest.mock("../../../services/org.service", () => ({
  createOrganization: jest.fn(),
}));
import * as orgService from "../../../services/org.service";
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
    req = { body: { name: "Test Org", industry: "Tech", email: "test@example.com" } };
    res = { status: statusMock };
    next = jest.fn();
    (orgService.createOrganization as jest.Mock).mockReset();
  });

  test("should create organization and return 201", async () => {
    const mockOrg = { org_id: "123", name: "Test Org", email: "test@example.com" };
    (orgService.createOrganization as jest.Mock).mockResolvedValue(mockOrg);

    await registerOrganization(req as Request, res as Response, next);

    expect(orgService.createOrganization).toHaveBeenCalledWith({
      name: "Test Org",
      industry: "Tech",
      email: "test@example.com",
    });
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
      industry: "Tech",
      email: "test@example.com",
    });
    expect(next).toHaveBeenCalledWith(error);
    expect(statusMock).not.toHaveBeenCalled();
  });

  test("should handle missing name", async () => {
    req.body = { industry: "Tech", email: "test@example.com" };
    const error = new Error("Validation error");
    (orgService.createOrganization as jest.Mock).mockRejectedValue(error);

    await registerOrganization(req as Request, res as Response, next);

    expect(orgService.createOrganization).toHaveBeenCalledWith({
      name: undefined,
      industry: "Tech",
      email: "test@example.com",
    });
    expect(next).toHaveBeenCalledWith(error);
  });

  test("should handle missing email", async () => {
    req.body = { name: "Test Org", industry: "Tech" };
    const error = new Error("Validation error");
    (orgService.createOrganization as jest.Mock).mockRejectedValue(error);

    await registerOrganization(req as Request, res as Response, next);

    expect(orgService.createOrganization).toHaveBeenCalledWith({
      name: "Test Org",
      industry: "Tech",
      email: undefined,
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
      industry: undefined,
      email: undefined,
    });
    expect(next).toHaveBeenCalledWith(error);
  });

  test("should handle industry as optional", async () => {
    req.body = { name: "Test Org", email: "test@example.com" };
    const mockOrg = { org_id: "123", name: "Test Org", email: "test@example.com" };
    (orgService.createOrganization as jest.Mock).mockResolvedValue(mockOrg);

    await registerOrganization(req as Request, res as Response, next);

    expect(orgService.createOrganization).toHaveBeenCalledWith({
      name: "Test Org",
      industry: undefined,
      email: "test@example.com",
    });
    expect(statusMock).toHaveBeenCalledWith(201);
    expect(jsonMock).toHaveBeenCalledWith(mockOrg);
  });
});