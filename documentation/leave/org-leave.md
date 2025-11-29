# Organization Leave Endpoints

Base path: `/api/leave`

This document describes the organization-level leave endpoints: listing leaves for the org (grouped by employee) and making approval decisions on behalf of the organization.

---

**GET /api/leave/org?year=<year> — Organization leave requests (grouped by employee)**

- Summary: Return all leave requests for the organization (optionally for a specific year), grouped by employee. The endpoint is intended for organization-level tokens (the auth middleware must attach `{ org_id }` on `req.user`).
- Auth: required (organization token).
- Method / Path: `GET /api/leave/org` (optional query param `year`)
  - Example: `GET /api/leave/org?year=2025`
- Query params:
  - `year` (integer, optional) — if omitted the current year is used.

- Success response (200 OK) — grouped by employee

```json
[
  {
    "employee": {
      "emp_id": "string",
      "first_name": "string",
      "last_name": "string",
      "employee_number": "string",
      "designation": "string|null",
      "profile_photo_url": "string|null"
    },
    "leaves": [
      {
        "leave_id": "string",
        "org_id": "string",
        "emp_id": "string",
        "leave_type": "annual",
        "start_date": "2025-12-01T00:00:00.000Z",
        "end_date": "2025-12-02T00:00:00.000Z",
        "reason": "string|null",
        "attachments": ["https://..."],
        "approved_by": null,
        "approved_date": null,
        "status": "pending",
        "created_at": "2025-11-01T12:00:00.000Z",
        "update_at": "2025-11-01T12:00:00.000Z"
      }
    ]
  }
]
```

Notes:
- `attachments` returned as an array; the backend accepts comma-separated string or array.
- `approved_by` may be `null` for decisions taken by the organization token (no employee approver recorded yet).

---

**PATCH /api/leave/:leave_id/decision — Organization decision (approve/reject)**

- Summary: Make an approval decision on a leave request on behalf of the organization.
- Auth: required (organization token). The token must include `org_id` in `req.user`.
- Method / Path: `PATCH /api/leave/:leave_id/decision`
- Request body (JSON):
  - `action` (string, required) — one of `approve` or `reject`.

- Success response (200 OK) — returns the updated leave object. Example when org approves:

```json
{
  "leave_id": "lv_12345",
  "org_id": "org-1",
  "emp_id": "emp-1",
  "status": "approved",
  "approved_by": null,
  "approved_date": "2025-11-29T12:34:56.789Z",
  "leave_type": "annual",
  "start_date": "2025-12-01T00:00:00.000Z",
  "end_date": "2025-12-02T00:00:00.000Z",
  "attachments": ["https://..."],
  "reason": "string|null"
}
```

- Error responses:
  - `400 Bad Request` — missing/invalid `action` or `leave_id`.
  - `403 Forbidden` — the provided token does not contain `org_id` (organization token required).
  - `400 Bad Request` — if the leave is not `pending` or does not belong to the organization (message explains reason).

Notes:
- When the organization takes the decision, `approved_by` will remain `null` because that field is a FK to an employee account. When admin/employees are later able to act via the admin dashboard, the system will set `approved_by` to the acting employee's `emp_id`.
- The endpoint sets `approved_date` to the current timestamp on decision.

---

Examples (cURL)

Approve:

```bash
curl -X PATCH "http://localhost:5000/api/leave/lv_12345/decision" \
  -H "Authorization: Bearer <ORG_JWT>" \
  -H "Content-Type: application/json" \
  -d '{"action":"approve"}'
```

Reject:

```bash
curl -X PATCH "http://localhost:5000/api/leave/lv_12345/decision" \
  -H "Authorization: Bearer <ORG_JWT>" \
  -H "Content-Type: application/json" \
  -d '{"action":"reject"}'
```

---

If you want I can also:
- add a Postman collection JSON you can import,
- include sample JWT payload used for testing, or
- add a migration plan to record organization decisions explicitly (e.g. `approved_by_org` field).
