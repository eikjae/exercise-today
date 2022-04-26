import { TargetExercise } from "../db";

class targetExerciseService {
  static async extractTarget({ bodyPart }) {
    const exercises = await TargetExercise.findByBodyPart({
      bodyPart,
    });

    if (exercises === []) {
      const errorMessage = "부위를 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const targetList = [...new Set(exercises.map((x) => x["target"]))];
    return targetList;
  }

  static async extractEquipment({ bodyPart, target }) {
    const exercises = await TargetExercise.findByBodyPartAndTarget({
      bodyPart,
      target,
    });

    if (exercises === []) {
      const errorMessage = "부위와 타겟 이름을 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const equipmentList = [...new Set(exercises.map((x) => x["equipment"]))];
    return equipmentList;
  }

  static async fromPartAndTool({ bodyPart, equipment, target }) {
    let targetExerciseList = await TargetExercise.findTargetExercises({
      bodyPart,
      equipment,
      target,
    });

    if (!targetExerciseList || targetExerciseList.length === 0) {
      const errorMessage =
        "부위와 장비 이름, 타켓 이름을 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    if (targetExerciseList.length > 5) {
      targetExerciseList = targetExerciseList.slice(0, 5);
    }
    return targetExerciseList;
  }
}

export { targetExerciseService };
