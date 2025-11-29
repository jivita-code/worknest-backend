// Attendance Controller
import type { Request, Response } from "express";
import { checkIn, checkOut, getTodayAttendance, getOrganizationAttendance, getEmployeeWeeklyAttendance, getEmployeeAttendanceSummary } from "../services/attendance.service.js";

export const checkInEmployee = async (req: Request, res: Response) => {
  try {
    const { emp_id, org_id } = (req as any).user;
    const { location } = req.body;

    const attendance = await checkIn(emp_id, org_id, location);
    res.status(201).json(attendance);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const checkOutEmployee = async (req: Request, res: Response) => {
  try {
    const { emp_id, org_id } = (req as any).user;
    const { location } = req.body;

    const attendance = await checkOut(emp_id, org_id, location);
    res.status(200).json(attendance);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getTodayStatus = async (req: Request, res: Response) => {
  try {
    const { emp_id, org_id } = (req as any).user;
    const attendance = await getTodayAttendance(emp_id, org_id);
    res.status(200).json(attendance);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getOrganizationAttendanceHistory = async (req: Request, res: Response) => {
  try {
    const { org_id } = (req as any).user;
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      return res.status(400).json({ error: "Start date and end date are required" });
    }

    const start = new Date(startDate as string);
    const end = new Date(endDate as string);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return res.status(400).json({ error: "Invalid date format" });
    }

    const attendance = await getOrganizationAttendance(org_id, start, end);
    res.status(200).json(attendance);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getMyWeeklyAttendance = async (req: Request, res: Response) => {
  try {
    const { emp_id, org_id } = (req as any).user;
    const { date } = req.query;

    const referenceDate = date ? new Date(date as string) : new Date();

    if (isNaN(referenceDate.getTime())) {
      return res.status(400).json({ error: "Invalid date format" });
    }

    const attendance = await getEmployeeWeeklyAttendance(emp_id, org_id, referenceDate);
    res.status(200).json(attendance);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getEmployeeYearSummary = async (req: Request, res: Response) => {
  try {
    const { org_id } = (req as any).user;
    const { emp_id } = req.params;
    const { year } = req.query;

    if (!org_id) return res.status(403).json({ error: "Forbidden" });
    if (!emp_id) return res.status(400).json({ error: "emp_id is required" });

    let start: Date | undefined;
    let end: Date | undefined;
    if (year) {
      const y = parseInt(year as string, 10);
      if (isNaN(y) || y < 1970) return res.status(400).json({ error: "Invalid year" });
      start = new Date(y, 0, 1);
      end = new Date(y, 11, 31);
    }

    const summary = await getEmployeeAttendanceSummary(org_id, emp_id, start, end);
    res.status(200).json(summary);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
