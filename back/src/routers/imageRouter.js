import { Router } from "express";

const imageRouter = Router();
const { upload } = require("../utils/s3");

imageRouter.post("/image", upload.single("dietImg"), async (req, res, next) => {
  console.log(req.file);
  const { whenDate } = req.body;
  console.log("whenDate", whenDate);
  const Img = req.file;
  console.log("s3 이미지 경로 :", Img.location);

  res.status(200).send(Img.location);
});

export { imageRouter };
