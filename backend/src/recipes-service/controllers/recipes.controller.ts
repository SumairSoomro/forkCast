import { Request, Response } from "express";
import { supabase } from "../../config/supabaseClient";

import { Recipe } from '../../interfaces/recipe.interface';
import { Ingredient, RecipeIngredient } from '../../interfaces/ingredient.interface';
import { Tag } from '../../interfaces/tag.interface';
import { NutritionalInfo } from '../../interfaces/nutritionalInfo.interface';
import { Instruction } from '../../interfaces/instruction.interface';
import { error } from "console";

// Function to add a recipe to the database
export const createRecipe = async (req: Request, res: Response) => {

    const {
        title, description, prepTime,
        cookTime, servings, difficulty,
        ingredients, instructions, tags, nutritionalInfo
      } = req.body;
      console.log("Received recipe data:", req.body);
      // 1. Insert the main recipe
      const { data: recipeData, error: recipeError } = await supabase
        .from("recipes")
        .insert([{
          title,
          description,
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
          const instructionInserts = instructions.map((instruction: string, index: number) => ({   
            recipe_id: recipeId,
            step_number: index + 1,
            instruction
          }));
    
          const { error: instrErr } = await supabase.from("recipe_instructions").insert(instructionInserts);

          if (instrErr) throw new Error("Instruction insert failed: " + instrErr.message);
        }
        
        // 4. Insert tags
        if (tags?.length) {
            const tagInserts = tags.map((tag: Tag) => ({
              
                recipe_id: recipeId,
                tag_id: tag
              }));

          const { error: tagErr } = await supabase.from("recipe_tags").insert(tagInserts);
          if (tagErr) throw new Error("Tag insert failed: " + tagErr.message);
        }
        // 5. Insert nutrition
        if (nutritionalInfo) {
          const a: NutritionalInfo =  nutritionalInfo;
          const { calories, protein, carbs, fats } = a;

          const { error: nutriErr } = await supabase.from("nutritional_info").insert([{
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

export const getRecipesByIds = async (req: Request, res: Response) => {
  const { ids } = req.body; // Expecting an array of recipe IDs in the request body

  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ error: "Invalid or missing 'ids' parameter" });
  }

  try {
    // 1. Fetch the main recipe details
    const { data: recipes, error: recipesError } = await supabase
      .from("recipes")
      .select("*")
      .in("id", ids);

    if (recipesError || !recipes) {
      return res.status(404).json({ error: recipesError?.message || "Recipes not found" });
    }

    // 2. Fetch the ingredients for the recipes
    const { data: ingredients, error: ingredientsError } = await supabase
      .from("recipe_ingredients")
      .select("recipe_id, ingredient_id, ingredient_name, quantity, unit")
      .in("recipe_id", ids);

    if (ingredientsError) {
      throw new Error("Failed to fetch ingredients: " + ingredientsError.message);
    }

    // 3. Fetch the instructions for the recipes
    const { data: instructions, error: instructionsError } = await supabase
      .from("recipe_instructions")
      .select("recipe_id, step_number, instruction")
      .in("recipe_id", ids)
      .order("step_number", { ascending: true });

    if (instructionsError) {
      throw new Error("Failed to fetch instructions: " + instructionsError.message);
    }

    // 4. Fetch the tags for the recipes
    const { data: tags, error: tagsError } = await supabase
      .from("recipe_tags")
      .select("recipe_id, tag_id")
      .in("recipe_id", ids);

    if (tagsError) {
      throw new Error("Failed to fetch tags: " + tagsError.message);
    }

    // Fetch tag names for the tag IDs
    const tagIds = tags.map((tag) => tag.tag_id);
    const { data: tagNames, error: tagNamesError } = await supabase
      .from("tags")
      .select("id, name")
      .in("id", tagIds);

    if (tagNamesError) {
      throw new Error("Failed to fetch tag names: " + tagNamesError.message);
    }

    // 5. Fetch the nutritional information for the recipes
    const { data: nutritionalInfo, error: nutritionalError } = await supabase
      .from("nutritional_info")
      .select("*")
      .in("recipe_id", ids);

    if (nutritionalError) {
      throw new Error("Failed to fetch nutritional information: " + nutritionalError.message);
    }
    

    // Combine all the data into a single response
    const recipesWithDetails = recipes.map((recipe) => {
      const recipeTags = tags
        .filter((tag) => tag.recipe_id === recipe.id)
        .map((tag) => {
          const tagName = tagNames.find((t) => t.id === tag.tag_id);
          return tagName ? tagName.name : null;
        })
        .filter((name) => name !== null); // Remove null values if any tag name is missing
    
      const rawNutrition = nutritionalInfo.find((info) => info.recipe_id === recipe.id);
      const { recipe_id: _, ...nutritionWithoutId } = rawNutrition || {}; // Remove recipe_id
    
      const filteredIngredients = ingredients
        .filter((ing) => ing.recipe_id === recipe.id)
        .map(({ recipe_id, ...rest }) => rest); // Remove recipe_id from each ingredient
    
      const filteredInstructions = instructions
        .filter((instr) => instr.recipe_id === recipe.id)
        .map(({ recipe_id, ...rest }) => rest); // Remove recipe_id from each instruction
    
      return {
        ...recipe,
        ingredients: filteredIngredients,
        instructions: filteredInstructions,
        tags: recipeTags,
        nutritionalInfo: rawNutrition ? nutritionWithoutId : null,
      };
    });

    return res.status(200).json(recipesWithDetails);

  } catch (error) {

    console.error("Error fetching recipes:", error);
    return res.status(500).json({ error: error instanceof Error ? error.message : "Internal server error" });
  }
};