import express from "express";
import { PrismaClient } from "@prisma/client";
import authCheck from "../utils/authCheck.js";

const router = express.Router();

const prisma = new PrismaClient();

router.post("/add-post", async function (req, res) {
  const { title, decription, price, author, text } = req.body;

  try {
    await prisma.news.create({
      data: { title, decription, price, author, text },
    });

    res.send({ data: "Товар добавлен" });
  } catch (err) {
    res.status(500).json({ error: "Ошибка получения товаров" });
  }
});

router.post("/delete-post", async function (req, res) {
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

router.post("/update-post", async function (req, res) {
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

router.get("/posts", async function (req, res) {
  try {
    const products = await prisma.products.findMany();
    res.send({ data: products });
  } catch (err) {
    res.status(500).json({ error: "Ошибка получения товаров" });
  }
});

router.get("/products-category", async function (req, res) {
  try {
    const test = await prisma.category.findMany();
    res.send({ data: test });
  } catch (err) {
    res.status(500).json({ error: "Ошибка получения товаров" });
  }
});

export default router;
