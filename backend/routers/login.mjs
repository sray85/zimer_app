import express from "express";
import cors from "cors";
import logonHandler from "../handlers/userlogin.mjs";

const userLogInRouter = express.Router();
userLogInRouter.use(cors());
userLogInRouter.use(express.json());

userLogInRouter.post("/login", logonHandler.UserLogIn);

export default userLogInRouter;
