export const multerErrorHandler = (err, req, res, next) => {
  if (err) {
    return res.status(400).send("Upload failed");
  } else {
    next();
  }
};
