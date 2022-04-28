import { Router } from "express";
import { likeService } from "../services/likeService";

const likeRouter = Router();

likeRouter.put(
  "/like/exercise",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.currentUserId;
      const exercise = req.body.exercise;

      const toUpdate = { exercise };
      const updatedLikeInfo = await likeService.setLike({ user_id, toUpdate });

      if (updatedLikeInfo.errorMessage) {
        throw new Error(updatedLikeInfo.errorMessage);
      }

      res.status(200).json(updatedLikeInfo);
    } catch (error) {
      next(error);
    }
  }
);

userAuthRouter.post("/like/create", async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    const user_id = req.body.user_id;
    const exercises = req.body.exercises;
    const foods = req.body.foods;

    // 위 데이터를 유저 db에 추가하기
    const newLike = await likeService.addLike({
      user_id,
      exercises,
      foods,
    });

    if (newLike.errorMessage) {
      throw new Error(newLike.errorMessage);
    }

    res.status(201).json(newLike);
  } catch (error) {
    next(error);
  }
});

export { likeRouter };
