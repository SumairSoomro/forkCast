import { Request, Response } from "express";
import { supabase } from "../config/supabaseClient";

import { Recipe } from '../interfaces/recipe.interface';
import { Ingredient } from '../interfaces/ingredient.interface';
import { Tag } from '../interfaces/tag.interface';
import { NutritionalInfo } from '../interfaces/nutritionalInfo.interface';
import { Instruction } from '../interfaces/instruction.interface';

// Function to add a recipe to the database
export const addRecipe = async (req: Request, res: Response) => {

    const {
        title, description, cuisine, prepTime,
        cookTime, servings, difficulty,
        ingredients, instructions, tags, nutritionalInfo
      } = req.body;
    
      // 1. Insert the main recipe
      const { data: recipeData, error: recipeError } = await supabase
        .from("recipes")
        .insert([{
          title,
          description,
          cuisine,
          prep_time: prepTime,
          cook_time: cookTime,
          servings,
          difficulty
        }])
        .select("id");
    
      if (recipeError || !recipeData) {
        return res.status(400).json({ error: recipeError?.message || "Failed to insert recipe" });
      }
    
      const recipeId = recipeData[0].id;
    
      try {
        // 2. Insert ingredients
        if (ingredients?.length) {
            const ingredientInserts = ingredients.map(({ id, name, quantity, unit }: Ingredient) => ({
            recipe_id: recipeId,
            ingredient_id: id, // nullable if new ingredients allowed
            ingredient_name: name,
            quantity,
            unit
          }));
    
          const { error: ingErr } = await supabase.from("recipe_ingredients").insert(ingredientInserts);
          if (ingErr) throw new Error("Ingredient insert failed: " + ingErr.message);
        }
    
        // 3. Insert instructions
        if (instructions?.length) {
          const instructionInserts = instructions.map(({step, index}: Instruction) => ({
            recipe_id: recipeId,
            step_number: index + 1,
            instruction: step
          }));
    
          const { error: instrErr } = await supabase.from("recipe_instructions").insert(instructionInserts);
          if (instrErr) throw new Error("Instruction insert failed: " + instrErr.message);
        }
    
        // 4. Insert tags
        if (tags?.length) {
            const tagInserts = tags.map((tag: string) => ({
                recipe_id: recipeId,
                tag
              }));
    
          const { error: tagErr } = await supabase.from("recipe_tags").insert(tagInserts);
          if (tagErr) throw new Error("Tag insert failed: " + tagErr.message);
        }
    
        // 5. Insert nutrition
        if (nutritionalInfo) {
          const { calories, protein, carbs, fats } = nutritionalInfo;
    
          const { error: nutriErr } = await supabase.from("recipe_nutrition").insert([{
            recipe_id: recipeId,
            calories,
            protein,
            carbs,
            fats
          }]);
          if (nutriErr) throw new Error("Nutrition insert failed: " + nutriErr.message);
        }
    
        return res.status(201).json({ message: "Recipe inserted successfully", recipeId });
    
      } catch (e) {
        // Rollback manually: delete the inserted recipe if any insert fails. Other tables have DELETE ON CASCADE
        await supabase.from("recipes").delete().eq("id", recipeId);
        const errorMessage = e instanceof Error ? e.message : "Something went wrong";
        return res.status(500).json({ error: errorMessage });
      }
};


let x = {
    id: "3",
    title: "Avocado Toast",
    description: "Simple and nutritious breakfast with mashed avocado on artisan bread",
    cuisine: "Modern",
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Sourdough bread", quantity: 2, unit: "slices" },
      { id: null, name: "Ripe avocados", quantity: 2, unit: "count" },
      { id: null, name: "Cherry tomatoes", quantity: 100, unit: "grams" },
      { id: null, name: "Red pepper flakes", quantity: 0.5, unit: "tsp" },
      { id: null, name: "Salt", quantity: 0.5, unit: "tsp" },
      { id: null, name: "Olive oil", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Toast bread until golden",
      "Mash avocado with seasonings",
      "Spread on toast",
      "Top with tomatoes and pepper flakes"
    ],
    imageUrl: "https://example.com/avocado-toast.jpg",
    tags: ["breakfast", "healthy", "vegetarian", "quick"],
    nutritionalInfo: {
      calories: 280,
      protein: 8,
      carbs: 25,
      fats: 16
    },
    ratings: {
      average: 4.5,
      count: 750
    },
    views: 9000
  }