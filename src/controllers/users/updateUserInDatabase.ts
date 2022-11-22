import { Request, Response } from "express";
import { User } from "../../models/User";


export const updateAUserInDatabase = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const userId = parseInt(req.params.userId);
    if (!req.body) {
      return res.status(500).json("No se ha mandando nigun dato por el body");
    }
    try {
      const {
        username,
        password,
        email
      } = req.body;
      await User.update({
        username,
        email,
        password
        
      },{where:{id:userId}});
      return res
        .status(200)
        .json({ message: `User with ${userId} update successfully` });
    } catch (_) {
      return res.status(500).json("Something wrong with the update");
    }
  };
  