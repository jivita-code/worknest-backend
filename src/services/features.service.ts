// Features service
import prisma from "../config/db";

export const seedFeatures = async () => {
  const features = [
    { name: 'Attendance Management' },
    { name: 'Leave Requests Management' },
    { name: 'Petty Cash Management' },
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