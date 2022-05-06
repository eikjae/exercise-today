import { Router } from "express";
import { exerciseService } from "../services/exerciseService";
import { categoryList } from "../lists/categoryList";

const exerciseRouter = Router();

exerciseRouter.post("/exercise/bmi", async function (req, res, next) {
  try {
    const height = req.body.height;
    const weight = req.body.weight;

    const newBmi = await exerciseService.calculateBmi({
      height,
      weight,
    });

    if (newBmi.errorMessage) {
      throw new Error(newBmi.errorMessage);
    }

    res.status(200).json(newBmi);
  } catch (error) {
    next(error);
  }
});

exerciseRouter.post("/exercise/calories", async function (req, res, next) {
  try {
    const weight = req.body.weight;
    const name = req.body.name;
    const time = req.body.time;

    const newCalories = await exerciseService.calculateCalories({
      weight,
      name,
      time,
    });

    if (newCalories.errorMessage) {
      throw new Error(newCalories.errorMessage);
    }

    res.status(200).json(newCalories);
  } catch (error) {
    next(error);
  }
});

exerciseRouter.post("/exercise/timeinfo", async function (req, res, next) {
  try {
    const weight = req.body.weight;
    const category = req.body.category;
    const calories = req.body.calories;

    const exerciseList = await exerciseService.timeinfo({
      weight,
      category,
      calories,
    });

    if (exerciseList.errorMessage) {
      throw new Error(exerciseList.errorMessage);
    }

    res.status(200).json(exerciseList);
  } catch (error) {
    next(error);
  }
});

exerciseRouter.get("/exercise/categorylist", async function (req, res, next) {
  try {
    res.status(200).json(categoryList());
  } catch (error) {
    next(error);
  }
});

exerciseRouter.get(
  "/exercise/exerciselist/:category",
  async function (req, res, next) {
    try {
      const category = req.params.category;

      const exerciseList = await exerciseService.exerciseList({
        category,
      });

      if (exerciseList.errorMessage) {
        throw new Error(exerciseList.errorMessage);
      }

      res.status(200).json(exerciseList);
    } catch (error) {
      next(error);
    }
  }
);

export { exerciseRouter };
