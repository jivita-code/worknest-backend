import type { Request, Response, NextFunction } from "express";

// mock the jwt util used by the middleware
jest.mock("../../utils/jwt", () => ({
  verifyToken: jest.fn(),
}));
import { verifyToken } from "../../utils/jwt";

import { authMiddleware } from "../../middlewares/auth.middleware";

describe("authMiddleware", () => {
  beforeEach(() => {
    (verifyToken as jest.Mock).mockReset();
  });

  function makeResMocks() {
    const jsonMock = jest.fn();
    const statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    const res = { status: statusMock } as unknown as Response;
    return { res, statusMock, jsonMock };
  }

  test("returns 401 when authorization header is missing", () => {
    const req = { headers: {} } as unknown as Request;
    const { res, statusMock, jsonMock } = makeResMocks();
    const next: NextFunction = jest.fn();

    authMiddleware(req, res, next);

    expect(statusMock).toHaveBeenCalledWith(401);
    expect(jsonMock).toHaveBeenCalledWith({ message: "Unauthorized" });
    expect(next).not.toHaveBeenCalled();
  });

  test("returns 401 when authorization header is malformed", () => {
    const req = { headers: { authorization: "Token abc.def.ghi" } } as unknown as Request;
    const { res, statusMock, jsonMock } = makeResMocks();
    const next: NextFunction = jest.fn();

    authMiddleware(req, res, next);

    expect(statusMock).toHaveBeenCalledWith(401);
    expect(jsonMock).toHaveBeenCalledWith({ message: "Unauthorized" });
    expect(next).not.toHaveBeenCalled();
  });

  test("returns 401 when token is invalid", () => {
    (verifyToken as jest.Mock).mockReturnValue(null);
    const req = { headers: { authorization: "Bearer invalid.token" } } as unknown as Request;
    const { res, statusMock, jsonMock } = makeResMocks();
    const next: NextFunction = jest.fn();

    authMiddleware(req, res, next);

    expect(verifyToken).toHaveBeenCalledWith("invalid.token");
    expect(statusMock).toHaveBeenCalledWith(401);
    expect(jsonMock).toHaveBeenCalledWith({ message: "Invalid token" });
    expect(next).not.toHaveBeenCalled();
  });

  test("attaches payload to req.user and calls next on valid token", () => {
    const payload = { userId: "u1", role: "admin" };
    (verifyToken as jest.Mock).mockReturnValue(payload);

    // use a mutable object so middleware can set req.user
    const req = { headers: { authorization: "Bearer valid.token" } } as unknown as Request & { user?: unknown };
    const res = {} as unknown as Response;
    const next: NextFunction = jest.fn();

    authMiddleware(req, res, next);

    expect(verifyToken).toHaveBeenCalledWith("valid.token");
    expect((req as any).user).toBe(payload);
    expect(next).toHaveBeenCalled();
  });
});