import { Router } from "express";
import { targetExerciseService } from "../services/targetExerciseService";

const targetExerciseRouter = Router();

targetExerciseRouter.post(
  "/exercise/findtargets",
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
  "/exercise/findequipments",
  async function (req, res, next) {
    try {
      const bodyPart = req.body.bodyPart;
      const target = req.body.target;

      const equipmentList = await targetExerciseService.extractEquipment({
        bodyPart,
        target,
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

targetExerciseRouter.post(
  "/exercise/findpartexercises",
  async function (req, res, next) {
    try {
      const bodyPart = req.body.bodyPart;
      const equipment = req.body.equipment;
      const target = req.body.target;

      const targetExerciseList = await targetExerciseService.fromPartAndTool({
        bodyPart,
        equipment,
        target,
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

targetExerciseRouter.get(
  "/exercise/bodypartlist",
  async function (req, res, next) {
    try {
      const bodypartList = [
        "허리",
        "윗 다리",
        "아랫 다리",
        "등",
        "가슴",
        "윗 팔",
        "아랫 팔",
        "전신",
        "어깨",
        "목",
      ];

      res.status(200).json(bodypartList);
    } catch (error) {
      next(error);
    }
  }
);

export { targetExerciseRouter };
