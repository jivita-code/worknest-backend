// Employee Service
import prisma from "../config/db";
import { hashPassword } from "../utils/password";

export const getEmployeesDropdown = async (org_id: string) => {
  return prisma.employee.findMany({
    where: {
      org_id,
      status: 'active',
    },
    select: {
      emp_id: true,
      first_name: true,
      last_name: true,
      employee_number: true,
    },
    orderBy: {
      first_name: 'asc',
    },
  });
};

export const getAllEmployees = async (org_id: string) => {
  return prisma.employee.findMany({
    where: {
      org_id,
    },
    include: {
      department: {
        select: {
          dep_id: true,
          name: true,
        },
      },
      headed_department: {
        select: {
          dep_id: true,
          name: true,
        },
      },
      organization: {
        select: {
          name: true,
          email: true,
        },
      },
      _count: {
        select: {
          attendances: true,
          leave_requests: true,
          petty_cash_requests: true,
        },
      },
    },
    orderBy: {
      first_name: 'asc',
    },
  });
};

export const createEmployee = async (org_id: string, data: {
  employee_number: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone?: string;
  designation?: string;
  employment_type: string;
  join_date?: Date;
  dep_id?: string;
}) => {
  // Check if employee with this email already exists
  const existingEmployee = await prisma.employee.findUnique({
    where: { email: data.email },
  });

  if (existingEmployee) {
    throw new Error("Employee with this email already exists");
  }

  // Hash the password before saving
  const hashedPassword = await hashPassword(data.password);

  // Create employee
  return prisma.employee.create({
    data: {
      org_id,
      employee_number: data.employee_number,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: hashedPassword,
      phone: data.phone || null,
      designation: data.designation || null,
      employment_type: data.employment_type,
      join_date: data.join_date || null,
      dep_id: data.dep_id || null,
      status: 'active', // Always set to active for new employees
    },
    select: {
      emp_id: true,
      employee_number: true,
      first_name: true,
      last_name: true,
      email: true,
      phone: true,
      designation: true,
      employment_type: true,
      join_date: true,
      status: true,
      created_at: true,
      update_at: true,
      department: {
        select: {
          dep_id: true,
          name: true,
        },
      },
    },
  });
};