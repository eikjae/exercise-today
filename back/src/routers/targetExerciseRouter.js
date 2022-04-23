import { Router } from "express";
import { targetExerciseService } from "../services/targetExerciseService";

const targetExerciseRouter = Router();

targetExerciseRouter.post(
  "/exercise/partandtool",
  async function (req, res, next) {
    try {
      const bodyPart = req.body.bodyPart;
      const equipment = req.body.equipment;
      const target = req.body.target;

      const targetExerciseList = await targetExerciseService.fromPartAndTool({
        bodyPart,
        equipment,
        target
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

targetExerciseRouter.post(
    "/exercise/findtarget",
    async function (req, res, next) {
      try {
        const bodyPart = req.body.bodyPart;
  
        const targetList = await targetExerciseService.extractTarget({
          bodyPart,
        });
  
        if (targetList.errorMessage) {
          throw new Error(targetList.errorMessage);
        }
  
        res.status(200).json(targetList);
      } catch (error) {
        next(error);
      }
    }
);

targetExerciseRouter.post(
    "/exercise/findequipment",
    async function (req, res, next) {
      try {
        const bodyPart = req.body.bodyPart;
        const target = req.body.target;
  
        const equipmentList = await targetExerciseService.extractEquipment({
          bodyPart,
          target
        });
  
        if (equipmentList.errorMessage) {
          throw new Error(equipmentList.errorMessage);
        }
  
        res.status(200).json(equipmentList);
      } catch (error) {
        next(error);
      }
    }
);

export { targetExerciseRouter };
