import { Request, Response } from "express";
import { User } from "../../models/User";

export const createUserInDatabase = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const {
        username,
        password,
        email
      } = req.body;
  
  
      const user = await User.create({
        username,
        email,
        password
        
      });
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  };
  