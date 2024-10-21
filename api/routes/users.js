import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { tokenVerify } from "../utils/tokenVerify.js";

const router = express.Router();

router.get("/checkauthentication", tokenVerify, (req, res, next) => {
  res.send("User your logged in!");
});

// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

// GET
router.get("/:id", getUser);

// GET ALL
router.get("/", getUsers);

export default router;
