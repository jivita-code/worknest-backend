import jwt from "jsonwebtoken";
import { generateToken, verifyToken } from "../../utils/jwt.ts";
describe("jwt utils", () => {
    const OLD_SECRET = process.env.JWT_SECRET;
    beforeAll(() => {
        process.env.JWT_SECRET = "testsecret";
    });
    afterAll(() => {
        process.env.JWT_SECRET = OLD_SECRET;
    });
    test("generateToken returns a token string", () => {
        const token = generateToken({ userId: "u1" }, "1d");
        expect(typeof token).toBe("string");
        expect(token.split(".").length).toBe(3);
    });
    test("verifyToken returns payload for valid token", () => {
        const payload = { userId: "u2", role: "admin" };
        const token = generateToken(payload, "1d");
        const verified = verifyToken(token);
        expect(verified).not.toBeNull();
        // payload properties should be present
        // @ts-ignore
        expect(verified.userId).toBe("u2");
        // @ts-ignore
        expect(verified.role).toBe("admin");
    });
    test("verifyToken returns null for invalid token", () => {
        expect(verifyToken("invalid.token.here")).toBeNull();
    });
    test("token contains exp according to expiresIn", () => {
        const token = generateToken({ userId: "u3" }, "10s");
        const decoded = jwt.decode(token);
        expect(decoded).not.toBeNull();
        const iat = decoded?.iat;
        const exp = decoded?.exp;
        expect(typeof iat).toBe("number");
        expect(typeof exp).toBe("number");
        // allow small timing margin
        const diff = exp - iat;
        expect(diff).toBeGreaterThanOrEqual(9);
        expect(diff).toBeLessThanOrEqual(11);
    });
});
