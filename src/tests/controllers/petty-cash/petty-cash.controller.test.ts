import type { Request, Response } from "express";

jest.mock("../../../services/petty-cash.service", () => ({
  createPettyCashRequest: jest.fn(),
  getPettyCashForEmployeeForYear: jest.fn(),
  deletePettyCashRequest: jest.fn(),
}));
import * as pettyService from "../../../services/petty-cash.service.js";

import { createPettyCash, getMyPettyCash, deletePettyCash } from "../../../controllers/petty-cash.controller.js";

describe("Petty Cash Controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    req = { user: { emp_id: "emp-1", org_id: "org-1" }, body: {}, params: {}, query: {} };
    res = { status: statusMock };
    (pettyService.createPettyCashRequest as jest.Mock).mockReset();
    (pettyService.getPettyCashForEmployeeForYear as jest.Mock).mockReset();
    (pettyService.deletePettyCashRequest as jest.Mock).mockReset();
  });

  test("createPettyCash - success", async () => {
    const mockCreated = { pet_id: "p1", status: "pending" };
    (pettyService.createPettyCashRequest as jest.Mock).mockResolvedValue(mockCreated);
    req.body = { amount: 1000, request_type: "meals", attachments: "a.png,b.png" };

    await createPettyCash(req as Request, res as Response);

    expect(pettyService.createPettyCashRequest).toHaveBeenCalledWith("org-1", "emp-1", expect.objectContaining({
      amount: 1000,
      request_type: "meals",
      attachments: ["a.png", "b.png"]
    }));
    expect(statusMock).toHaveBeenCalledWith(201);
    expect(jsonMock).toHaveBeenCalledWith(mockCreated);
  });

  test("createPettyCash - validation error", async () => {
    req.body = { request_type: "meals" }; // missing amount
    await createPettyCash(req as Request, res as Response);
    expect(statusMock).toHaveBeenCalledWith(400);
  });

  test("getMyPettyCash - returns list with parsed attachments", async () => {
    const mockRecords = [{ pet_id: "p1", attachments: JSON.stringify(["x.png"]) }];
    (pettyService.getPettyCashForEmployeeForYear as jest.Mock).mockResolvedValue(mockRecords);

    await getMyPettyCash(req as Request, res as Response);

    expect(pettyService.getPettyCashForEmployeeForYear).toHaveBeenCalledWith("org-1", "emp-1", undefined);
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith([{ ...mockRecords[0], attachments: ["x.png"] }]);
  });

  test("getMyPettyCash - invalid year param", async () => {
    req.query = { year: "not-a-number" } as any;
    await getMyPettyCash(req as Request, res as Response);
    expect(statusMock).toHaveBeenCalledWith(400);
  });

  test("deletePettyCash - success", async () => {
    (pettyService.deletePettyCashRequest as jest.Mock).mockResolvedValue({ success: true });
    req.params = { pet_id: "p1" } as any;

    await deletePettyCash(req as Request, res as Response);

    expect(pettyService.deletePettyCashRequest).toHaveBeenCalledWith("p1", "org-1", "emp-1");
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({ success: true });
  });

});
