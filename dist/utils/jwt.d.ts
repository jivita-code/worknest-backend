import type { JwtPayload, SignOptions } from "jsonwebtoken";
export declare function generateToken(payload: Record<string, unknown>, expiresIn?: SignOptions["expiresIn"]): string;
export declare function verifyToken(token: string): JwtPayload | string | null;
//# sourceMappingURL=jwt.d.ts.map