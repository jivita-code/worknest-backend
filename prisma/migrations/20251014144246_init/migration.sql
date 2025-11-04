-- CreateTable
CREATE TABLE "platform_access" (
    "acc_id" UUID NOT NULL,
    "org_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "platform_access_pkey" PRIMARY KEY ("acc_id")
);

-- CreateTable
CREATE TABLE "_access_features" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_access_features_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_access_features_B_index" ON "_access_features"("B");

-- AddForeignKey
ALTER TABLE "platform_access" ADD CONSTRAINT "platform_access_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organizations"("org_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_access_features" ADD CONSTRAINT "_access_features_A_fkey" FOREIGN KEY ("A") REFERENCES "features"("fet_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_access_features" ADD CONSTRAINT "_access_features_B_fkey" FOREIGN KEY ("B") REFERENCES "platform_access"("acc_id") ON DELETE CASCADE ON UPDATE CASCADE;
