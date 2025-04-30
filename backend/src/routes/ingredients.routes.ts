import express from "express";
import {addIngredient } from "../controllers/ingredients.controller";

const router = express.Router();

router.post("/add", addIngredient);

export default router;