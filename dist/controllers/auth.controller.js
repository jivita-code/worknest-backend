import * as authService from "../services/auth.service";
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }
        const authData = await authService.login({ email, password });
        res.status(200).json(authData);
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=auth.controller.js.map