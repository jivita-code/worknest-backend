-- CreateTable
CREATE TABLE "subscriptions" (
    "sub_id" UUID NOT NULL,
    "org_id" UUID,
    "plan_id" UUID,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "renewal_date" TIMESTAMP(3),
    "billing_cycle" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "auto_renew" BOOLEAN NOT NULL DEFAULT false,
    "trial_end_date" TIMESTAMP(3),
    "cancelled_at" TIMESTAMP(3),
    "payment_method" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("sub_id")
);

-- CreateTable
CREATE TABLE "departments" (
    "dep_id" UUID NOT NULL,
    "org_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "head_id" UUID,
    "parent_department_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("dep_id")
);

-- CreateTable
CREATE TABLE "employees" (
    "emp_id" UUID NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("emp_id")
);

-- CreateTable
CREATE TABLE "organizations" (
    "org_id" UUID NOT NULL,
    "sub_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "industry" TEXT,
    "registration_no" TEXT,
    "address" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "logo_url" TEXT,
    "active_until" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("org_id")
);

-- CreateTable
CREATE TABLE "plans" (
    "plan_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price_monthly" DOUBLE PRECISION,
    "price_annual" DOUBLE PRECISION,
    "max_employees" INTEGER,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "plans_pkey" PRIMARY KEY ("plan_id")
);

-- CreateTable
CREATE TABLE "features" (
    "fet_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "features_pkey" PRIMARY KEY ("fet_id")
);

-- CreateTable
CREATE TABLE "invoices" (
    "invoice_id" UUID NOT NULL,
    "org_id" UUID NOT NULL,
    "sub_id" UUID NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "renewal_date" TIMESTAMP(3),
    "issue_date" TIMESTAMP(3) NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL,
    "paid_date" TIMESTAMP(3),
    "receipt" TEXT,
    "status" TEXT NOT NULL,
    "cancelled_at" TIMESTAMP(3),
    "payment_method" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("invoice_id")
);

-- CreateTable
CREATE TABLE "_plan_features" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_plan_features_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "subscriptions_org_id_key" ON "subscriptions"("org_id");

-- CreateIndex
CREATE INDEX "_plan_features_B_index" ON "_plan_features"("B");

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organizations"("org_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "plans"("plan_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organizations"("org_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_parent_department_id_fkey" FOREIGN KEY ("parent_department_id") REFERENCES "departments"("dep_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_head_id_fkey" FOREIGN KEY ("head_id") REFERENCES "employees"("emp_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organizations"("org_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_sub_id_fkey" FOREIGN KEY ("sub_id") REFERENCES "subscriptions"("sub_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_plan_features" ADD CONSTRAINT "_plan_features_A_fkey" FOREIGN KEY ("A") REFERENCES "features"("fet_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_plan_features" ADD CONSTRAINT "_plan_features_B_fkey" FOREIGN KEY ("B") REFERENCES "plans"("plan_id") ON DELETE CASCADE ON UPDATE CASCADE;
