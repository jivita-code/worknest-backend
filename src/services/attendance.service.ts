// Attendance Service
import prisma from "../config/db.js";

export const checkIn = async (emp_id: string, org_id: string, location?: string) => {
  // Get start of today
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Check if already checked in today
  const existingAttendance = await prisma.attendance.findFirst({
    where: {
      emp_id,
      org_id,
      date: {
        gte: today,
        lt: tomorrow,
      },
    },
  });

  if (existingAttendance) {
    throw new Error("Employee already checked in for today");
  }

  // Create attendance record
  const attendance = await prisma.attendance.create({
    data: {
      org_id,
      emp_id,
      date: today,
      check_in_time: new Date(),
      check_in_location: location,
      status: "present",
    },
  });

  return attendance;
};

export const checkOut = async (emp_id: string, org_id: string, location?: string) => {
  // Get start of today
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Find today's attendance record
  const attendance = await prisma.attendance.findFirst({
    where: {
      emp_id,
      org_id,
      date: {
        gte: today,
        lt: tomorrow,
      },
    },
  });

  if (!attendance) {
    throw new Error("No check-in record found for today");
  }

  if (attendance.check_out_time) {
    throw new Error("Employee already checked out for today");
  }

  const checkOutTime = new Date();
  
  // Calculate work hours
  let workHours = 0;
  if (attendance.check_in_time) {
    const diffMs = checkOutTime.getTime() - new Date(attendance.check_in_time).getTime();
    workHours = diffMs / (1000 * 60 * 60); // Convert milliseconds to hours
    workHours = Math.round(workHours * 100) / 100; // Round to 2 decimal places
  }

  // Update attendance record
  const updatedAttendance = await prisma.attendance.update({
    where: {
      att_id: attendance.att_id,
    },
    data: {
      check_out_time: checkOutTime,
      check_out_location: location,
      work_hours: workHours,
    },
  });

  return updatedAttendance;
};

export const getTodayAttendance = async (emp_id: string, org_id: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return prisma.attendance.findFirst({
    where: {
      emp_id,
      org_id,
      date: {
        gte: today,
        lt: tomorrow,
      },
    },
  });
};
