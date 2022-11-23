import jsonwebtoken from "jsonwebtoken";
import { Request, Response,NextFunction } from "express";


export const verifyToken = (req: Request, res: Response,next:NextFunction) =>{
    const token = req.header("auth-token");
    if(!token){
        return res.status(404).json({error: "No hay token"});
    }
    try {
        jsonwebtoken.verify(token,process.env.MY_TOKEN!);
        next();
    } catch (error) {
        return res.status(403).json({error: "token no valido"});
        
    }
}
