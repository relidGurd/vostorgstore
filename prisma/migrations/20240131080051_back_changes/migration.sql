/*
  Warnings:

  - You are about to drop the `subCategoryLevel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "subCategoryLevel" DROP CONSTRAINT "subCategoryLevel_parentCategoryName_fkey";

-- DropTable
DROP TABLE "subCategoryLevel";
