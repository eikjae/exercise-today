import { Router } from "express";
import { targetExerciseService } from "../services/targetExerciseService";

const targetExerciseRouter = Router();

targetExerciseRouter.post(
  "/exercise/partandtool",
  async function (req, res, next) {
    try {
      const bodyPart = req.body.bodyPart;
      const equipment = req.body.equipment;

      const targetExerciseList = await targetExerciseService.fromPartAndTool({
        bodyPart,
        equipment,
      });

      if (targetExerciseList.errorMessage) {
        throw new Error(targetExerciseList.errorMessage);
      }

      res.status(200).json(targetExerciseList);
    } catch (error) {
      next(error);
    }
  }
);

export { targetExerciseRouter };
