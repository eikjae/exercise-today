import { Router } from "express";
import { musicService } from "../services/musicService";
import { music_filtered_validation } from "../utils/music";
const musicRouter = Router();

musicRouter.get("/musics", async function (req, res, next) {
  try {
    const musics = await musicService.getMusics();
    res.status(200).json(musics);
  } catch (error) {
    next(error);
  }
});

musicRouter.post("/musics/filtered", async function (req, res, next) {
  try {
    music_filtered_validation(req.body);

    const filter = req.body.filter;
    const orderby = req.body.orderby;
    const limit = req.body.limit;

    const filteredMusics = await musicService.getMusicsBy({
      filter,
      orderby,
      limit,
    });
    res.status(200).json(filteredMusics);
  } catch (error) {
    next(error);
  }
});

musicRouter.post("/musics/recommendation", async function (req, res, next) {
  try {
    // music_recommendation_validation(req.body);

    const exercise = req.body.exercise;
    const limit = req.body.limit;
    const musics = await musicService.getMusicsRecommendation({
      exercise,
      limit,
    });
    res.status(200).json(musics);
  } catch (error) {
    next(error);
  }
});

export { musicRouter };
