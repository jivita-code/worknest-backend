// Leave Controller
import type { Request, Response } from "express";
import { createLeaveRequest, getLeavesForEmployeeForYear, deleteLeaveRequest } from "../services/leave.service.js";
import { getOrganizationLeavesForYear } from "../services/leave.service.js";
import { decisionOnLeaveRequest } from "../services/leave.service.js";

const parseAttachments = (input: any): string[] | undefined => {
  if (!input) return undefined;
  if (Array.isArray(input)) return input.map(String).map(s => s.trim()).filter(Boolean);
  if (typeof input === 'string') {
    return input.split(',').map(s => s.trim()).filter(Boolean);
  }
  return undefined;
};

export const createLeave = async (req: Request, res: Response) => {
  try {
    const { emp_id, org_id } = (req as any).user;
    const { leave_type, start_date, end_date, reason } = req.body;
    const attachments = parseAttachments(req.body.attachments);

    if (!leave_type || !start_date || !end_date) {
      return res.status(400).json({ error: "leave_type, start_date and end_date are required" });
    }

    const created = await createLeaveRequest(org_id, emp_id, { leave_type, start_date, end_date, reason, attachments });
    res.status(201).json(created);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getMyLeaves = async (req: Request, res: Response) => {
  try {
    const { emp_id, org_id } = (req as any).user;
    // Return only current year's leaves for the employee
    const leaves = await getLeavesForEmployeeForYear(org_id, emp_id);
    const mapped = leaves.map(l => ({
      ...l,
      attachments: l.attachments ? JSON.parse(l.attachments) : [],
    }));
    res.status(200).json(mapped);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Update endpoint removed by request

export const deleteLeave = async (req: Request, res: Response) => {
  try {
    const { emp_id, org_id } = (req as any).user;
    const { leave_id } = req.params;
    const result = await deleteLeaveRequest(leave_id, org_id, emp_id);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getOrganizationLeavesYear = async (req: Request, res: Response) => {
  try {
    const { org_id } = (req as any).user;
    const { year } = req.query;
    const y = year ? parseInt(year as string, 10) : undefined;
    if (year && (isNaN(y!) || y! < 1970)) {
      return res.status(400).json({ error: "Invalid year" });
    }

    const result = await getOrganizationLeavesForYear(org_id, y);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const decisionOnLeave = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user || {};
    // Organization token should contain `org_id` and act as the decision maker.
    const { org_id } = user;
    if (!org_id) {
      return res.status(403).json({ error: "Forbidden: organization token required" });
    }

    const { leave_id } = req.params;
    const { action } = req.body;
    if (!leave_id || !action || !["approve", "reject"].includes(action)) {
      return res.status(400).json({ error: "leave_id and action ('approve'|'reject') are required" });
    }

    // Use org_id as the approver identifier when the organization is the decision maker
    const result = await decisionOnLeaveRequest(leave_id, org_id, org_id, action);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
