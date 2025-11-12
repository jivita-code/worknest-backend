/**
 * Hash a plaintext password.
 * @param password plaintext password
 * @param saltRounds bcrypt cost (default 10)
 * @returns hashed password
 */
export declare function hashPassword(password: string, saltRounds?: number): Promise<string>;
/**
 * Verify a plaintext password against a bcrypt hash.
 * @returns true if match
 */
export declare function verifyPassword(password: string, hash: string): Promise<boolean>;
/**
 * Basic password strength check.
 * - minLength: 8
 * - at least one lowercase, one uppercase, one digit, one special char
 */
export declare function isStrongPassword(password: string, minLength?: number): boolean;
//# sourceMappingURL=password.d.ts.map