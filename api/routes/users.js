import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/tokenVerify.js";

const router = express.Router();

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//   res.send("User your logged in!");
// });

// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, your logged in and now you can delete your account");
// });

router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, your logged in and now you can delete all accounts");
});

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
