// mock the jwt util used by the middleware
jest.mock("../../utils/jwt", () => ({
    verifyToken: jest.fn(),
}));
import { verifyToken } from "../../utils/jwt";
import { authMiddleware } from "../../middlewares/auth.middleware";
describe("authMiddleware", () => {
    beforeEach(() => {
        verifyToken.mockReset();
    });
    function makeResMocks() {
        const jsonMock = jest.fn();
        const statusMock = jest.fn().mockReturnValue({ json: jsonMock });
        const res = { status: statusMock };
        return { res, statusMock, jsonMock };
    }
    test("returns 401 when authorization header is missing", () => {
        const req = { headers: {} };
        const { res, statusMock, jsonMock } = makeResMocks();
        const next = jest.fn();
        authMiddleware(req, res, next);
        expect(statusMock).toHaveBeenCalledWith(401);
        expect(jsonMock).toHaveBeenCalledWith({ message: "Unauthorized" });
        expect(next).not.toHaveBeenCalled();
    });
    test("returns 401 when authorization header is malformed", () => {
        const req = { headers: { authorization: "Token abc.def.ghi" } };
        const { res, statusMock, jsonMock } = makeResMocks();
        const next = jest.fn();
        authMiddleware(req, res, next);
        expect(statusMock).toHaveBeenCalledWith(401);
        expect(jsonMock).toHaveBeenCalledWith({ message: "Unauthorized" });
        expect(next).not.toHaveBeenCalled();
    });
    test("returns 401 when token is invalid", () => {
        verifyToken.mockReturnValue(null);
        const req = { headers: { authorization: "Bearer invalid.token" } };
        const { res, statusMock, jsonMock } = makeResMocks();
        const next = jest.fn();
        authMiddleware(req, res, next);
        expect(verifyToken).toHaveBeenCalledWith("invalid.token");
        expect(statusMock).toHaveBeenCalledWith(401);
        expect(jsonMock).toHaveBeenCalledWith({ message: "Invalid token" });
        expect(next).not.toHaveBeenCalled();
    });
    test("attaches payload to req.user and calls next on valid token", () => {
        const payload = { userId: "u1", role: "admin" };
        verifyToken.mockReturnValue(payload);
        // use a mutable object so middleware can set req.user
        const req = { headers: { authorization: "Bearer valid.token" } };
        const res = {};
        const next = jest.fn();
        authMiddleware(req, res, next);
        expect(verifyToken).toHaveBeenCalledWith("valid.token");
        expect(req.user).toBe(payload);
        expect(next).toHaveBeenCalled();
    });
});
