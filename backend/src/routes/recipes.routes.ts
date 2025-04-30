import express from "express";
import {addRecipe } from "../controllers/recipe.controller";

const router = express.Router();

router.post("/recipes/add", addRecipe);


export default router;