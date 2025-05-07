import express from "express";
import { signup, login, getUser, logout } from "../controllers/auth.controllers";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", getUser);
router.post("/logout", logout);

export default router;