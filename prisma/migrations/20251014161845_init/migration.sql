-- CreateTable
CREATE TABLE "petty_cash_requests" (
    "pet_id" UUID NOT NULL,
    "org_id" UUID NOT NULL,
    "emp_id" UUID NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "reason" TEXT,
    "request_date" TIMESTAMP(3) NOT NULL,
    "total_days" INTEGER,
    "request_type" TEXT NOT NULL,
    "attachments" TEXT,
    "approved_date" TIMESTAMP(3),
    "approved_by" UUID,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "petty_cash_requests_pkey" PRIMARY KEY ("pet_id")
);

-- AddForeignKey
ALTER TABLE "petty_cash_requests" ADD CONSTRAINT "petty_cash_requests_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organizations"("org_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "petty_cash_requests" ADD CONSTRAINT "petty_cash_requests_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employees"("emp_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "petty_cash_requests" ADD CONSTRAINT "petty_cash_requests_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "employees"("emp_id") ON DELETE SET NULL ON UPDATE CASCADE;
