import { Request, Response } from "express";
import { supabase } from "../config/supabaseClient";

export const signup = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username
      },
    },
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json({ message: "Signup successful", data });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json({ message: "Login successful", data });
};

export const getUser = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  const { data, error } = await supabase.auth.getUser(token);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json({ user: data.user }); 
};

export const logout = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }
  
  const { error } = await supabase.auth.signOut();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json({ message: "Logout successful" });
};