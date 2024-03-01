import jwt from "jsonwebtoken";

export default function authCheck(req, res, next) {
  const authorizationToken = req.headers.authorization;

  const accessToken = authorizationToken.split(" ")[1];

  if (!authorizationToken || !accessToken) {
    return res.status(401, { err: "Невреный токен" });
  }

  const test = jwt.verify(accessToken, process.env.JWT_SECRET);

  if (!test) {
    res.status(401).json({ message: "Не авторизован" });
  }

  next();
}
