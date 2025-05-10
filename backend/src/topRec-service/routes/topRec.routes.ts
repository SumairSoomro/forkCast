import express from "express";
//import {authenticate} from "../../middleware/authenticate";
import { getTopFavoritedRecipes} from "../controllers/topRec.controllers";

const router = express.Router();

router.get("/top-favorited",getTopFavoritedRecipes);


export default router;