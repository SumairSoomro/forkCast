import { Request, Response } from "express";
import { supabase } from "../config/supabaseClient";

export const getTopFavoritedRecipes = async (req: Request, res: Response) => {
  
  try {
    const { data, error } = await supabase.rpc("get_top_favorited_recipes");

    if (error) {
      console.error("Error running RPC:", error.message);
      return res.status(500).json({ error: "Failed to fetch top favorited recipes." });
    }

    return res.status(200).json({ recipes: data });
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ error: "Server error." });
  }
};