import { Request, Response } from "express";
import { User } from "../../models/User";
export const deleteAUserFromDatabase = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const userId = parseInt(req.params.userId);
  
    if (!userId) {
      return res.status(500).json("Error, no hay userId");
    }
  
    try {
      await User.destroy({where: {id:userId}});
      return res.status(200).send(`Usuario con id ${userId} eliminado correctamente.`);
    } catch (_) {
      return res.status(500).send("Ha ocurrido un error elimininando el usuario");
    }
  };
