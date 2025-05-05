import express from "express";
import {createRecipe, getRecipesByIds} from "../controllers/recipe.controller";

const router = express.Router();

router.post("/create", createRecipe);
router.post("/get", getRecipesByIds);

export default router;