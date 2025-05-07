import { Request, Response } from "express";
import { supabase } from "../../config/supabaseClient";

let cachedTen: { data: any; expires: number } | null = null;
const TTL = 60 * 60 * 1000;                    

export const getTopFavoritedRecipes = async (req: Request, res: Response) => {
  const now = Date.now();
  if (cachedTen && cachedTen.expires > now) {
    return res.status(200).json({ recipes: cachedTen.data, cached: true });
  }

  const { data, error } = await supabase.rpc("get_top_favorited_recipes");
  if (error) return res.status(500).json({ error: error.message });

  cachedTen = { data, expires: now + TTL };
  res.json({ recipes: data, cached: false });
}; 