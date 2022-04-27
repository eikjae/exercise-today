import is from "@sindresorhus/is";
import { Router } from "express";
import { foodService } from "../services/foodService";

const foodRouter = Router();

foodRouter.get("/foods", async function (req, res, next) {
  try {
    const foodsCategory = await foodService.getFoods();
    res.status(200).send(foodsCategory);
  } catch (error) {
    next(error);
  }
});

foodRouter.post("/foods/calories", async function (req, res, next) {
  try {
    const foodsInfo = req.body;
    const calories = await foodService.calculateCalories({ foodsInfo });

    res.status(200).send({ calories });
  } catch (error) {
    next(error);
  }
});

export { foodRouter };
