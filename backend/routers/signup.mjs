import express from "express";
import cors from "cors";
import signUpHandler from "../handlers/usersignup.mjs";

const userSignUpRouter = express.Router();
userSignUpRouter.use(cors());
userSignUpRouter.use(express.json());

userSignUpRouter.post("/signup", signUpHandler.userSignUp);

export default userSignUpRouter;
