import { Request,Response } from "express";
import { Formality } from "../../models/Formality";

export const updateFormalityInDatabase = async(
    req:Request,
    res:Response
):Promise<Response>=>{
    const formalityId= parseInt(req.params.formalityId);
    if(!req.body){
        return res.status(500).json("No se ha mandado ninun dato");
    }
    try{
        const {
            iduser,
            formalitytype,
            title,
            formalitybody
        } = req.body;
        await Formality.update({
            iduser,
            formalitytype,
            title,
            formalitybody
        },{where:{id:formalityId}});
        return res.status(200).json({ message: `Formality with ${formalityId} update successfully` });
    }catch(_){
        return res.status(500).json("Something wrong with the update");
    }
}