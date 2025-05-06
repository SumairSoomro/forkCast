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
    // Debug info - log headers to see what's being sent
    console.log("Auth Headers:", req.headers.authorization);
    
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      console.log("No authorization header found");
      return res.status(401).json({ error: "Missing authorization header" });
    }
    
    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      console.log("Invalid authorization format:", authHeader);
      return res.status(401).json({ error: "Invalid authorization format. Use 'Bearer TOKEN'" });
    }
    
    const token = parts[1];
    console.log("Token extracted:", token.substring(0, 10) + "...");  // Log just the beginning for security
    
    try {
      const { data, error } = await supabase.auth.getUser(token);
      
      if (error) {
        console.log("Supabase auth error:", error);
        return res.status(401).json({ error: "Invalid token: " + error.message });
      }
      
      if (!data?.user) {
        console.log("No user found in response");
        return res.status(401).json({ error: "No user found with this token" });
      }
      
      // console.log("User authenticated:", data.user.id);
      req.user = data.user;
      next();
    } catch (error) {
      console.log("Exception during authentication:", error);
      return res.status(500).json({ error: "Authentication error" });
    }
};