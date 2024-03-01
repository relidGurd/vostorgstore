/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryToSubCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryToproducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToSubCategory" DROP CONSTRAINT "_CategoryToSubCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToSubCategory" DROP CONSTRAINT "_CategoryToSubCategory_B_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToproducts" DROP CONSTRAINT "_CategoryToproducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToproducts" DROP CONSTRAINT "_CategoryToproducts_B_fkey";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "SubCategory";

-- DropTable
DROP TABLE "_CategoryToSubCategory";

-- DropTable
DROP TABLE "_CategoryToproducts";
