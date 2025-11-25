# Organization Attendance History Route

## Base URL
- Local development: `http://localhost:5000`
- All routes require: `Authorization: Bearer <your_jwt_token>` (token must include `org_id` for organization-level access).

---

### Get Organization Attendance History Endpoint
**Endpoint:** `GET /api/attendance/history`  
**Purpose:** Retrieve attendance records for all employees in the organization within a specified date range. Records are grouped by employee for easier processing.

**Headers:**
- `Authorization: Bearer <your_jwt_token>`

**Query Parameters:**
- `startDate`: Start date in `YYYY-MM-DD` format (required).
- `endDate`: End date in `YYYY-MM-DD` format (required).

**Success Response (200 OK):**
```json
{
  "2025-11-22": {
    "emp-1": {
      "employee": {
        "first_name": "John",
        "last_name": "Doe",
        "employee_number": "EMP001",
        "designation": "Software Engineer",
        "profile_photo_url": "https://example.com/photo.jpg",
        "department": {
          "dep_id": "dep-123",
          "name": "Engineering"
        }
      },
      "attendances": [
        {
          "att_id": "uuid-1",
          "org_id": "org-uuid",
          "emp_id": "emp-1",
          "date": "2025-11-22T00:00:00.000Z",
          "check_in_time": "2025-11-22T08:30:00.000Z",
          "check_out_time": "2025-11-22T17:00:00.000Z",
          "check_in_location": "Office",
          "check_out_location": "Home",
          "work_hours": 8.5,
          "status": "present",
          "created_at": "2025-11-22T08:30:00.000Z",
          "update_at": "2025-11-22T17:00:00.000Z"
        }
      ]
    },
    "emp-2": {
      "employee": {
        "first_name": "Jane",
        "last_name": "Smith",
        "employee_number": "EMP002",
        "designation": "Designer",
        "profile_photo_url": null,
        "department": {
          "dep_id": "dep-456",
          "name": "Design"
        }
      },
      "attendances": [
        {
          "att_id": "uuid-2",
          "org_id": "org-uuid",
          "emp_id": "emp-2",
          "date": "2025-11-22T00:00:00.000Z",
          "check_in_time": "2025-11-22T09:00:00.000Z",
          "check_out_time": null,
          "check_in_location": "Office",
          "check_out_location": null,
          "work_hours": null,
          "status": "present",
          "created_at": "2025-11-22T09:00:00.000Z",
          "update_at": "2025-11-22T09:00:00.000Z"
        }
      ]
    }
  },
  "2025-11-23": {
    // Similar structure for other days
  }
}
```

**Notes on Response:**
- Top-level hierarchy: **date (YYYY-MM-DD) > employee (emp_id) > records**.
- Each date key contains employee entries keyed by `emp_id`. Each employee entry includes `employee` (basic info + `department`) and `attendances` (array of records for that day).
- `department` is included under each `employee` with `dep_id` and `name`.
- Attendances are ordered by date descending at the top level and by creation time within each day.
- If no records exist, returns an empty object `{}`.

**Error Responses:**
- **400 Bad Request** (Missing dates): `{ "error": "Start date and end date are required" }`
- **400 Bad Request** (Invalid dates): `{ "error": "Invalid date format" }`
- **500 Internal Server Error** (Server issues): `{ "error": "Internal server error" }`

**Example cURL:**
```bash
curl -X GET "http://localhost:5000/api/attendance/history?startDate=2023-11-01&endDate=2023-11-30" \
  -H "Authorization: Bearer <your_jwt_token>"
```

---

### Notes
- **Grouping:** Records are grouped by employee to avoid duplication and make frontend processing easier.
- **Time Handling:** All times are in UTC (ISO 8601 format). Dates are normalized to include full days.
- **Authentication:** Use `/auth/login` to get a token. The token must be valid and contain the `org_id`.
- **Testing:** Use Postman or cURL. For employee-specific views, use `/api/attendance/today` or `/api/attendance/weekly`.