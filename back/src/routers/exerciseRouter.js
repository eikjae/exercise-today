import { Router } from "express";
import { exerciseService } from "../services/exerciseService";

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

export { exerciseRouter };
