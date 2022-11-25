import { Request, Response } from "express";
import { Formality } from "../../models/Formality";

export const getFormalitiesFromDatabase = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId = parseInt(req.params.userId);
  
    if (!userId) {
      return res.status(500).json("Error, no hay userId");
    }
    try {
        const formalities = await Formality.findAll({where: {iduser:userId}});
        return res.json(formalities);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}