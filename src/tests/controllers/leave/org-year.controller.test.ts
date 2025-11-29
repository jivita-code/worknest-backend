import type { Request, Response } from "express";

jest.mock("../../../services/leave.service", () => ({
  getOrganizationLeavesForYear: jest.fn(),
}));
import * as leaveService from "../../../services/leave.service.js";

import { getOrganizationLeavesYear } from "../../../controllers/leave.controller.js";

describe("Leave Controller - Org Year", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    req = { user: { org_id: "org-1" }, query: {} };
    res = { status: statusMock };
    (leaveService.getOrganizationLeavesForYear as jest.Mock).mockReset();
  });

  test("returns grouped leaves for current year", async () => {
    const mock = [
      { employee: { emp_id: "e1", first_name: "A" }, leaves: [{ leave_id: "l1" }] },
    ];
    (leaveService.getOrganizationLeavesForYear as jest.Mock).mockResolvedValue(mock);

    await getOrganizationLeavesYear(req as Request, res as Response);

    expect(leaveService.getOrganizationLeavesForYear).toHaveBeenCalledWith("org-1", undefined);
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(mock);
  });

  test("validates year param", async () => {
    req.query = { year: "not-a-number" };
    await getOrganizationLeavesYear(req as Request, res as Response);
    expect(statusMock).toHaveBeenCalledWith(400);
  });
});
