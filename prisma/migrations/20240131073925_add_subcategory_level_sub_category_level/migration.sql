-- AlterTable
ALTER TABLE "products" ADD COLUMN     "subCategoryName" TEXT;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_subCategoryName_fkey" FOREIGN KEY ("subCategoryName") REFERENCES "subCategoryLevel"("subCategoryName") ON DELETE SET NULL ON UPDATE CASCADE;
