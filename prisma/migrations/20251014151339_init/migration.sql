/*
  Warnings:

  - You are about to drop the `_DepartmentToEmployee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EmployeeToPlatformAccess` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[head_id]` on the table `departments` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."_DepartmentToEmployee" DROP CONSTRAINT "_DepartmentToEmployee_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_DepartmentToEmployee" DROP CONSTRAINT "_DepartmentToEmployee_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_EmployeeToPlatformAccess" DROP CONSTRAINT "_EmployeeToPlatformAccess_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_EmployeeToPlatformAccess" DROP CONSTRAINT "_EmployeeToPlatformAccess_B_fkey";

-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "acc_id" UUID,
ADD COLUMN     "dep_id" UUID;

-- DropTable
DROP TABLE "public"."_DepartmentToEmployee";

-- DropTable
DROP TABLE "public"."_EmployeeToPlatformAccess";

-- CreateIndex
CREATE UNIQUE INDEX "departments_head_id_key" ON "departments"("head_id");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_dep_id_fkey" FOREIGN KEY ("dep_id") REFERENCES "departments"("dep_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_acc_id_fkey" FOREIGN KEY ("acc_id") REFERENCES "platform_access"("acc_id") ON DELETE SET NULL ON UPDATE CASCADE;
