-- CreateTable
CREATE TABLE "subcategory" (
    "id" SERIAL NOT NULL,
    "subcategoryId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "subcategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "subcategory" ADD CONSTRAINT "subcategory_subcategoryId_fkey" FOREIGN KEY ("subcategoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
