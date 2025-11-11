// Department service
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export interface CreateDepartmentData {
  name: string;
  head_id?: string;
  parent_department_id?: string;
}

export const getDepartmentsDropdown = async (org_id: string) => {
  const departments = await prisma.department.findMany({
    where: {
      org_id,
    },
    select: {
      dep_id: true,
      name: true,
    },
    orderBy: {
      name: 'asc',
    },
  });

  return departments;
};

export const getAllDepartments = async (org_id: string) => {
  const departments = await prisma.department.findMany({
    where: {
      org_id,
    },
    include: {
      head: {
        select: {
          emp_id: true,
          first_name: true,
          last_name: true,
          email: true,
          designation: true,
        },
      },
      parent_department: {
        select: {
          dep_id: true,
          name: true,
        },
      },
      sub_departments: {
        select: {
          dep_id: true,
          name: true,
        },
      },
      _count: {
        select: {
          employees: true,
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  });

  return departments;
};

export const createDepartment = async (org_id: string, data: CreateDepartmentData) => {
  const { name, head_id, parent_department_id } = data;

  // Check if department name already exists in the organization
  const existingDepartment = await prisma.department.findFirst({
    where: {
      org_id,
      name: {
        equals: name,
        mode: 'insensitive' // Case insensitive comparison
      }
    }
  });

  if (existingDepartment) {
    throw new Error("Department name already exists in this organization");
  }

  // Validate head_id if provided
  if (head_id) {
    const headEmployee = await prisma.employee.findFirst({
      where: {
        emp_id: head_id,
        org_id
      }
    });

    if (!headEmployee) {
      throw new Error("Head employee not found or does not belong to this organization");
    }

    // Check if employee is already head of another department
    const existingHeadDepartment = await prisma.department.findFirst({
      where: {
        head_id,
        org_id
      }
    });

    if (existingHeadDepartment) {
      throw new Error("Employee is already head of another department");
    }
  }

  // Validate parent_department_id if provided
  if (parent_department_id) {
    const parentDepartment = await prisma.department.findFirst({
      where: {
        dep_id: parent_department_id,
        org_id
      }
    });

    if (!parentDepartment) {
      throw new Error("Parent department not found or does not belong to this organization");
    }
  }

  // Create the department
  const department = await prisma.department.create({
    data: {
      org_id,
      name,
      head_id: head_id || null,
      parent_department_id: parent_department_id || null,
    },
    include: {
      organization: {
        select: {
          name: true,
          email: true
        }
      },
      head: {
        select: {
          emp_id: true,
          first_name: true,
          last_name: true,
          email: true
        }
      },
      parent_department: {
        select: {
          dep_id: true,
          name: true
        }
      }
    }
  });

  return department;
};
