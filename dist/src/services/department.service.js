// Department service
import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();
export const getDepartmentsDropdown = async (org_id) => {
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
export const getAllDepartments = async (org_id) => {
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
export const updateDepartment = async (dep_id, org_id, data) => {
    const { name, head_id, parent_department_id } = data;
    // Check if department exists and belongs to the organization
    const existingDepartment = await prisma.department.findFirst({
        where: {
            dep_id,
            org_id,
        },
    });
    if (!existingDepartment) {
        throw new Error("Department not found or does not belong to this organization");
    }
    // If name is being updated, check for uniqueness
    if (name && name !== existingDepartment.name) {
        const nameExists = await prisma.department.findFirst({
            where: {
                org_id,
                name: {
                    equals: name,
                    mode: 'insensitive' // Case insensitive comparison
                }
            }
        });
        if (nameExists) {
            throw new Error("Department name already exists in this organization");
        }
    }
    // Validate head_id if provided
    if (head_id !== undefined) {
        // Allow "-" or empty string to clear the head
        if (head_id === "-" || head_id === "") {
            // Clear the head - no validation needed
        }
        else if (head_id) {
            const headEmployee = await prisma.employee.findFirst({
                where: {
                    emp_id: head_id,
                    org_id
                }
            });
            if (!headEmployee) {
                throw new Error("Head employee not found or does not belong to this organization");
            }
            // Check if employee is already head of another department (but not this one)
            const existingHeadDepartment = await prisma.department.findFirst({
                where: {
                    head_id,
                    org_id,
                    dep_id: {
                        not: dep_id // Exclude current department
                    }
                }
            });
            if (existingHeadDepartment) {
                throw new Error("Employee is already head of another department");
            }
        }
    }
    // Validate parent_department_id if provided
    if (parent_department_id !== undefined) {
        // Allow null/empty to clear parent
        if (parent_department_id && parent_department_id !== "-") {
            const parentDepartment = await prisma.department.findFirst({
                where: {
                    dep_id: parent_department_id,
                    org_id
                }
            });
            if (!parentDepartment) {
                throw new Error("Parent department not found or does not belong to this organization");
            }
            // Prevent self-reference
            if (parent_department_id === dep_id) {
                throw new Error("Department cannot be its own parent");
            }
        }
    }
    // Prepare update data
    const updateData = {};
    if (name !== undefined)
        updateData.name = name.trim();
    if (head_id !== undefined) {
        updateData.head_id = (head_id === "-" || head_id === "") ? null : head_id;
    }
    if (parent_department_id !== undefined) {
        updateData.parent_department_id = (parent_department_id === "-" || parent_department_id === "") ? null : parent_department_id;
    }
    // Update the department
    const department = await prisma.department.update({
        where: {
            dep_id,
        },
        data: updateData,
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
                    email: true,
                    designation: true,
                }
            },
            parent_department: {
                select: {
                    dep_id: true,
                    name: true
                }
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
        }
    });
    return department;
};
export const createDepartment = async (org_id, data) => {
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
export const deleteDepartment = async (dep_id, org_id) => {
    // Check if department exists and belongs to the organization
    const existingDepartment = await prisma.department.findFirst({
        where: {
            dep_id,
            org_id,
        },
        include: {
            employees: true,
            sub_departments: true,
        },
    });
    if (!existingDepartment) {
        throw new Error("Department not found or does not belong to this organization");
    }
    // Check if department has employees
    if (existingDepartment.employees && existingDepartment.employees.length > 0) {
        throw new Error("Cannot delete department that has employees. Please reassign or remove all employees first.");
    }
    // If department has sub-departments, remove their parent relationship
    if (existingDepartment.sub_departments && existingDepartment.sub_departments.length > 0) {
        await prisma.department.updateMany({
            where: {
                parent_department_id: dep_id,
                org_id, // Ensure we only affect departments in the same organization
            },
            data: {
                parent_department_id: null,
            },
        });
    }
    // Delete the department
    await prisma.department.delete({
        where: {
            dep_id,
        },
    });
    return { message: "Department deleted successfully" };
};
