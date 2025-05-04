import express from "express";
import {
  addMealPlanEntries,
  deleteMealPlanEntry,
  editMealPlanEntry,
  getUserMealPlan,
} from "../controllers/meal_plan.controller";

const router = express.Router();

router.post("/add", addMealPlanEntries);

router.post("/delete", deleteMealPlanEntry);

router.put("/edit", editMealPlanEntry);

router.get("/:user_id", getUserMealPlan);

export default router;