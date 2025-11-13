// PostgreSQL connection setup using Prisma
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export default prisma;
