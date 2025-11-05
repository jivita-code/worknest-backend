// Organization Service
import prisma from "../config/db";
import { createTrialSubscription } from "./subscriptions.service";

export const deleteOrganization = async (org_id: string) => {
  return prisma.organization.delete({
    where: { org_id },
  });
};

export const registerOrganizationWithTrial = async (data: { name: string; email: string; password: string }) => {
  // Use transaction to ensure atomicity
  const result = await prisma.$transaction(async (tx) => {
    // Check if organization with this email already exists
    const existingOrg = await tx.organization.findFirst({
      where: { email: data.email },
    });

    if (existingOrg) {
      throw new Error("Organization with this email already exists");
    }

    // Create organization
    const org = await tx.organization.create({
      data,
    });

    // Get trial plan ID (using Standard Plan for now)
    const plan = await tx.plan.findFirst({
      where: { name: "Standard Plan" },
    });

    if (!plan) {
      throw new Error("Standard plan not found");
    }

    // Create trial subscription using the service
    await createTrialSubscription(org.org_id, plan.plan_id, tx);

    return org;
  });

  return result;
};