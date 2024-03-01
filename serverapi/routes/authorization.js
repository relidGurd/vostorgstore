import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authCheck from "../utils/authCheck.js";
import { PrismaClient } from "@prisma/client";

// import multer from "multer";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log("ffdfdf");
//     cb(null, "public/products");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//   },
// });

// const upload = multer({ storage: storage });

const router = express.Router();

const prisma = new PrismaClient();

router.post("/register", async function (req, res) {
  const { username, password } = req.body;
  const userPassword = bcrypt.hashSync(password, 10);

  try {
    // const existingUser = await pg.table("users").where({ username }).first();
    const existingUser = await prisma.users.findFirst({ where: { username } });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: `Пользователь с таким ${username} уже зарегитрован` });
    }
    await prisma.users.create({ data: { username, password: userPassword } });
    res.status(201).json({ message: "Пользователь успешно добавлен" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Ошибка регистрации" });
  }
});

router.post("/login", async function (req, res) {
  const { username, password } = req.body;
  try {
    // const user = await pg.table("users").where("username", username).first();
    const user = await prisma.users.findFirst({ where: { username } });
    const checkPass = bcrypt.compareSync(password, user.password);
    if (checkPass) {
      const token = jwt.sign({ name: "TestToken" }, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      const refreshToken = jwt.sign(
        { name: "TestToken" },
        process.env.JWT_REFRESH_SECRET,
        {
          expiresIn: "48h",
        }
      );
      res.cookie("refreshToken", refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      res.send({ token, refreshToken });
    } else {
      res.status(401).json({ error: "Невреный логин или пароль" });
    }
  } catch (err) {
    res.status(401).json({ error: "Невреный логин или пароль" });
  }
});

router.post("/logout", authCheck, async function (req, res) {
  // const { refreshToken } = req.cookies;
  res.send(undefined);
  res.clearCookie("refreshToken");
});

router.get("/test", authCheck, async function (req, res) {
  res.send("Пройдена");
});

router.get("/validate", async function (req, res) {
  const test = req.headers.authorization;
  res.send({ test: "Токен валидный" });
});

router.post("/testLoadFile", async function (req, res) {
  console.log(req.file, req.body);

  res.send("Photo added");
});

export default router;
