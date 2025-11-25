# WorkNest Backend API Documentation

## Attendance Endpoints

### Base URL
- Local development: `http://localhost:5000`
- All routes require: `Authorization: Bearer <your_jwt_token>` (token must include `emp_id` and `org_id`).

---

### 1. Check-In Endpoint
**Endpoint:** `POST /api/attendance/check-in`  
**Purpose:** Record a new check-in session for the authenticated employee. If the employee is already checked in (open session), it prevents a new check-in. Otherwise, creates a new session.

**Headers:**
- `Authorization: Bearer <your_jwt_token>`
- `Content-Type: application/json`

**Request Body (JSON, optional):**
```json
{
  "location": "Office"  // Optional string for check-in location
}
```

**Success Response (201 Created):**
```json
{
  "att_id": "uuid",
  "org_id": "org-uuid",
  "emp_id": "emp-uuid",
  "date": "2025-11-22T00:00:00.000Z",
  "check_in_time": "2025-11-22T08:30:00.000Z",
  "check_in_location": "Office",
  "status": "present",
  "created_at": "2025-11-22T08:30:00.000Z",
  "update_at": "2025-11-22T08:30:00.000Z"
}
```

**Error Responses:**
- **400 Bad Request** (Already checked in): `{ "error": "Employee already checked in" }`
- **500 Internal Server Error** (Server issues): `{ "error": "Internal server error" }`

**Example cURL:**
```bash
curl -X POST http://localhost:5000/api/attendance/check-in \
  -H "Authorization: Bearer <your_jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{ "location": "Office" }'
```

---

### 2. Check-Out Endpoint
**Endpoint:** `POST /api/attendance/check-out`  
**Purpose:** Record check-out for the latest open session of the authenticated employee. Calculates `work_hours` for that session. If no open session exists, it prevents check-out.

**Headers:**
- `Authorization: Bearer <your_jwt_token>`
- `Content-Type: application/json`

**Request Body (JSON, optional):**
```json
{
  "location": "Home"  // Optional string for check-out location
}
```

**Success Response (200 OK):**
```json
{
  "att_id": "uuid",
  "org_id": "org-uuid",
  "emp_id": "emp-uuid",
  "date": "2025-11-22T00:00:00.000Z",
  "check_in_time": "2025-11-22T08:30:00.000Z",
  "check_out_time": "2025-11-22T17:30:00.000Z",
  "check_in_location": "Office",
  "check_out_location": "Home",
  "work_hours": 9.0,
  "status": "present",
  "created_at": "2025-11-22T08:30:00.000Z",
  "update_at": "2025-11-22T17:30:00.000Z"
}
```

**Error Responses:**
- **400 Bad Request** (No check-in or already checked out): `{ "error": "No check-in record found for today" }` or `{ "error": "Employee already checked out" }`
- **500 Internal Server Error** (Server issues): `{ "error": "Internal server error" }`

**Example cURL:**
```bash
curl -X POST http://localhost:5000/api/attendance/check-out \
  -H "Authorization: Bearer <your_jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{ "location": "Home" }'
```

---

### Notes
- **Multiple Sessions:** Employees can check in/out multiple times per day (e.g., morning/afternoon shifts). Each check-in creates a new record; check-out updates the latest open one.
- **Time Handling:** All times are in UTC (ISO 8601 format). `work_hours` is calculated per session (rounded to 2 decimals).
- **Authentication:** Use `/auth/login` to get a token. The token must be valid and contain the employee's `emp_id` and `org_id`.
- **Testing:** Use Postman or cURL. For full day status, call `GET /api/attendance/today` (returns an array of all sessions).
