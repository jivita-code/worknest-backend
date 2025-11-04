// Password utility functions
import bcrypt from "bcryptjs";

/**
 * Hash a plaintext password.
 * @param password plaintext password
 * @param saltRounds bcrypt cost (default 10)
 * @returns hashed password
 */
export async function hashPassword(password: string, saltRounds = 10): Promise<string> {
  return bcrypt.hash(password, saltRounds);
}

/**
 * Verify a plaintext password against a bcrypt hash.
 * @returns true if match
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Basic password strength check.
 * - minLength: 8
 * - at least one lowercase, one uppercase, one digit, one special char
 */
export function isStrongPassword(password: string, minLength = 8): boolean {
  if (!password || password.length < minLength) return false;
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>_\-\\[\];'`~+=/]/.test(password);
  return hasLower && hasUpper && hasDigit && hasSpecial;
}