**Employee Attendance Summary (Org)**

- **Endpoint:** `GET /api/attendance/org/employee/:emp_id/summary`
- **Auth:** Organization token required (JWT containing `org_id`).
- **Purpose:** Returns a compact attendance summary for a single employee over a date range (defaults to year-to-date).

**Query Parameters:**
- **`year`**: optional numeric year (e.g. `2025`). If present and no `startDate`/`endDate` provided, the period will be Jan 1 → now (or Dec 31 if you prefer explicit end).
- **`startDate`**: optional ISO date `YYYY-MM-DD`. If provided, it overrides `year` start.
- **`endDate`**: optional ISO date `YYYY-MM-DD`. If provided, it overrides `year` end. If omitted, server uses current date/time as end.

**Response Shape:**
- **`emp_id`**: employee UUID.
- **`periodStart`**: `YYYY-MM-DD` (inclusive).
- **`periodEnd`**: `YYYY-MM-DD` (inclusive).
- **`totalPresent`**: number of days counted as present.
- **`totalOnLeave`**: number of days counted as on leave.
- **`totalAbsent`**: number of days counted as absent (computed as described below).

Example response:

```
{
  "emp_id": "b3c9f6f8-...",
  "periodStart": "2025-01-01",
  "periodEnd": "2025-11-29",
  "totalPresent": 200,
  "totalOnLeave": 10,
  "totalAbsent": 155
}
```

**Counting rules & implementation notes**
- **One-day-per-day:** If there are multiple attendance records for the same employee on the same calendar day (e.g., multiple check-ins/check-outs), the service first groups records by the calendar day (`YYYY-MM-DD`) and then counts at most one status per day.
- **Status priority (per day):** If multiple statuses exist for the same day, the resolved daily status uses this priority: `present` > `on_leave` > `absent`. Example: a day with any `present` record is counted as `present` even if there is also an `on_leave` record.
- **Absent calculation:** `totalAbsent = totalDaysInPeriod - (totalPresent + totalOnLeave)`. `totalDaysInPeriod` is the inclusive calendar day count between `periodStart` and `periodEnd`. The result is clamped to zero (never negative).
- **Date fields:** `periodStart`/`periodEnd` and grouping use date-only values (server normalizes to the date part, `YYYY-MM-DD`). Timezones are handled by the server when converting stored `date` values to ISO date strings.

**Authorization / errors**
- `401` if authorization header missing or token invalid.
- `403` if the provided org token does not have permission for the requested employee.
- `400` for invalid query parameters (bad date format).

**Example cURL**

```
curl -H "Authorization: Bearer <ORG_TOKEN>" "https://api.example.com/api/attendance/org/employee/<EMP_ID>/summary?year=2025"
```

**Notes & follow-ups**
- Current implementation counts calendar days (including weekends). If you want `totalAbsent` to ignore weekends or public holidays (i.e., count only working days), I can add an option to filter the period or implement a workday-aware calculation.
- If you want a month-by-month breakdown or per-day list in addition to the summary, I can extend the controller to include a `breakdown` array.
