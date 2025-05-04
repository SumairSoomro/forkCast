import express from "express";
import {addIngredient, getAllIngredients} from "../controllers/ingredients.controller";

const router = express.Router();

router.post("/add", addIngredient);
router.get("/getall", getAllIngredients);

export default router;