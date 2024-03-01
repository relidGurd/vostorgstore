-- CreateTable
CREATE TABLE "_productSubCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_productSubCategory_AB_unique" ON "_productSubCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_productSubCategory_B_index" ON "_productSubCategory"("B");

-- AddForeignKey
ALTER TABLE "_productSubCategory" ADD CONSTRAINT "_productSubCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_productSubCategory" ADD CONSTRAINT "_productSubCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "subcategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
