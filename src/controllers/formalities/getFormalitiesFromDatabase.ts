import { Request, Response } from "express";
import { Formality } from "../../models/Formality";

export const getFormalitiesFromDatabase = async (
    _: Request,
    res: Response
): Promise<Response> => {
    try {
        const formalities = await Formality.findAll();
        return res.json(formalities);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}