// Features service
import prisma from "../config/db";

export const seedFeatures = async () => {
  const features = [
    { name: 'Attendance Tracking' },
    { name: 'Leave Management' },
    { name: 'Payroll Processing' },
    { name: 'Petty Cash Management' },
    { name: 'Employee Directory' },
  ];

  for (const feature of features) {
    await prisma.feature.upsert({
      where: { name: feature.name },
      update: {},
      create: feature,
    });
  }
};

export const deleteAllFeatures = async () => {
  return prisma.feature.deleteMany();
};