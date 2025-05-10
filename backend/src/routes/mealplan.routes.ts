import express from "express";
import {authenticate} from "../middleware/authenticate";

import {
  addMealPlanEntries,
  deleteMealPlanEntry,
  editMealPlanEntry,
  getUserMealPlan,
} from "../controllers/meal_plan.controller";

const router = express.Router();

router.post("/add", authenticate, addMealPlanEntries);

router.post("/delete",authenticate, deleteMealPlanEntry);

router.put("/edit",authenticate, editMealPlanEntry);

router.get("/get",authenticate, getUserMealPlan);

export default router;