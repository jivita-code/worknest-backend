import type { Request, Response } from "express";

jest.mock("../../../services/leave.service", () => ({
  createLeaveRequest: jest.fn(),
  getLeavesForEmployee: jest.fn(),
  getLeavesForEmployeeForYear: jest.fn(),
  deleteLeaveRequest: jest.fn(),
  decisionOnLeaveRequest: jest.fn(),
}));
import * as leaveService from "../../../services/leave.service.js";

import { decisionOnLeave } from "../../../controllers/leave.controller.js";

describe("Leave decision controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    req = { user: { org_id: "org-1" }, body: {}, params: {} };
    res = { status: statusMock };
    (leaveService.decisionOnLeaveRequest as jest.Mock).mockReset();
  });

  test("approve - success", async () => {
    const updated = { leave_id: "l1", status: "approved", approved_by: "org-1" };
    (leaveService.decisionOnLeaveRequest as jest.Mock).mockResolvedValue(updated);
    req.params = { leave_id: "l1" };
    req.body = { action: "approve" };

    await decisionOnLeave(req as Request, res as Response);

    expect(leaveService.decisionOnLeaveRequest).toHaveBeenCalledWith("l1", "org-1", "org-1", "approve");
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(updated);
  });

  test("reject - success", async () => {
    const updated = { leave_id: "l2", status: "rejected", approved_by: "org-1" };
    (leaveService.decisionOnLeaveRequest as jest.Mock).mockResolvedValue(updated);
    req.params = { leave_id: "l2" };
    req.body = { action: "reject" };

    await decisionOnLeave(req as Request, res as Response);

    expect(leaveService.decisionOnLeaveRequest).toHaveBeenCalledWith("l2", "org-1", "org-1", "reject");
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(updated);
  });

  test("forbidden for non-admin", async () => {
    req.user = {} as any;
    req.params = { leave_id: "l3" };
    req.body = { action: "approve" };

    await decisionOnLeave(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(403);
  });

  test("bad request for missing action", async () => {
    req.params = { leave_id: "l3" };
    req.body = { };

    await decisionOnLeave(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(400);
  });
});
