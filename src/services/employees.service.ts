// Employee Service
import prisma from "../config/db";

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