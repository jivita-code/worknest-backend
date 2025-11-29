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

/**
 * Get attendance summary counts for an employee within a date range.
 * Defaults to year-to-date (start = Jan 1 of current year, end = now) when dates are not provided.
 * Returns an object matching:
 * {
 *   emp_id: string,
 *   periodStart: string (ISO),
 *   periodEnd: string (ISO),
 *   totalPresent: number,
 *   totalOnLeave: number,
 *   totalAbsent: number
 * }
 */
export const getEmployeeAttendanceSummary = async (
  org_id: string,
  emp_id: string,
  startDate?: Date,
  endDate?: Date
) => {
  const now = new Date();
  const ref = startDate || endDate ? null : now;

  const start = startDate
    ? new Date(startDate)
    : new Date((ref ?? now).getFullYear(), 0, 1);
  start.setHours(0, 0, 0, 0);

  const end = endDate ? new Date(endDate) : now;
  end.setHours(23, 59, 59, 999);

  // Query attendance including `date` so we can group records by day.
  const detailedRecords = await prisma.attendance.findMany({
    where: {
      org_id,
      emp_id,
      date: {
        gte: start,
        lte: end,
      },
    },
    select: {
      status: true,
      date: true,
    },
  });

  // Group records by date (YYYY-MM-DD) so multiple records on the same day count once
  const days: { [date: string]: string[] } = {};
  detailedRecords.forEach(r => {
    const dateKey = new Date(r.date).toISOString().split('T')[0];
    if (!days[dateKey]) days[dateKey] = [];
    days[dateKey].push(r.status);
  });

  let totalPresent = 0;
  let totalOnLeave = 0;

  // For each day, derive a single status. Priority: present > on_leave > absent
  Object.keys(days).forEach(dateKey => {
    const statuses = days[dateKey];
    if (statuses.includes('present')) totalPresent += 1;
    else if (statuses.includes('on_leave')) totalOnLeave += 1;
    // if neither present nor on_leave, it's implicitly absent for that day
  });

  // Calculate total calendar days in the period (inclusive)
  const msPerDay = 24 * 60 * 60 * 1000;
  const startDay = new Date(start);
  startDay.setHours(0, 0, 0, 0);
  const endDay = new Date(end);
  endDay.setHours(0, 0, 0, 0);
  const totalDays = Math.floor((endDay.getTime() - startDay.getTime()) / msPerDay) + 1;

  // Absent = days in period minus days present or on leave. Ensure non-negative.
  let totalAbsent = totalDays - (totalPresent + totalOnLeave);
  if (totalAbsent < 0) totalAbsent = 0;

  return {
    emp_id,
    periodStart: start.toISOString().split('T')[0],
    periodEnd: end.toISOString().split('T')[0],
    totalPresent,
    totalOnLeave,
    totalAbsent,
  };
};
