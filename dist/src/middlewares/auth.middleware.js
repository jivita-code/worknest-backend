import { verifyToken } from "../utils/jwt";
export const authMiddleware = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = header.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const payload = verifyToken(token);
    if (!payload) {
        return res.status(401).json({ message: "Invalid token" });
    }
    req.user = payload;
    next();
};
