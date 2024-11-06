import fetchIds from "../controllers/fetchIds.js";
import { Router } from "express";

const videoRouter = Router();

videoRouter.get("/fetch", fetchIds);

export default videoRouter;
