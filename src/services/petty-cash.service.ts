// Petty cash service
import prisma from "../config/db.js";

export const createPettyCashRequest = async (org_id: string, emp_id: string, data: {
  amount: number;
  currency: string;
  request_date?: string | Date;
  request_type: string;
  reason?: string;
  attachments?: string[];
}) => {
  if (!data.amount || isNaN(Number(data.amount)) || Number(data.amount) <= 0) {
    throw new Error("Invalid amount");
  }

  if (!data.request_type) {
    throw new Error("request_type is required");
  }

  const reqDate = data.request_date ? new Date(data.request_date) : new Date();
  if (isNaN(reqDate.getTime())) throw new Error("Invalid request_date");

  const created = await prisma.pettyCashRequest.create({
    data: {
      org_id,
      emp_id,
      amount: Number(data.amount),
      currency: data.currency || "LKR",
      request_date: reqDate,
      request_type: data.request_type,
      reason: data.reason || null,
      attachments: data.attachments && data.attachments.length ? JSON.stringify(data.attachments) : null,
      status: "pending",
    },
  });

  return created;
};

export const getPettyCashForEmployeeForYear = async (org_id: string, emp_id: string, year?: number) => {
  const ref = year ? new Date(year, 0, 1) : new Date();
  const y = year ?? ref.getFullYear();

  const start = new Date(y, 0, 1);
  start.setHours(0, 0, 0, 0);
  const end = new Date(y, 11, 31);
  end.setHours(23, 59, 59, 999);

  return prisma.pettyCashRequest.findMany({
    where: {
      org_id,
      emp_id,
      request_date: {
        gte: start,
        lte: end,
      },
    },
    orderBy: { request_date: 'asc' },
  });
};

export const deletePettyCashRequest = async (pet_id: string, org_id: string, emp_id: string) => {
  const existing = await prisma.pettyCashRequest.findUnique({ where: { pet_id } });
  if (!existing) throw new Error("Petty cash request not found");
  if (existing.org_id !== org_id || existing.emp_id !== emp_id) throw new Error("Not authorized");
  if (existing.status !== "pending") throw new Error("Only pending petty cash requests can be deleted");

  await prisma.pettyCashRequest.delete({ where: { pet_id } });
  return { success: true };
};
