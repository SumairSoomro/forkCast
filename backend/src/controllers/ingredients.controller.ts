import { Request, Response } from "express";
import { supabase } from "../config/supabaseClient";

export const addIngredient = async (req: Request, res: Response) => {
    const {name, shelf_life} = req.body;
    try {
        const { data, error } = await supabase
            .from("ingredients")
            .insert([{name, shelf_life }]);
  
      if (error) {
        return res.status(400).json({ error: error.message });
      }
  
      return res.status(201).json({ message: "Ingredient added successfully", data });
    }
    catch (err) {
      return res.status(500).json({ error: "Internal server error. Ingredient not added." });
    }
}