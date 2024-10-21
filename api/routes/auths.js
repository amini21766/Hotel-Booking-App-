import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

// CREATE user
router.post("/register", register);

// LOGIN user
router.post("/login", login);

export default router;
