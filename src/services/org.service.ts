// Organization Service
import prisma from "../config/db";

export const createOrganization = async (data: { name: string; email: string; password: string }) => {
  return prisma.organization.create({ data });
};

export const deleteOrganization = async (org_id: string) => {
  return prisma.organization.delete({
    where: { org_id },
  });
};