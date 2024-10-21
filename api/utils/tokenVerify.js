import JWT from "jsonwebtoken";
import { createError } from "./error.js";

export const tokenVerify = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated!"));

  JWT.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(createError(403, "this is not a valid token"));
    req.user = user;
    next();
  });
};
