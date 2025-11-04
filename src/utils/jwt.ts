// JWT utility functions
import jwt from "jsonwebtoken";
import type { JwtPayload, Secret, SignOptions } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? "defaultsecret";

export function generateToken(
  payload: Record<string, unknown>,
  expiresIn: SignOptions["expiresIn"] = "1d"
): string {
  const options: SignOptions = { expiresIn: expiresIn as NonNullable<SignOptions["expiresIn"]> };
  return jwt.sign(payload as JwtPayload, JWT_SECRET as Secret, options);
}

export function verifyToken(token: string): JwtPayload | string | null {
  try {
    return jwt.verify(token, JWT_SECRET as Secret) as JwtPayload | string;
  } catch {
    return null;
  }
}
