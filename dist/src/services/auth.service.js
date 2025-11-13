// Auth service for organizations
import prisma from "../config/db";
import { generateToken } from "../utils/jwt";
import { verifyPassword } from "../utils/password";
export const login = async (data) => {
    const { email, password } = data;
    // First try to find organization by email
    const organization = await prisma.organization.findFirst({
        where: { email },
    });
    if (organization) {
        // Verify password for organization
        const isPasswordValid = await verifyPassword(password, organization.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }
        // Generate JWT token for organization
        const token = generateToken({
            org_id: organization.org_id,
            type: "organization",
        });
        return {
            token,
            organization: {
                org_id: organization.org_id,
                name: organization.name,
                email: organization.email,
                logo_url: organization.logo_url || undefined,
            },
        };
    }
    // If organization not found, try to find employee by email
    const employee = await prisma.employee.findFirst({
        where: { email },
        include: {
            organization: true,
        },
    });
    if (employee) {
        // Verify password for employee
        const isPasswordValid = await verifyPassword(password, employee.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }
        // Generate JWT token for employee (using organization context)
        const token = generateToken({
            org_id: employee.org_id,
            emp_id: employee.emp_id,
            type: "employee",
        });
        return {
            token,
            organization: {
                org_id: employee.organization.org_id,
                name: employee.organization.name,
                email: employee.organization.email,
                logo_url: employee.organization.logo_url || undefined,
            },
            employee: {
                emp_id: employee.emp_id,
                first_name: employee.first_name,
                last_name: employee.last_name,
                email: employee.email,
            },
        };
    }
    // If neither organization nor employee found
    throw new Error("Invalid email or password");
};
