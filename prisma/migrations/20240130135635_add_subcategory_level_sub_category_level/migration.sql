/*
  Warnings:

  - You are about to drop the column `categoryName` on the `subCategoryLevel` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[subCategoryName]` on the table `subCategoryLevel` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `parentCategoryName` to the `subCategoryLevel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subCategoryName` to the `subCategoryLevel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "subCategoryLevel" DROP CONSTRAINT "subCategoryLevel_categoryName_fkey";

-- AlterTable
ALTER TABLE "subCategoryLevel" DROP COLUMN "categoryName",
ADD COLUMN     "parentCategoryName" TEXT NOT NULL,
ADD COLUMN     "subCategoryName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "subCategoryLevel_subCategoryName_key" ON "subCategoryLevel"("subCategoryName");

-- AddForeignKey
ALTER TABLE "subCategoryLevel" ADD CONSTRAINT "subCategoryLevel_parentCategoryName_fkey" FOREIGN KEY ("parentCategoryName") REFERENCES "category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
