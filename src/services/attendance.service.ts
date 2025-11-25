// Attendance Service
import prisma from "../config/db.js";

export const checkIn = async (emp_id: string, org_id: string, location?: string) => {
  // Get start of today
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Check for the latest attendance record for today
  const latestAttendance = await prisma.attendance.findFirst({
    where: {
      emp_id,
      org_id,
      date: {
        gte: today,
        lt: tomorrow,
      },
    },
    orderBy: {
      created_at: 'desc',
    },
  });

  // If there is an open session (no check_out_time), prevent check-in
  if (latestAttendance && !latestAttendance.check_out_time) {
    throw new Error("Employee already checked in");
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

  // Find the latest attendance record for today
  const attendance = await prisma.attendance.findFirst({
    where: {
      emp_id,
      org_id,
      date: {
        gte: today,
        lt: tomorrow,
      },
    },
    orderBy: {
      created_at: 'desc',
    },
  });

  if (!attendance) {
    throw new Error("No check-in record found for today");
  }

  if (attendance.check_out_time) {
    throw new Error("Employee already checked out");
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

  // Return all records for today
  return prisma.attendance.findMany({
    where: {
      emp_id,
      org_id,
      date: {
        gte: today,
        lt: tomorrow,
      },
    },
    orderBy: {
      created_at: 'asc',
    },
  });
};

export const getOrganizationAttendance = async (org_id: string, startDate: Date, endDate: Date) => {
  // Ensure endDate includes the full day if it's just a date string, 
  // but usually the caller passes a Date object. 
  // If we want to be safe about including the whole end day:
  const end = new Date(endDate);
  end.setHours(23, 59, 59, 999);
  
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);

  const records = await prisma.attendance.findMany({
    where: {
      org_id,
      date: {
        gte: start,
        lte: end,
      },
    },
    include: {
      employee: {
        select: {
          first_name: true,
          last_name: true,
          employee_number: true,
          designation: true,
          profile_photo_url: true,
          department: {
            select: {
              dep_id: true,
              name: true,
            },
          },
        },
      },
    },
    orderBy: {
      date: 'desc',
    },
  });

  // Group by date, then by employee
  const grouped: { [date: string]: { [emp_id: string]: { employee: any; attendances: any[] } } } = {};

  records.forEach(record => {
    const dateKey = record.date.toISOString().split('T')[0]; // YYYY-MM-DD
    const emp_id = record.emp_id;
    if (!grouped[dateKey]) {
      grouped[dateKey] = {};
    }
    if (!grouped[dateKey][emp_id]) {
      grouped[dateKey][emp_id] = {
        employee: record.employee,
        attendances: [],
      };
    }
    // Remove employee from the record since it's now in the group
    const { employee, ...attendance } = record;
    grouped[dateKey][emp_id].attendances.push(attendance);
  });

  return grouped;
};

export const getEmployeeWeeklyAttendance = async (emp_id: string, org_id: string, referenceDate: Date = new Date()) => {
  const currentDay = referenceDate.getDay(); // 0 (Sun) - 6 (Sat)
  const diffToMonday = currentDay === 0 ? 6 : currentDay - 1; // If Sun(0), go back 6 days. If Mon(1), go back 0.

  const startOfWeek = new Date(referenceDate);
  startOfWeek.setDate(referenceDate.getDate() - diffToMonday);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  return prisma.attendance.findMany({
    where: {
      emp_id,
      org_id,
      date: {
        gte: startOfWeek,
        lte: endOfWeek,
      },
    },
    orderBy: [
      { date: 'asc' },
      { created_at: 'asc' }
    ],
  });
};
