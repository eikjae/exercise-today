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
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }
    // 선택한 음식들의 정보가 배열로 들어옴
    // [{"category":"감자류","volume":100},{"category":"유제품","volume":200}]
    const foodsInfo = req.body;
    const calories = await foodService.calculateCalories({ foodsInfo });

    if (calories.errorMessage) {
      throw new Error(calories.errorMessage);
    }

    res.status(200).send({ calories });
  } catch (error) {
    next(error);
  }
});

export { foodRouter };
