import express from "express";
import authRoutes from "./auth.routes";
import recipeRoutes from "./recipes.routes";
import ingredientRoutes from "./ingredients.routes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/recipes", recipeRoutes);
router.use("/ingredients", ingredientRoutes); 

export default router;