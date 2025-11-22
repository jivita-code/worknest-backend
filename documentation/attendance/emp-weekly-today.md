# Employee Today and Weekly Attendance Routes

## Base URL
- Local development: `http://localhost:5000`
- All routes require: `Authorization: Bearer <your_jwt_token>` (token must include `emp_id` and `org_id`).

---

### 1. Get Today's Attendance Endpoint
**Endpoint:** `GET /api/attendance/today`  
**Purpose:** Retrieve all attendance records for the authenticated employee for the current day. Returns an array of sessions (supports multiple check-in/check-out per day).

**Headers:**
- `Authorization: Bearer <your_jwt_token>`

**Query Parameters:** None

**Success Response (200 OK):**
```json
[
  {
    "att_id": "uuid-1",
    "org_id": "org-uuid",
    "emp_id": "emp-uuid",
    "date": "2025-11-22T00:00:00.000Z",
    "check_in_time": "2025-11-22T08:30:00.000Z",
    "check_out_time": "2025-11-22T12:00:00.000Z",
    "check_in_location": "Office",
    "check_out_location": "Cafeteria",
    "work_hours": 3.5,
    "status": "present",
    "created_at": "2025-11-22T08:30:00.000Z",
    "update_at": "2025-11-22T12:00:00.000Z"
  },
  {
    "att_id": "uuid-2",
    "org_id": "org-uuid",
    "emp_id": "emp-uuid",
    "date": "2025-11-22T00:00:00.000Z",
    "check_in_time": "2025-11-22T13:00:00.000Z",
    "check_out_time": null,
    "check_in_location": "Office",
    "check_out_location": null,
    "work_hours": null,
    "status": "present",
    "created_at": "2025-11-22T13:00:00.000Z",
    "update_at": "2025-11-22T13:00:00.000Z"
  }
]
```

**Notes on Response:**
- Returns an empty array `[]` if no records exist for the day.
- Records are ordered by `created_at` ascending (chronological order).
- `work_hours` is calculated per session; `null` if not checked out yet.

**Error Responses:**
- **500 Internal Server Error** (Server issues): `{ "error": "Internal server error" }`

**Example cURL:**
```bash
curl -X GET http://localhost:5000/api/attendance/today \
  -H "Authorization: Bearer <your_jwt_token>"
```

---

### 2. Get Weekly Attendance Endpoint
**Endpoint:** `GET /api/attendance/weekly`  
**Purpose:** Retrieve all attendance records for the authenticated employee for the current week (Monday to Sunday). Returns an array of sessions across the week.

**Headers:**
- `Authorization: Bearer <your_jwt_token>`

**Query Parameters:**
- `date` (optional): A date string (e.g., `2023-11-22`) to specify which week to retrieve. If omitted, uses the current date's week.

**Success Response (200 OK):**
```json
[
  {
    "att_id": "uuid-1",
    "org_id": "org-uuid",
    "emp_id": "emp-uuid",
    "date": "2025-11-18T00:00:00.000Z",  // Monday
    "check_in_time": "2025-11-18T08:30:00.000Z",
    "check_out_time": "2025-11-18T17:00:00.000Z",
    "work_hours": 8.5,
    "status": "present",
    "created_at": "2025-11-18T08:30:00.000Z",
    "update_at": "2025-11-18T17:00:00.000Z"
  },
  {
    "att_id": "uuid-2",
    "org_id": "org-uuid",
    "emp_id": "emp-uuid",
    "date": "2025-11-19T00:00:00.000Z",  // Tuesday
    "check_in_time": "2025-11-19T09:00:00.000Z",
    "check_out_time": null,
    "work_hours": null,
    "status": "present",
    "created_at": "2025-11-19T09:00:00.000Z",
    "update_at": "2025-11-19T09:00:00.000Z"
  }
]
```

**Notes on Response:**
- Returns an empty array `[]` if no records exist for the week.
- Records are ordered by `date` ascending, then by `created_at` ascending (chronological within each day).
- Week calculation: Starts on Monday, ends on Sunday.

**Error Responses:**
- **400 Bad Request** (Invalid date): `{ "error": "Invalid date format" }`
- **500 Internal Server Error** (Server issues): `{ "error": "Internal server error" }`

**Example cURL:**
```bash
# Get current week's attendance
curl -X GET http://localhost:5000/api/attendance/weekly \
  -H "Authorization: Bearer <your_jwt_token>"

# Get attendance for the week containing Nov 1, 2023
curl -X GET "http://localhost:5000/api/attendance/weekly?date=2023-11-01" \
  -H "Authorization: Bearer <your_jwt_token>"
```

---

### Notes
- **Multiple Sessions:** Both endpoints return arrays to support multiple check-in/check-out sessions per day/week.
- **Time Handling:** All times are in UTC (ISO 8601 format). Dates are normalized to midnight.
- **Authentication:** Use `/auth/login` to get a token. The token must be valid and contain the employee's `emp_id` and `org_id`.
- **Testing:** Use Postman or cURL. For organization-level history, use `GET /api/attendance/history` (requires org token).
