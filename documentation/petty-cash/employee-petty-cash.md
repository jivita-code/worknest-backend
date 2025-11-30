**Petty Cash Requests (Employee)**

- **Base path:** `GET/POST/DELETE /api/petty-cash`
- **Auth:** Employee token required for create/delete and for retrieving own requests. Organization tokens are not required for these employee endpoints.

Endpoints

- **Create petty cash request**
  - **Method:** `POST`
  - **Path:** `/api/petty-cash`
  - **Description:** Create a new petty cash request for the authenticated employee. The request will be created with `status: "pending"`.
  - **Body (JSON):**
    - `amount` (number, required) — positive amount requested.
    - `currency` (string, optional) — e.g. `LKR`, `USD`. Defaults to `LKR` when omitted.
    - `request_type` (string, required) — one of: `advance`, `meals`, `accommodation`, `other`.
    - `request_date` (ISO datetime string, optional) — if omitted, server uses current time.
    - `reason` (string, optional)
    - `attachments` (array of strings OR comma-separated string, optional) — list of URLs or identifiers for attached receipts/docs. The controller accepts either an array or a comma-separated string.

  - **Example body (minimal):**

  ```json
  {
    "amount": 1500.0,
    "currency": "LKR",
    "request_type": "meals"
  }
  ```

  - **Example body (full):**

  ```json
  {
    "amount": 45.5,
    "currency": "USD",
    "request_type": "advance",
    "request_date": "2025-11-30T10:00:00.000Z",
    "reason": "Travel advance for client meeting",
    "attachments": ["https://cdn.example.com/receipts/1.jpg"]
  }
  ```

  - **Success response:** `201 Created` with the created record (fields include `pet_id`, `org_id`, `emp_id`, `amount`, `currency`, `request_date`, `request_type`, `reason`, `attachments`, `status`, `approved_by`, `approved_date`, timestamps).

- **Get employee petty cash requests (current year)**
  - **Method:** `GET`
  - **Path:** `/api/petty-cash/my`
  - **Description:** Returns petty cash requests for the authenticated employee that overlap the given year (defaults to the current year if `year` is not provided).
  - **Query params:** `year` (optional integer) — if provided, returns requests that overlap that calendar year.
  - **Example:** `GET /api/petty-cash/my?year=2025`
  - **Success response:** `200 OK` with an array of request objects. Each object's `attachments` field will be parsed into an array (or empty array) by the controller.

- **Delete petty cash request (pending only)**
  - **Method:** `DELETE`
  - **Path:** `/api/petty-cash/:pet_id`
  - **Description:** Delete a petty cash request created by the authenticated employee. Only requests with `status === "pending"` can be deleted.
  - **Success response:** `200 OK` with `{ "success": true }`.

Validation & Errors

- `400 Bad Request` for malformed input (e.g., missing `amount` or `request_type`, invalid `request_date`, invalid `year` query param).
- `401 Unauthorized` when auth header missing/invalid.
- `403 Forbidden` when attempting to delete or access a request that does not belong to the authenticated employee.
- `404 Not Found` when `pet_id` does not exist.
- `400` with message when trying to delete a request that is not `pending`.

Notes & Implementation details

- Attachments: the controller accepts either an array (`["a.png","b.jpg"]`) or a comma-separated string (`"a.png,b.jpg"`). Internally attachments are stored as a JSON string in the DB; the controller returns them parsed as an array.
- `request_date` is stored as a `DateTime`; when omitted the server uses the current time.
- `approved_by` and `approved_date` are `null` until an approver acts. Approvers are employees (FK) or the organization may act (in which case `approved_by` is left `null` by design).
- `status` flow: `pending` → `approved` | `rejected`.

Example cURL (create):

```bash
curl -X POST "https://api.example.com/api/petty-cash" \
  -H "Authorization: Bearer <EMPLOYEE_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"amount":1200,"currency":"LKR","request_type":"other","reason":"Office supplies","attachments":"https://a.com/x.png,https://b.com/y.jpg"}'
```
