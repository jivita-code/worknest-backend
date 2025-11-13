import prisma from "../config/db";
export const createTrialSubscription = async (org_id, plan_id, tx) => {
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1); // Trial ends in one month
    const subscriptionData = {
        org_id,
        plan_id,
        start_date: startDate,
        end_date: endDate,
        renewal_date: endDate, // Optional: set renewal to end date
        billing_cycle: "monthly",
        status: "trial",
        auto_renew: false,
        trial_end_date: endDate,
    };
    if (tx) {
        return tx.subscription.create({ data: subscriptionData });
    }
    else {
        return prisma.subscription.create({ data: subscriptionData });
    }
};
