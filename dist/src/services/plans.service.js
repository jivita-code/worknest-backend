// Plans Service
import prisma from "../config/db.js";
export const seedPlans = async () => {
    const allFeatures = await prisma.feature.findMany();
    const selectedFeatureNames = ['Attendance Management', 'Leave Requests Management', 'Petty Cash Management'];
    const featureIds = allFeatures
        .filter(f => selectedFeatureNames.includes(f.name))
        .map(f => ({ fet_id: f.fet_id }));
    // Seed Standard Plan
    await prisma.plan.upsert({
        where: { name: "Standard Plan" },
        update: {},
        create: {
            name: "Standard Plan",
            description: "Includes all available features",
            price_monthly: 15000,
            price_annual: 150000,
            currency: "LKR",
            max_employees: 50,
            features: {
                connect: featureIds,
            },
        },
    });
    console.log("Plans seeded successfully");
};
export const deleteAllPlans = async () => {
    return prisma.plan.deleteMany();
};
