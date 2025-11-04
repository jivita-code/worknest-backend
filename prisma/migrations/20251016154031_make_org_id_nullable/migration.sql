-- DropForeignKey
ALTER TABLE "public"."subscriptions" DROP CONSTRAINT "subscriptions_org_id_fkey";

-- AlterTable
ALTER TABLE "subscriptions" ALTER COLUMN "org_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organizations"("org_id") ON DELETE SET NULL ON UPDATE CASCADE;
