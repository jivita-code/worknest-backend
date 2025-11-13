// Employee Service
import prisma from "../config/db";
import { hashPassword } from "../utils/password";
export const getEmployeesDropdown = async (org_id) => {
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
export const getAllEmployees = async (org_id) => {
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
export const createEmployee = async (org_id, data) => {
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
export const updateEmployee = async (emp_id, org_id, data) => {
    // Check if employee exists and belongs to the organization
    const existingEmployee = await prisma.employee.findFirst({
        where: {
            emp_id,
            org_id,
        },
    });
    if (!existingEmployee) {
        throw new Error("Employee not found or does not belong to this organization");
    }
    // If email is being updated, check for uniqueness
    if (data.email && data.email !== existingEmployee.email) {
        const emailExists = await prisma.employee.findUnique({
            where: { email: data.email },
        });
        if (emailExists) {
            throw new Error("Employee with this email already exists");
        }
    }
    // Prepare update data
    const updateData = {};
    // Handle basic fields
    if (data.employee_number !== undefined)
        updateData.employee_number = data.employee_number;
    if (data.first_name !== undefined)
        updateData.first_name = data.first_name;
    if (data.last_name !== undefined)
        updateData.last_name = data.last_name;
    if (data.email !== undefined)
        updateData.email = data.email;
    if (data.phone !== undefined)
        updateData.phone = data.phone;
    if (data.designation !== undefined)
        updateData.designation = data.designation;
    if (data.employment_type !== undefined)
        updateData.employment_type = data.employment_type;
    if (data.join_date !== undefined)
        updateData.join_date = data.join_date;
    if (data.dep_id !== undefined)
        updateData.dep_id = data.dep_id;
    // Handle password - hash if provided
    if (data.password) {
        updateData.password = await hashPassword(data.password);
    }
    // Handle status change - set resign_date if status is "resigned"
    if (data.status !== undefined) {
        updateData.status = data.status;
        if (data.status === "resigned") {
            updateData.resign_date = new Date();
        }
    }
    // Update the employee
    const updatedEmployee = await prisma.employee.update({
        where: {
            emp_id,
        },
        data: updateData,
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
            resign_date: true,
            status: true,
            created_at: true,
            update_at: true,
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
        },
    });
    return updatedEmployee;
};
export const deleteEmployee = async (emp_id, org_id) => {
    // Check if employee exists and belongs to the organization
    const existingEmployee = await prisma.employee.findFirst({
        where: {
            emp_id,
            org_id,
        },
        include: {
            headed_department: true,
            attendances: true,
            leave_requests: true,
            approved_leaves: true,
            petty_cash_requests: true,
            approved_petty_cash: true,
        },
    });
    if (!existingEmployee) {
        throw new Error("Employee not found or does not belong to this organization");
    }
    // If employee is a department head, clear the head_id reference
    if (existingEmployee.headed_department) {
        await prisma.department.update({
            where: {
                dep_id: existingEmployee.headed_department.dep_id,
            },
            data: {
                head_id: null,
            },
        });
    }
    // Delete related records first to avoid foreign key constraints
    // Delete attendances
    if (existingEmployee.attendances && existingEmployee.attendances.length > 0) {
        await prisma.attendance.deleteMany({
            where: {
                emp_id,
            },
        });
    }
    // Delete leave requests (both as requester and approver)
    await prisma.leaveRequest.deleteMany({
        where: {
            OR: [
                { emp_id }, // Leave requests made by this employee
                { approved_by: emp_id }, // Leave requests approved by this employee
            ],
        },
    });
    // Delete petty cash requests (both as requester and approver)
    await prisma.pettyCashRequest.deleteMany({
        where: {
            OR: [
                { emp_id }, // Petty cash requests made by this employee
                { approved_by: emp_id }, // Petty cash requests approved by this employee
            ],
        },
    });
    // Finally, delete the employee
    await prisma.employee.delete({
        where: {
            emp_id,
        },
    });
    return { message: "Employee deleted successfully" };
};
