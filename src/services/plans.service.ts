// Plans Service
import prisma from "../config/db";

export const seedPlans = async () => {
  const features = await prisma.feature.findMany();
  const featureIds = features.map(f => ({ fet_id: f.fet_id }));

  await prisma.plan.upsert({
    where: { name: "Standard Plan" },
    update: {},
    create: {
      name: "Standard Plan",
      description: "Includes all available features",
      price_monthly: 42.00,
      price_annual: 480.00,
      currency: "USD",
      max_employees: 50,
      features: {
        connect: featureIds,
      },
    },
  });
};

export const deleteAllPlans = async () => {
  return prisma.plan.deleteMany();
};