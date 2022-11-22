import { Request, Response } from "express"
import { Formality } from "../../models/Formality";
export const deleteFormalityInDatabase= async(
    req:Request,
    res:Response
):Promise<Response>=>{
    const formalityId=parseInt(req.params.formalityId);
    
    if(!formalityId){
        return res.status(500).json("Error, no hay formalityId");
    }

    try{
        await Formality.destroy({where:{id:formalityId}});
        return res.status(200).send(`Formality with id ${formalityId} deleted successfully`);
    }catch(_){
        return res.status(500).send("Ha ocurrido un error eliminando la formality");
    }
};