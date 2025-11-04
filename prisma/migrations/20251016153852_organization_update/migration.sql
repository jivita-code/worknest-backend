/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `features` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `plans` will be added. If there are existing duplicate values, this will fail.
  - Made the column `org_id` on table `subscriptions` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."subscriptions" DROP CONSTRAINT "subscriptions_org_id_fkey";

-- AlterTable
ALTER TABLE "subscriptions" ALTER COLUMN "org_id" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "features_name_key" ON "features"("name");

-- CreateIndex
CREATE UNIQUE INDEX "plans_name_key" ON "plans"("name");

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organizations"("org_id") ON DELETE RESTRICT ON UPDATE CASCADE;
