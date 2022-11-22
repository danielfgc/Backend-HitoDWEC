import { Request, Response } from "express";
import { Formality } from "../../models/Formality";

export const createFormalityInDatabase = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const {
            iduser,
            formalitytype,
            title,
            formalitybody
        } = req.body;


        const formality = await Formality.create({
            iduser,
            formalitytype,
            title,
            formalitybody

        });
        return res.json(formality);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};