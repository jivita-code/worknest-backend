// Organization Service
import prisma from "../config/db";

export const createOrganization = async (data: { name: string; email: string; password: string }) => {
  return prisma.organization.create({ data });
};