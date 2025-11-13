// PostgreSQL connection setup using Prisma
import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();
export default prisma;
