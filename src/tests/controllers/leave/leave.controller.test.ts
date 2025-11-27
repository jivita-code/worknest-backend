import type { Request, Response } from "express";

jest.mock("../../../services/leave.service", () => ({
  createLeaveRequest: jest.fn(),
  getLeavesForEmployee: jest.fn(),
  deleteLeaveRequest: jest.fn(),
}));
import * as leaveService from "../../../services/leave.service.js";

import { createLeave, getMyLeaves, deleteLeave } from "../../../controllers/leave.controller.js";

describe("Leave Controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    req = { user: { emp_id: "emp-1", org_id: "org-1" }, body: {}, params: {} };
    res = { status: statusMock };
    (leaveService.createLeaveRequest as jest.Mock).mockReset();
    (leaveService.getLeavesForEmployee as jest.Mock).mockReset();
    
    (leaveService.deleteLeaveRequest as jest.Mock).mockReset();
  });

  test("createLeave - success", async () => {
    const mockLeave = { leave_id: "l1", status: "pending" };
    (leaveService.createLeaveRequest as jest.Mock).mockResolvedValue(mockLeave);
    req.body = { leave_type: "annual", start_date: "2025-12-01", end_date: "2025-12-02", attachments: "http://a.com/x.png" };

    await createLeave(req as Request, res as Response);

    expect(leaveService.createLeaveRequest).toHaveBeenCalled();
    expect(statusMock).toHaveBeenCalledWith(201);
    expect(jsonMock).toHaveBeenCalledWith(mockLeave);
  });

  test("createLeave - validation error", async () => {
    req.body = { start_date: "2025-12-01" };
    await createLeave(req as Request, res as Response);
    expect(statusMock).toHaveBeenCalledWith(400);
  });

  test("getMyLeaves - returns list", async () => {
    const mockLeaves = [{ leave_id: "l1", attachments: JSON.stringify(["a.png"]) }];
    (leaveService.getLeavesForEmployee as jest.Mock).mockResolvedValue(mockLeaves);

    await getMyLeaves(req as Request, res as Response);

    expect(leaveService.getLeavesForEmployee).toHaveBeenCalledWith("org-1", "emp-1");
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith([{ ...mockLeaves[0], attachments: ["a.png"] }]);
  });

  

  test("deleteLeave - success", async () => {
    (leaveService.deleteLeaveRequest as jest.Mock).mockResolvedValue({ success: true });
    req.params = { leave_id: "l1" };

    await deleteLeave(req as Request, res as Response);

    expect(leaveService.deleteLeaveRequest).toHaveBeenCalledWith("l1", "org-1", "emp-1");
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({ success: true });
  });
});
