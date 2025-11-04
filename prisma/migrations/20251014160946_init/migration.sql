-- CreateTable
CREATE TABLE "attendances" (
    "att_id" UUID NOT NULL,
    "org_id" UUID NOT NULL,
    "emp_id" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "check_in_time" TIMESTAMP(3),
    "check_in_location" TEXT,
    "check_out_time" TIMESTAMP(3),
    "check_out_location" TEXT,
    "work_hours" DOUBLE PRECISION,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attendances_pkey" PRIMARY KEY ("att_id")
);

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organizations"("org_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employees"("emp_id") ON DELETE RESTRICT ON UPDATE CASCADE;
