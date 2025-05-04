import express from "express";
import { getTopFavoritedRecipes} from "../controllers/topRecipes.controller";

const router = express.Router();

router.get("/top-favorited", getTopFavoritedRecipes);


export default router;