import prisma from "../config/db";

export const createTrialSubscription = async (org_id: string, plan_id: string) => {
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 1); // Trial ends in one month

  return prisma.subscription.create({
    data: {
      org_id,
      plan_id,
      start_date: startDate,
      end_date: endDate,
      renewal_date: endDate, // Optional: set renewal to end date
      billing_cycle: "monthly",
      status: "trial",
      auto_renew: false,
      trial_end_date: endDate,
    },
  });
};

export const getTrialPlanId = async (): Promise<string> => {
  const plan = await prisma.plan.findFirst({
    where: { name: "Standard Plan" },
  });
  if (!plan) {
    throw new Error("Standard plan not found");
  }
  return plan.plan_id;
};