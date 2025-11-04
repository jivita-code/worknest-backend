// Organization Service
import prisma from "../config/db";

export const createOrganization = async (data: { name: string; industry?: string; email: string }) => {
  return prisma.organization.create({ data });
};