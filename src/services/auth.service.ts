// Auth service for organizations
import prisma from "../config/db";
import { generateToken } from "../utils/jwt";
import { verifyPassword } from "../utils/password";

export interface OrganizationLoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  organization: {
    org_id: string;
    name: string;
    email: string;
  };
}

export const login = async (data: OrganizationLoginData): Promise<AuthResponse> => {
  const { email, password } = data;

  // Find organization by email
  const organization = await prisma.organization.findFirst({
    where: { email },
  });

  if (!organization) {
    throw new Error("Invalid email or password");
  }

  // Verify password
  const isPasswordValid = await verifyPassword(password, organization.password);
  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  // Generate JWT token
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
    },
  };
};
