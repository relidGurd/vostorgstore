import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import BodyParser from "body-parser";
import "dotenv/config";
import router from "./routes/authorization.js";
import storeRouter from "./routes/store.js";
import path from "path";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(BodyParser.json());
app.use("/api", router, storeRouter);

app.get("/", (req, res) => {
  res.send({
    hello: "Hello",
  });
});

app.listen(process.env.PORT || 3001);
