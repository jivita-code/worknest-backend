// Petty Cash Controller
import type { Request, Response } from "express";
import { createPettyCashRequest, getPettyCashForEmployeeForYear, deletePettyCashRequest } from "../services/petty-cash.service.js";

const parseAttachments = (input: any): string[] | undefined => {
  if (!input) return undefined;
  if (Array.isArray(input)) return input.map(String).map(s => s.trim()).filter(Boolean);
  if (typeof input === 'string') {
    return input.split(',').map(s => s.trim()).filter(Boolean);
  }
  return undefined;
};

export const createPettyCash = async (req: Request, res: Response) => {
  try {
    const { emp_id, org_id } = (req as any).user;
    const { amount, currency, request_date, request_type, reason } = req.body;
    const attachments = parseAttachments(req.body.attachments);

    if (!amount || !request_type) {
      return res.status(400).json({ error: "amount and request_type are required" });
    }

    const created = await createPettyCashRequest(org_id, emp_id, { amount, currency, request_date, request_type, reason, attachments });
    res.status(201).json(created);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getMyPettyCash = async (req: Request, res: Response) => {
  try {
    const { emp_id, org_id } = (req as any).user;
    const { year } = req.query;
    const y = year ? parseInt(year as string, 10) : undefined;
    if (year && (isNaN(y!) || y! < 1970)) {
      return res.status(400).json({ error: "Invalid year" });
    }

    const records = await getPettyCashForEmployeeForYear(org_id, emp_id, y);
    const mapped = records.map(r => ({ ...r, attachments: r.attachments ? JSON.parse(r.attachments) : [] }));
    res.status(200).json(mapped);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePettyCash = async (req: Request, res: Response) => {
  try {
    const { emp_id, org_id } = (req as any).user;
    const { pet_id } = req.params;
    const result = await deletePettyCashRequest(pet_id, org_id, emp_id);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
