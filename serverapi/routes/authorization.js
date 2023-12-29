import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import knex from "knex";
import authCheck from "../utils/authCheck.js";

const router = express.Router();

const pg = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
  },
});

router.post("/register", async function (req, res) {
  const { username, password } = req.body;
  const userPassword = bcrypt.hashSync(password, 10);

  try {
    const existingUser = await pg.table("users").where({ username }).first();

    if (existingUser) {
      return res
        .status(400)
        .json({ message: `Пользователь с таким ${username} уже зарегитрован` });
    }
    await pg.table("users").insert({ username, password: userPassword });
    res.status(201).json({ message: "Пользователь успешно добавлен" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Ошибка регистрации" });
  }
});

router.post("/login", async function (req, res) {
  const { username, password } = req.body;
  try {
    const user = await pg.table("users").where("username", username).first();
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
    console.log(err);
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

export default router;
