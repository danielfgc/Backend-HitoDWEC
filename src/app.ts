import express from "express";
import userRouter from "./routers/users/users.routes";
import authRouter from "./routers/users/users.routes";
import formalityRouter from "./routers/formalities/formalities.routes";
import cors from "cors";
import { verifyToken } from "./controllers/auth/validationTokenController";
const app = express();
app.use(cors())
app.set("port", process.env.PORT || 3001);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/users",verifyToken, userRouter);
app.use("/api/formalities",verifyToken, formalityRouter);
app.use('/api/auth', authRouter);
export default app;