// Organization Service
import prisma from "../config/db.js";
import { createTrialSubscription } from "./subscriptions.service.js";
import { hashPassword, isStrongPassword, verifyPassword } from "../utils/password.js";
export const getOrganizationById = async (org_id) => {
    return prisma.organization.findUnique({
        where: { org_id },
        select: {
            org_id: true,
            name: true,
            industry: true,
            registration_no: true,
            address: true,
            email: true,
            phone: true,
            logo_url: true,
            created_at: true,
            update_at: true,
            sub_id: true,
        },
    });
};
export const updateOrganization = async (org_id, data) => {
    return prisma.organization.update({
        where: { org_id },
        data,
        select: {
            org_id: true,
            name: true,
            industry: true,
            registration_no: true,
            address: true,
            email: true,
            phone: true,
            logo_url: true,
            created_at: true,
            update_at: true,
            sub_id: true,
        },
    });
};
export const updateOrganizationPassword = async (org_id, currentPassword, newPassword) => {
    // First, get the organization with password to verify current password
    const organization = await prisma.organization.findUnique({
        where: { org_id },
        select: {
            org_id: true,
            password: true,
        },
    });
    if (!organization) {
        throw new Error("Organization not found");
    }
    // Verify current password
    const isCurrentPasswordValid = await verifyPassword(currentPassword, organization.password);
    if (!isCurrentPasswordValid) {
        throw new Error("Current password is incorrect");
    }
    // Validate new password strength
    if (!isStrongPassword(newPassword)) {
        throw new Error("New password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character");
    }
    // Hash new password
    const hashedNewPassword = await hashPassword(newPassword);
    // Update password
    return prisma.organization.update({
        where: { org_id },
        data: { password: hashedNewPassword },
        select: {
            org_id: true,
            name: true,
            email: true,
            update_at: true,
        },
    });
};
export const registerOrganizationWithTrial = async (data) => {
    // Use transaction to ensure atomicity
    const result = await prisma.$transaction(async (tx) => {
        // Check if organization with this email already exists
        const existingOrg = await tx.organization.findFirst({
            where: { email: data.email },
        });
        if (existingOrg) {
            throw new Error("Organization with this email already exists");
        }
        // Validate password strength
        if (!isStrongPassword(data.password)) {
            throw new Error("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character");
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
