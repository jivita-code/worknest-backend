// JWT utility functions
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET ?? "defaultsecret";
export function generateToken(payload, expiresIn = "1d") {
    const options = { expiresIn: expiresIn };
    return jwt.sign(payload, JWT_SECRET, options);
}
export function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    }
    catch {
        return null;
    }
}
