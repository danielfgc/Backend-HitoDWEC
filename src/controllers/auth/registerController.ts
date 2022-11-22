import { Request, Response } from "express";
import { User } from "../../models/User";
import bcrypt from "bcrypt";
export const registerController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      username,
      email,
      password,

    } = req.body;

    // Email validation
    const emailExist = await User.findOne({ where: { email: email } });
    if (emailExist) {
      return res.status(403).json({ message: "Email already registered" });
    }

    const encryptedPass = await encryptPassword(password);
    console.log(encryptedPass, password);

    const users = await User.create({
      username,
      email,
      password:encryptedPass,
      

    });
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

async function encryptPassword(pass: string) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(pass, salt);
  return hash;
}
