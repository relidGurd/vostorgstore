const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
require("dotenv").config();

const pg = require("knex")({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
  },
});

const app = express();

const privatKey = process.env.JWT_SECRET;
const privatKeyRefresh = process.env.JWT_SECRET_REFRESH;

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

app.post("/register", async function (req, res) {
  res.send({ test: "register" });
  console.log(req.body);
});

function isLoggin(req, res, next) {
  const authorizationToken = req.headers.authorization;
  const accessToken = authorizationToken.split(" ")[1];
  if (!authorizationToken || !accessToken) {
    throw "Not authorized";
  }

  const test = jwt.verify(accessToken, process.env.JWT_SECRET);

  if (!test) {
    throw err;
  }

  next();
}

app.get("/test", isLoggin, async function (req, res) {
  console.log("пройден");
  console.log("Cookies:", req.cookies.refreshToken);
});

app.post("/login", async function (req, res) {
  const { username, password } = req.body;
  try {
    const user = await pg.table("users").where("username", username).first();

    if (user.password === password) {
      const token = jwt.sign({ name: "TestToken" }, privatKey, {
        expiresIn: "2h",
      });
      const refreshToken = jwt.sign({ name: "TestToken" }, privatKey, {
        expiresIn: "48h",
      });
      res.cookie("refreshToken", refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      res.send({ token, refreshToken });
    } else {
      console.log("Неверный пароль");
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/", function (req, res) {
  res.send({ test: "Hello World" });
  console.log(`Server started on: http://localhost:${process.env.PORT}/`);
});

app.listen(process.env.PORT || 3001);
