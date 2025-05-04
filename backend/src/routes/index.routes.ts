import express from "express";
import authRoutes from "./auth.routes";
import recipeRoutes from "./recipes.routes";
import ingredientRoutes from "./ingredients.routes";
import tagRoutes from "./tags.routes";
import topRecRoutes from "./topRecipes.routes"

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/recipes", recipeRoutes);
router.use("/ingredients", ingredientRoutes); 
router.use("/tags", tagRoutes);
router.use("/topRec", topRecRoutes )

export default router;