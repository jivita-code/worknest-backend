// Custom TypeScript types
import type { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload | string | Record<string, unknown>;
    }
  }
}

export {};