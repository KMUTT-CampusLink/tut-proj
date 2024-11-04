import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { logger } from "./middleware/logger.js";
import { corsConfig } from "./config/corsConfig.js";
import videoRouter from "./routes/videoRouter.js";

const app = express();
const port = process.env.PORT || 3500;
app.use(logger);
app.use(cookieParser());
app.use(cors(corsConfig));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/api/video", videoRouter);

app.listen(port, () => {
  console.log(`Application started on port localhost:3500`);
});
