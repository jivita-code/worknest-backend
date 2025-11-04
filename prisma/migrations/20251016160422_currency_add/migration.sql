/*
  Warnings:

  - Added the required column `currency` to the `petty_cash_requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `plans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "petty_cash_requests" ADD COLUMN     "currency" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "plans" ADD COLUMN     "currency" TEXT NOT NULL;
