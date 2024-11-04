const allowedOrigins = ["http://localhost:35"];

export const corsConfig = {
  origin: (origin, callback) => {
    if (origin && allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  allowedHeaders: ["Content-Type", "Authorization", "authorization"],
  optionsSuccessStatus: 200,
  credentials: true,
};
