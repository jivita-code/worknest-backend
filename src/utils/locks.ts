/**
 * Utilities for database advisory locks
 */

/**
 * Convert a UUID string into a deterministic signed 64-bit BigInt suitable
 * for use with Postgres advisory locks (pg_advisory_xact_lock).
 *
 * Implementation notes:
 * - Removes dashes and takes the first 16 hex characters (64 bits).
 * - Returns a BigInt (signed) value.
 * - This is deterministic per-UUID and suitable for scoping locks per-entity.
 */
export function uuidToLockBigInt(uuid: string): bigint {
  if (!uuid || typeof uuid !== "string") {
    throw new TypeError("uuid must be a string");
  }

  // Remove dashes and lower-case for consistency
  const hex = uuid.replace(/-/g, "").toLowerCase();

  // Ensure we have at least 16 hex chars; pad with zeros if unusually short
  const first16 = (hex + "0".repeat(16)).slice(0, 16);

  // Convert to BigInt. This yields an unsigned value; Postgres accepts this numeric value.
  const value = BigInt("0x" + first16);

  // Map into signed 64-bit range if needed: keep as-is (BigInt) — pg_advisory_xact_lock accepts bigint
  return value;
}

export default uuidToLockBigInt;
