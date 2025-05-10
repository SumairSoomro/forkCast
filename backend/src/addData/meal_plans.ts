// import { supabase } from "../config/supabaseClient";
import { mealPlan } from "./mocks/mockData"; // Assuming this contains the meal plan data
import recipes from "./recipes.json"; // Import recipes.json
import dotenv from "dotenv";

dotenv.config();

const loick_uuid = process.env.LOICK_ID!; 

const addMealPlanEntries = async () => {
  const startDate = new Date("2025-05-01"); // Day 1 is May 1st, 2025

  try {
    // Step 1: Create a mapping of recipe titles to IDs
    const recipeMap = recipes.reduce((map: Record<string, string>, recipe: any) => {
      map[recipe.title] = recipe.id;
      return map;
    }, {});

    // Step 2: Map mealPlan to include recipe IDs
    const entriesToInsert = mealPlan.flatMap((entry: any) => {
      const dayOffset = entry.day - 1; // Calculate the offset from day 1
      const baseDate = new Date(startDate);
      baseDate.setDate(baseDate.getDate() + dayOffset); // Add the offset to the base date

      return entry.schedule.map((scheduleItem: any) => {
        const recipe_id = recipeMap[scheduleItem.recipe]; // Map recipe title to ID
        if (!recipe_id) {
          throw new Error(`Recipe ID not found for recipe: ${scheduleItem.recipe}`);
        }

        const time = new Date(baseDate); // Clone the base date
        const [hours, minutes, period] = scheduleItem.time.match(/(\d+):(\d+)\s*(AM|PM)/i)!.slice(1);
        time.setHours(period.toUpperCase() === "PM" ? +hours % 12 + 12 : +hours % 12, +minutes);

        return {
          user_id: loick_uuid, // Use the predefined user ID
          recipe_id,
          time: time.toISOString(), // Convert to ISO string for the database
        };
      });
    });

    // Step 3: Insert the entries into the database
    const response = await fetch("http://localhost:4000/recipes/getall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    const data = await response.json();


    console.log("Meal plan entries added successfully:", data);
  } catch (err) {
    console.error("Error adding meal plan entries:", err);
  }
};

addMealPlanEntries();