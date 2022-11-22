import { Request, Response } from "express";
import { User } from "../../models/User";

export const getUsersFromDatabase = async (
    _: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  };
  