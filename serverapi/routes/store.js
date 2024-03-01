import express from "express";
import { PrismaClient } from "@prisma/client";
import authCheck from "../utils/authCheck.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/products");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

const prisma = new PrismaClient();

router.post("/add-product", upload.array("file"), async function (req, res) {
  const { title, decription, price, author, parentCategories, subCategories } =
    req.body;

  const images = [];

  const parentCategory =
    parentCategories.length <= 1
      ? [parentCategories]
      : parentCategories.split(",");

  const subParentCategory =
    subCategories.length <= 1 ? [subCategories] : subCategories.split(",");

  const files = req.files;

  files.map((el) => {
    const url = `/products/${el.filename}`;
    images.push(url);
  });

  try {
    let isSubCar;

    if (subCategories.length === 0) {
      isSubCar = {};
    } else {
      isSubCar = {
        create: subParentCategory.map((categoryId) => {
          return {
            subcategory: {
              connect: {
                id: Number(categoryId),
              },
            },
          };
        }),
      };
    }

    await prisma.products.create({
      data: {
        title,
        decription,
        price: Number(price),
        author,
        images,
        categories: {
          create: parentCategory.map((categoryId) => {
            return {
              assignedBy: "Admin",
              category: {
                connect: {
                  id: Number(categoryId),
                },
              },
            };
          }),
        },
        subcategories: isSubCar,
      },
    });

    res.send({ data: "Товар добавлен" });
  } catch (err) {
    res.status(500).json({ error: "Ошибка получения товаров", err });
  }
});

router.post("/delete-product", async function (req, res) {
  const { id } = req.body;

  try {
    await prisma.products.delete({
      where: { id },
    });
    res.send({ data: "Товар удален" });
  } catch (err) {
    res.status(500).json({ error: "Такого товара не существует" });
  }
});

router.post("/update-product", async function (req, res) {
  const { id, ...dataToUpdate } = req.body;

  try {
    await prisma.products.update({
      where: { id },
      data: { ...dataToUpdate },
    });

    res.send({ data: "Товар изменен" });
  } catch (err) {
    res.status(500).json({ error: "Ошибка получения товаров" });
  }
});

router.get("/products", async function (req, res) {
  try {
    const products = await prisma.products.findMany({
      include: {
        categories: true,
        subcategories: true,
      },
    });
    res.send({ data: products });
  } catch (err) {
    res.status(500).json({ error: "Ошибка получения товаров" });
  }
});

router.get("/product", async function (req, res) {
  const productId = req.query.id;

  try {
    const product = await prisma.products.findUnique({
      where: {
        id: Number(productId),
      },
      include: {
        categories: true,
      },
    });
    res.send({ data: product });
  } catch (err) {
    res.status(500).json({ error: "Ошибка получения товара" });
  }
});

router.get("/products-category", async function (req, res) {
  const categoryKey = Object.keys(req.query);

  try {
    let checkParam;

    if (categoryKey[0] === "category") {
      checkParam = {
        categories: {
          some: {
            categoryId: Number(req.query.category),
          },
        },
      };
    } else if (categoryKey[0] === "subcategory") {
      checkParam = {
        subcategories: {
          some: {
            subCategoryId: Number(req.query.subcategory),
          },
        },
      };
    } else {
      return res
        .status(400)
        .json({ error: "Не указаны параметры categoryId или subCategoryId" });
    }

    const products = await prisma.products.findMany({
      include: {
        categories: true,
        subcategories: true,
      },
      where: checkParam,
    });

    res.send({ data: products });
  } catch (err) {
    res.status(500).json({ error: "Ошибка получения товаров" });
  }
});

router.post("/create-category", async function (req, res) {
  const { name } = req.body;

  try {
    await prisma.category.create({
      data: {
        name: name.toLowerCase(),
      },
    });

    res.send({ data: name });
  } catch (err) {
    res.status(500).json({ error: "Ошибка добавления категории" });
  }
});

router.get("/categories", async function (req, res) {
  try {
    const categories = await prisma.category.findMany({
      include: {
        subcategory: true,
      },
    });

    res.send({ data: categories });
  } catch (err) {
    res.status(500).json({ error: "Категорий нет" });
  }
});

export default router;
