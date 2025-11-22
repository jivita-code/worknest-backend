// Attendance Controller
import type { Request, Response } from "express";
import { checkIn, checkOut, getTodayAttendance } from "../services/attendance.service.js";

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
