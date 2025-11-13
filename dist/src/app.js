// Express app entry point
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { authMiddleware } from "./middlewares/auth.middleware.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import orgRoutes from "./routes/org.routes.js";
import authRoutes from "./routes/auth.routes.js";
import employeeRoutes from "./routes/employee.routes.js";
import departmentRoutes from "./routes/department.routes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
// public routes
app.use("/auth", authRoutes);
// protected routes (auth middleware applied first)
app.use("/api", authMiddleware);
app.use("/api/org", orgRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/departments", departmentRoutes);
// error handler (last)
app.use(errorMiddleware);
export default app;
