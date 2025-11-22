// Attendance Controller
import type { Request, Response } from "express";
import { checkIn, checkOut, getTodayAttendance, getOrganizationAttendance } from "../services/attendance.service.js";

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
    res.status(200).json(attendance || { message: "Not checked in today" });
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
