import { Request, Response } from "express";
import { supabase } from "../config/supabaseClient";

export const addTag = async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
        const { data, error } = await supabase
            .from("tags")
            .insert([{ name }]);

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        return res.status(201).json({ message: "Tag added successfully", data });
    } catch (err) {
        return res.status(500).json({ error: "Internal server error. Tag not added." });
    }
}

export const getAllTags = async (req: Request, res: Response) => {
    console.log(req)
    try {
        const { data, error } = await supabase
            .from("tags")
            .select("*");

        if (error) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ error: "Internal server error. Tags not retrieved." });
    }
}