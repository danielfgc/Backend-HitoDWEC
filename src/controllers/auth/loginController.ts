import { Request, Response } from "express";
import { User } from "../../models/User";
import bcrypt from "bcrypt";
import Joi from "joi";
import jsonwebtoken from "jsonwebtoken";
export const loginController = async (req: Request, res: Response):Promise<Response> => {
    const {error} = loginSchema.validate(req.body);
    if(error){
        return res.status(400).json({error: error.details[0].message});
    }
    const user = await User.findOne({ where: { email: req.body.email } });
    if(!user){
        return res.status(500).json({error: "user not found"});
    }
    const {name, id, pass} = user.get();
    const isValidPass = bcrypt.compare(req.body.password, pass);
    if(!isValidPass){
        return res.status(403).json({error: "Contraseña o usuario incorrectos"});
    }
    const token = jsonwebtoken.sign({
        name: name,
        id: id
    }, process.env.MY_TOKEN!);
    return res.header('auth-token', token).json({
        error:null,
        data:{token, user}
        
    });
}
const loginSchema = Joi.object({
    email: Joi.string().min(6).max(50).required().email(),
    pass: Joi.string().min(6).max(30).required(),
});
