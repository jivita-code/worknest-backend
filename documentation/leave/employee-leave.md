Employee Leave Endpoints

Base path: `/api/leave`

Endpoints:

**POST /api/leave — Create leave request**

- **Summary**: Create a new leave request for the authenticated employee.
- **Auth**: required (middleware must attach `{ emp_id, org_id }` on `req.user`).
- **Method / Path**: `POST /api/leave`
- **Request body (JSON)**:
  - `leave_type` (string, required) — `annual` | `medical` | `casual` | `maternity`
  - `start_date` (ISO date string, required)
  - `end_date` (ISO date string, required)
  - `reason` (string, optional)
  - `attachments` (array, optional) — array of URLs. Example:  `[
    "https://a.com/x.png",  "..."
  ]`.

- **Success response (201 Created)** — returns created leave object

```json
{
  "leave_id": "string",
  "org_id": "string",
  "emp_id": "string",
  "leave_type": "string",
  "start_date": "2025-12-01T00:00:00.000Z",
  "end_date": "2025-12-02T00:00:00.000Z",
  "reason": "string|null",
  "attachments": ["https://...","https://..."] | null,
  "approved_by": null | "string",
  "approved_date": null | "2025-12-03T12:00:00.000Z",
  "status": "pending",
  "created_at": "2025-11-01T12:00:00.000Z",
  "update_at": "2025-11-01T12:00:00.000Z"
}
```

---

**GET /api/leave/my — Get my leave requests**

- **Summary**: Retrieve all leave requests for the authenticated employee (no time filtering).
- **Auth**: required.
- **Method / Path**: `GET /api/leave/my`
- **Success response (200 OK)** — array of leave objects

```json
[
  {
    "leave_id": "string",
    "leave_type": "annual",
    "start_date": "2025-12-01T00:00:00.000Z",
    "end_date": "2025-12-02T00:00:00.000Z",
    "reason": "string|null",
    "attachments": ["https://..."],
    "status": "pending",
    "created_at": "2025-11-01T12:00:00.000Z",
    "update_at": "2025-11-01T12:00:00.000Z"
  }
]
```

---

**DELETE /api/leave/:leave_id — Delete a leave request**

- **Summary**: Delete a leave request owned by the authenticated employee. Only allowed when `status === 'pending'`.
- **Auth**: required.
- **Method / Path**: `DELETE /api/leave/:leave_id`
- **Success response (200 OK)**

```json
{ "success": true }
```

---

**Error responses**

- Typical error shape (used for client or server errors):

```json
{ "error": "Human readable message" }
```

---

**Field notes / frontend guidance**
- `attachments`: controller accepts comma-separated string or array; the API stores this as a JSON-string in the database but **returns an array** (empty array when none).
- `status`: one of `pending` | `approved` | `rejected`. Frontend may use `status === 'pending'` to enable delete action.
- Date fields: ISO 8601 strings in UTC (convert to local timezone in the UI if needed).
- Overlap semantics: inclusive. New leaves are rejected when `new.start_date <= existing.end_date && new.end_date >= existing.start_date`.


