import express from "express";
import {authenticate} from "../../middleware/authenticate";
import {addIngredient, getAllIngredients} from "../controllers/ingredients.controllers";

const router = express.Router();

router.post("/add",addIngredient);
router.get("/getall", getAllIngredients);

export default router;