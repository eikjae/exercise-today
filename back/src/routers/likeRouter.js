import { Router } from "express";
import { likeService } from "../services/likeService";
import { login_required } from "../middlewares/login_required";

const likeRouter = Router();

likeRouter.post("/like/create", async function (req, res, next) {
  try {
    const user_id = req.body.user_id;
    const newLike = await likeService.addLike({
      user_id,
    });

    if (newLike.errorMessage) {
      throw new Error(newLike.errorMessage);
    }

    res.status(201).json(newLike);
  } catch (error) {
    next(error);
  }
});

likeRouter.put(
  "/like/exercise",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.currentUserId;
      const exercise = req.body.exercise;

      const toUpdate = { exercise };
      const updatedLikeInfo = await likeService.setLikeExercise({ user_id, toUpdate });

      if (updatedLikeInfo.errorMessage) {
        throw new Error(updatedLikeInfo.errorMessage);
      }

      res.status(200).json(updatedLikeInfo);
    } catch (error) {
      next(error);
    }
  }
);

likeRouter.put(
  "/like/food",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.currentUserId;
      const food = req.body.food;

      const toUpdate = { food };
      const updatedLikeInfo = await likeService.setLikeFood({ user_id, toUpdate });

      if (updatedLikeInfo.errorMessage) {
        throw new Error(updatedLikeInfo.errorMessage);
      }

      res.status(200).json(updatedLikeInfo);
    } catch (error) {
      next(error);
    }
  }
);

likeRouter.put(
  "/like/person",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.currentUserId;
      const person = req.body.person;

      const toUpdate = { person };
      const updatedLikeInfo = await likeService.setLikePerson({ user_id, toUpdate });

      if (updatedLikeInfo.errorMessage) {
        throw new Error(updatedLikeInfo.errorMessage);
      }

      res.status(200).json(updatedLikeInfo);
    } catch (error) {
      next(error);
    }
  }
);

likeRouter.put(
  "/like/music",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.currentUserId;
      const music = req.body.music;

      const toUpdate = { music };
      const updatedLikeInfo = await likeService.setLikeMusic({ user_id, toUpdate });

      if (updatedLikeInfo.errorMessage) {
        throw new Error(updatedLikeInfo.errorMessage);
      }

      res.status(200).json(updatedLikeInfo);
    } catch (error) {
      next(error);
    }
  }
);

export { likeRouter };
