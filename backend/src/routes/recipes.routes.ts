import express from "express";
import {createRecipe, getRecipesByIds, getAllRecipes} from "../controllers/recipe.controller";
import {authenticate} from "../middleware/authenticate";


const router = express.Router();

router.post("/create", authenticate, createRecipe);
router.post("/get", getRecipesByIds);
router.post("/getAll", getAllRecipes);

export default router;