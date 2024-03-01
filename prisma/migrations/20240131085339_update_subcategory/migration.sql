/*
  Warnings:

  - You are about to drop the column `subcategoryId` on the `subcategory` table. All the data in the column will be lost.
  - Added the required column `parentCategoryId` to the `subcategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "subcategory" DROP CONSTRAINT "subcategory_subcategoryId_fkey";

-- AlterTable
ALTER TABLE "subcategory" DROP COLUMN "subcategoryId",
ADD COLUMN     "parentCategoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "subcategory" ADD CONSTRAINT "subcategory_parentCategoryId_fkey" FOREIGN KEY ("parentCategoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
