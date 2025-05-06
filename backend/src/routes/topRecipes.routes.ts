import express from "express";
import {authenticate} from "../middleware/authenticate";
import { getTopFavoritedRecipes} from "../controllers/topRecipes.controller";

const router = express.Router();

router.get("/top-favorited", authenticate, getTopFavoritedRecipes);


export default router;