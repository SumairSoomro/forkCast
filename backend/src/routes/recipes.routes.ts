import express from "express";
import {addRecipe, getRecipesByIds} from "../controllers/recipe.controller";

const router = express.Router();

router.post("/add", addRecipe);
router.post("/get", getRecipesByIds);

export default router;