// PostgreSQL connection setup using Prisma
import { PrismaClient } from "../../prisma/generated/prisma";

const prisma = new PrismaClient();

export default prisma;
