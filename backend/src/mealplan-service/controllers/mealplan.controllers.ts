import { Request, Response } from "express";
import { supabase } from "../../config/supabaseClient";

export const addMealPlanEntries = async (req: Request, res: Response) => {
  const mealPlanEntries = req.body; // Expecting an array of meal plan objects
  const user_id = req.user!.id; // Expecting user_id from the authenticated user

  if (!Array.isArray(mealPlanEntries) || mealPlanEntries.length === 0) {
    return res.status(400).json({ error: "Invalid or empty meal plan data" });
  }

  const entriesWithUserId = mealPlanEntries.map((entry: any) => ({
    user_id, 
    recipe_id: entry.recipe_id,
    time: entry.time,
  }));

  try {
    const { data, error } = await supabase
      .from("meal_plan")
      .insert(entriesWithUserId);
    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(201).json({ message: "Meal plan entries added successfully", data });
  } catch (err) {
    console.error("Error adding meal plan entries:", err);
    return res.status(500).json({ error: "Internal server error. Meal plan entries not added." });
  }
};

export const deleteMealPlanEntry = async (req: Request, res: Response) => {
  const { meal_plan_id } = req.body; // Expecting the unique meal_plan_id of the meal plan entry
  const user_id = req.user!.id;

  if (!meal_plan_id) {
    return res.status(400).json({ error: "Missing required field: meal_plan_id" });
  }

  try {
    const { error } = await supabase
      .from("meal_plan")
      .delete()
      .eq("meal_plan_id", meal_plan_id) 
      .eq("user_id", user_id); 

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ message: "Meal plan entry deleted successfully" });
  } catch (err) {
    console.error("Error deleting meal plan entry:", err);
    return res.status(500).json({ error: "Internal server error. Meal plan entry not deleted." });
  }
};

  export const editMealPlanEntry = async (req: Request, res: Response) => {
    const { meal_plan_id, recipe_id, time } = req.body;
    const user_id = req.user!.id; 
  
    if (!meal_plan_id || (!recipe_id && !time)) {
      return res.status(400).json({ error: "Missing required fields: meal_plan_id and at least one of recipe_id or time" });
    }
  
    try {
      const updates: { recipe_id?: string; time?: string } = {};
      if (recipe_id) updates.recipe_id = recipe_id;
      if (time) updates.time = time;
  
      const { data, error } = await supabase
        .from("meal_plan")
        .update(updates)
        .eq("meal_plan_id", meal_plan_id)
        .eq("user_id", user_id);
  
      if (error) {
        return res.status(400).json({ error: error.message });
      }
  
      return res.status(200).json({ message: "Meal plan entry updated successfully", data });
    } catch (err) {
      console.error("Error editing meal plan entry:", err);
      return res.status(500).json({ error: "Internal server error. Meal plan entry not updated." });
    }
  };

  export const getUserMealPlan = async (req: Request, res: Response) => {
    const user_id  = req.user!.id; // Expecting user_id as a URL parameter
    const { start, end } = req.query; // Expecting start and end timestamps as query parameters
  
    if (!user_id) {
      return res.status(400).json({ error: "Missing required field: user_id" });
    }
  
    if (!start || !end) {
      return res.status(400).json({ error: "Missing required fields: start and end timestamps" });
    }
  
    try {
      const { data, error } = await supabase
        .from("meal_plan")
        .select("*")
        .eq("user_id", user_id)
        .gte("timestamp", start) // Greater than or equal to start timestamp
        .lte("timestamp", end) // Less than or equal to end timestamp
        .order("timestamp", { ascending: true });
  
      if (error) {
        return res.status(400).json({ error: error.message });
      }
  
      return res.status(200).json({ message: "User meal plan retrieved successfully", data });
    } catch (err) {
      console.error("Error fetching user meal plan:", err);
      return res.status(500).json({ error: "Internal server error. Could not fetch user meal plan." });
    }
  };