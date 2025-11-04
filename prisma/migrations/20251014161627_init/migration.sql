-- CreateTable
CREATE TABLE "leave_requests" (
    "leave_id" UUID NOT NULL,
    "org_id" UUID NOT NULL,
    "emp_id" UUID NOT NULL,
    "leave_type" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "total_days" INTEGER NOT NULL,
    "reason" TEXT,
    "attachments" TEXT,
    "approved_by" UUID,
    "approved_date" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "leave_requests_pkey" PRIMARY KEY ("leave_id")
);

-- AddForeignKey
ALTER TABLE "leave_requests" ADD CONSTRAINT "leave_requests_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organizations"("org_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_requests" ADD CONSTRAINT "leave_requests_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employees"("emp_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_requests" ADD CONSTRAINT "leave_requests_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "employees"("emp_id") ON DELETE SET NULL ON UPDATE CASCADE;
