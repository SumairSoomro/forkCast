import { Request, Response } from "express";
import { supabase } from "../config/supabaseClient";

export const addRecipe = async (req: Request, res: Response) => {
    const { id, title, description, cuisine, prepTime, cookTime, servings } = req.body;

    try {
        const { data, error } = await supabase
        .from("recipes")
        .insert([{ id, title, description, cuisine, prepTime, cookTime, servings }]);

        if (error) {
        return res.status(400).json({ error: error.message });
        }

        return res.status(201).json({ message: "Recipe added successfully", data });
    } catch (err) {
        return res.status(500).json({ error: "Internal server error, Recipe not added" });
    }
};