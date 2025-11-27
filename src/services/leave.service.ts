// Leave service
import prisma from "../config/db.js";
import { uuidToLockBigInt } from "../utils/locks.js";

export const createLeaveRequest = async (org_id: string, emp_id: string, data: {
  leave_type: string;
  start_date: string | Date;
  end_date: string | Date;
  reason?: string;
  attachments?: string[];
}) => {
  const start = new Date(data.start_date);
  const end = new Date(data.end_date);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    throw new Error("Invalid start_date or end_date");
  }

  if (end < start) {
    throw new Error("end_date must be same or after start_date");
  }

  // Use a short transaction with a Postgres advisory lock scoped to the employee
  // to serialize concurrent create attempts and avoid race conditions.
  return prisma.$transaction(async (tx) => {
    // Acquire transaction-scoped advisory lock for this employee
    const lockId = uuidToLockBigInt(emp_id);
    await tx.$executeRaw`SELECT pg_advisory_xact_lock(${lockId})`;

    // Check overlapping (inclusive). Consider only pending/approved leaves for conflicts.
    const overlapping = await tx.leaveRequest.findFirst({
      where: {
        org_id,
        emp_id,
        status: { in: ["pending", "approved"] },
        AND: [
          { start_date: { lte: end } },
          { end_date: { gte: start } },
        ],
      },
    });

    if (overlapping) {
      const err: any = new Error("Overlapping leave request exists");
      err.code = "OVERLAP";
      throw err;
    }

    const created = await tx.leaveRequest.create({
      data: {
        org_id,
        emp_id,
        leave_type: data.leave_type,
        start_date: start,
        end_date: end,
        reason: data.reason || null,
        attachments: data.attachments && data.attachments.length ? JSON.stringify(data.attachments) : null,
        status: "pending",
      },
    });

    return created;
  });
};

export const getLeavesForEmployee = async (org_id: string, emp_id: string) => {
  return prisma.leaveRequest.findMany({
    where: { org_id, emp_id },
    orderBy: { created_at: "desc" },
  });
};


export const deleteLeaveRequest = async (leave_id: string, org_id: string, emp_id: string) => {
  const existing = await prisma.leaveRequest.findUnique({ where: { leave_id } });
  if (!existing) throw new Error("Leave request not found");
  if (existing.org_id !== org_id || existing.emp_id !== emp_id) throw new Error("Not authorized");
  if (existing.status !== "pending") throw new Error("Only pending leave requests can be deleted");

  await prisma.leaveRequest.delete({ where: { leave_id } });
  return { success: true };
};
