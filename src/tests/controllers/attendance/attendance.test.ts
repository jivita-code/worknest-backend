import type { Request, Response } from "express";

jest.mock("../../../services/attendance.service", () => ({
  checkIn: jest.fn(),
  checkOut: jest.fn(),
  getTodayAttendance: jest.fn(),
  getOrganizationAttendance: jest.fn(),
  getEmployeeWeeklyAttendance: jest.fn(),
}));
import * as attendanceService from "../../../services/attendance.service.js";

import {
  checkInEmployee,
  checkOutEmployee,
  getTodayStatus,
  getOrganizationAttendanceHistory,
  getMyWeeklyAttendance,
} from "../../../controllers/attendance.controller.js";

describe("Attendance Controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    req = { user: { emp_id: "emp-1", org_id: "org-1" }, body: {}, query: {} };
    res = { status: statusMock };
    (attendanceService.checkIn as jest.Mock).mockReset();
    (attendanceService.checkOut as jest.Mock).mockReset();
    (attendanceService.getTodayAttendance as jest.Mock).mockReset();
    (attendanceService.getOrganizationAttendance as jest.Mock).mockReset();
    (attendanceService.getEmployeeWeeklyAttendance as jest.Mock).mockReset();
  });

  describe("checkInEmployee", () => {
    test("should check in successfully", async () => {
      const mockAttendance = { att_id: "1", status: "present" };
      (attendanceService.checkIn as jest.Mock).mockResolvedValue(mockAttendance);
      req.body = { location: "Office" };

      await checkInEmployee(req as Request, res as Response);

      expect(attendanceService.checkIn).toHaveBeenCalledWith("emp-1", "org-1", "Office");
      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(mockAttendance);
    });

    test("should handle errors during check in", async () => {
      (attendanceService.checkIn as jest.Mock).mockRejectedValue(new Error("Already checked in"));

      await checkInEmployee(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({ error: "Already checked in" });
    });
  });

  describe("checkOutEmployee", () => {
    test("should check out successfully", async () => {
      const mockAttendance = { att_id: "1", check_out_time: new Date() };
      (attendanceService.checkOut as jest.Mock).mockResolvedValue(mockAttendance);
      req.body = { location: "Home" };

      await checkOutEmployee(req as Request, res as Response);

      expect(attendanceService.checkOut).toHaveBeenCalledWith("emp-1", "org-1", "Home");
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(mockAttendance);
    });

    test("should handle errors during check out", async () => {
      (attendanceService.checkOut as jest.Mock).mockRejectedValue(new Error("Not checked in"));

      await checkOutEmployee(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({ error: "Not checked in" });
    });
  });

  describe("getTodayStatus", () => {
    test("should return attendance if checked in", async () => {
      const mockAttendance = { att_id: "1", status: "present" };
      (attendanceService.getTodayAttendance as jest.Mock).mockResolvedValue(mockAttendance);

      await getTodayStatus(req as Request, res as Response);

      expect(attendanceService.getTodayAttendance).toHaveBeenCalledWith("emp-1", "org-1");
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(mockAttendance);
    });

    test("should return message if not checked in", async () => {
      (attendanceService.getTodayAttendance as jest.Mock).mockResolvedValue(null);

      await getTodayStatus(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith({ message: "Not checked in today" });
    });
  });

  describe("getOrganizationAttendanceHistory", () => {
    test("should return attendance history", async () => {
      const mockHistory = [{ att_id: "1", status: "present" }];
      (attendanceService.getOrganizationAttendance as jest.Mock).mockResolvedValue(mockHistory);
      req.query = { startDate: "2023-01-01", endDate: "2023-01-31" };

      await getOrganizationAttendanceHistory(req as Request, res as Response);

      expect(attendanceService.getOrganizationAttendance).toHaveBeenCalled();
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(mockHistory);
    });

    test("should return 400 if dates are missing", async () => {
      req.query = {};
      await getOrganizationAttendanceHistory(req as Request, res as Response);
      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({ error: "Start date and end date are required" });
    });
  });

  describe("getMyWeeklyAttendance", () => {
    test("should return weekly attendance", async () => {
      const mockWeekly = [{ att_id: "1", status: "present" }];
      (attendanceService.getEmployeeWeeklyAttendance as jest.Mock).mockResolvedValue(mockWeekly);

      await getMyWeeklyAttendance(req as Request, res as Response);

      expect(attendanceService.getEmployeeWeeklyAttendance).toHaveBeenCalled();
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(mockWeekly);
    });

    test("should handle invalid date", async () => {
      req.query = { date: "invalid-date" };
      await getMyWeeklyAttendance(req as Request, res as Response);
      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({ error: "Invalid date format" });
    });
  });
});
