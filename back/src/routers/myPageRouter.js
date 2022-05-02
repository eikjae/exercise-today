import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { myPageService } from "../services/myPageService";

const myPageRouter = Router();

myPageRouter.get(
  "/mypage/weight/all",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const weightInfo = await myPageService.getWeight({ userId });

      res.status(200).send(weightInfo);
    } catch (error) {
      next(error);
    }
  }
);

export { myPageRouter };
