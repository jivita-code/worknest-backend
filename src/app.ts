// Express app entry point

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { authMiddleware } from "./middlewares/auth.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";
import orgRoutes from "./routes/org.routes";
import authRoutes from "./routes/auth.routes";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// public routes
app.use("/auth", authRoutes);
app.use("/api/org", orgRoutes); 

// protected routes
app.use("/api", authMiddleware);

// error handler (last)
app.use(errorMiddleware);


export default app;
