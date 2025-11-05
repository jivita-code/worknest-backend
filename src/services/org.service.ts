// Organization Service
import prisma from "../config/db";
import { createTrialSubscription } from "./subscriptions.service";
import { hashPassword } from "../utils/password";

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

    // Hash the password before saving
    const hashedPassword = await hashPassword(data.password);

    // Create organization with hashed password
    const org = await tx.organization.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
      select: {
        org_id: true,
        name: true,
        email: true,
        industry: true,
        registration_no: true,
        address: true,
        phone: true,
        logo_url: true,
        created_at: true,
        update_at: true,
        sub_id: true,
      },
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