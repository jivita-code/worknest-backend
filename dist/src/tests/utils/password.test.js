import { hashPassword, verifyPassword, isStrongPassword } from "../../utils/password.js";
describe("password utils", () => {
    test("hashPassword returns a hash string different from plaintext", async () => {
        const plain = "P@ssw0rd!";
        const hash = await hashPassword(plain, 8);
        expect(typeof hash).toBe("string");
        expect(hash).not.toBe(plain);
        expect(hash.length).toBeGreaterThan(0);
    });
    test("verifyPassword validates correct and incorrect passwords", async () => {
        const plain = "MyS3cret#1";
        const hash = await hashPassword(plain, 8);
        const valid = await verifyPassword(plain, hash);
        expect(valid).toBe(true);
        const invalid = await verifyPassword("wrong-password", hash);
        expect(invalid).toBe(false);
    });
    test("isStrongPassword recognizes strong and weak passwords", () => {
        expect(isStrongPassword("P@ssw0rd!")).toBe(true); // strong
        expect(isStrongPassword("weakpass")).toBe(false); // no upper/digit/special
        expect(isStrongPassword("Short1!")).toBe(false); // too short
        expect(isStrongPassword("NoSpecial1")).toBe(false); // missing special char
    });
});
