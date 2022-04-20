import { Exercise } from "../db";
import { v4 as uuidv4 } from "uuid";

class exerciseService {
  static async calculateBmi({ height, weight }) {
    const bmi = weight / (height * 0.01) ** 2;
    const refind_bmi = bmi.toFixed(2);
    if (refind_bmi == "NaN") {
      const errorMessage = "키와 몸무게를 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return refind_bmi;
  }
}

export { exerciseService };
