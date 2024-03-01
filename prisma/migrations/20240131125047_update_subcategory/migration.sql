/*
  Warnings:

  - You are about to drop the `_productSubCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_productSubCategory" DROP CONSTRAINT "_productSubCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_productSubCategory" DROP CONSTRAINT "_productSubCategory_B_fkey";

-- DropTable
DROP TABLE "_productSubCategory";

-- CreateTable
CREATE TABLE "subCategoryOnProducts" (
    "productsId" INTEGER NOT NULL,
    "subCategoryId" INTEGER NOT NULL,

    CONSTRAINT "subCategoryOnProducts_pkey" PRIMARY KEY ("productsId","subCategoryId")
);

-- AddForeignKey
ALTER TABLE "subCategoryOnProducts" ADD CONSTRAINT "subCategoryOnProducts_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subCategoryOnProducts" ADD CONSTRAINT "subCategoryOnProducts_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "subcategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
