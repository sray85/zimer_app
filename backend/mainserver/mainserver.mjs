import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config("../.env");
const mainserver = express();
mainserver.use(express.json());
mainserver.use(cors());
const port = process.env.PORT;
import connectToMDB from "../connectingToMD/mongoosDB.mjs";
import userSignUpRouter from "../routers/signup.mjs";
import userLogInRouter from "../routers/login.mjs";

connectToMDB.mongoosDB.Connect();

mainserver.get("/", (req, res) => {
  console.log("mainserver is running");
  res.json({ mainserver: "mainserver is running", status: true });
});

mainserver.use(userSignUpRouter);
mainserver.use(userLogInRouter);

mainserver.listen(port, () => {
  console.log(`the server is listen to port http://localhost:${port}`);
});
