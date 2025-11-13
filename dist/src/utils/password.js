// Password utility functions
import bcrypt from "bcryptjs";
/**
 * Hash a plaintext password.
 * @param password plaintext password
 * @param saltRounds bcrypt cost (default 10)
 * @returns hashed password
 */
export async function hashPassword(password, saltRounds = 10) {
    return bcrypt.hash(password, saltRounds);
}
/**
 * Verify a plaintext password against a bcrypt hash.
 * @returns true if match
 */
export async function verifyPassword(password, hash) {
    return bcrypt.compare(password, hash);
}
/**
 * Basic password strength check.
 * - minLength: 8
 * - at least one lowercase, one uppercase, one digit, one special char
 */
export function isStrongPassword(password, minLength = 8) {
    if (!password || password.length < minLength)
        return false;
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>_\-\\[\];'`~+=/]/.test(password);
    return hasLower && hasUpper && hasDigit && hasSpecial;
}
