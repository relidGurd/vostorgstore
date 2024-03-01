-- CreateTable
CREATE TABLE "subCategoryLevel" (
    "id" SERIAL NOT NULL,
    "categoryName" TEXT NOT NULL,

    CONSTRAINT "subCategoryLevel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "subCategoryLevel" ADD CONSTRAINT "subCategoryLevel_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
