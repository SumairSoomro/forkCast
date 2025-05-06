import { Request, Response, NextFunction} from "express";
import { supabase } from "../config/supabaseClient";
import { User } from '@supabase/supabase-js';

// Extend the express Request interface directly in this file
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];
  
    if (!token) return res.status(401).json({ error: "Missing token" });
  
    const { data, error } = await supabase.auth.getUser(token);
  
    if (error || !data?.user) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
  
    req.user = data.user;
    next();
  };