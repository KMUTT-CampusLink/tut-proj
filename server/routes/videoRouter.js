import { multerErrorHandler } from "../middleware/multerErrorHandler.js";
import file_uploader from "../middleware/multerUploader.js";
import uploadFiles from "../controllers/uploadVideo.js";
import fetchIds from "../controllers/fetchIds.js";
import { Router } from "express";

const videoRouter = Router();

videoRouter.get("/fetch", fetchIds);
videoRouter.post(
  "/upload",
  file_uploader.array("files"),
  multerErrorHandler,
  uploadFiles
);

export default videoRouter;
