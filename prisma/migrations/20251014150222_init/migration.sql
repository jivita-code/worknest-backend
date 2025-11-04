/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employment_type` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `org_id` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "designation" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "employment_type" TEXT NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "join_date" TIMESTAMP(3),
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "org_id" UUID NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "profile_photo_url" TEXT,
ADD COLUMN     "resign_date" TIMESTAMP(3),
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "_DepartmentToEmployee" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_DepartmentToEmployee_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_EmployeeToPlatformAccess" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_EmployeeToPlatformAccess_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_DepartmentToEmployee_B_index" ON "_DepartmentToEmployee"("B");

-- CreateIndex
CREATE INDEX "_EmployeeToPlatformAccess_B_index" ON "_EmployeeToPlatformAccess"("B");

-- CreateIndex
CREATE UNIQUE INDEX "employees_email_key" ON "employees"("email");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organizations"("org_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentToEmployee" ADD CONSTRAINT "_DepartmentToEmployee_A_fkey" FOREIGN KEY ("A") REFERENCES "departments"("dep_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentToEmployee" ADD CONSTRAINT "_DepartmentToEmployee_B_fkey" FOREIGN KEY ("B") REFERENCES "employees"("emp_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToPlatformAccess" ADD CONSTRAINT "_EmployeeToPlatformAccess_A_fkey" FOREIGN KEY ("A") REFERENCES "employees"("emp_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToPlatformAccess" ADD CONSTRAINT "_EmployeeToPlatformAccess_B_fkey" FOREIGN KEY ("B") REFERENCES "platform_access"("acc_id") ON DELETE CASCADE ON UPDATE CASCADE;
