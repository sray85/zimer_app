import express from "express";
import cors from "cors";
const zimmerSignUpRouter = express.Router();
zimmerSignUpRouter.use(cors());
zimmerSignUpRouter.use(express.json());
import zimmer from "../handlers/zimmer.mjs";

zimmerSignUpRouter.post("/zimmer/addzimmerinfo", zimmer.AddZimmer);
zimmerSignUpRouter.get("/zimmer/zimmerlist", zimmer.DisplayZimmer);
zimmerSignUpRouter.post("/zimmer/deletezimmer", zimmer.DeleteZimmer);
zimmerSignUpRouter.post("/zimmer/editzimmer", zimmer.EditZimmer);
zimmerSignUpRouter.post("/zimmer/resevation", zimmer.AddZimmerResevation);
zimmerSignUpRouter.get(
  "/resevation/zimmerResevations",
  zimmer.ZimmerResevations
);

export default zimmerSignUpRouter;
