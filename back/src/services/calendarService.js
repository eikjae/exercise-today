import { Diet, Workout, Attendance, DietImage, Calendar } from "../db";
import { v4 as uuidv4 } from "uuid";
import {
  titleList,
  startList,
  colorList,
  typeList,
  foodCategoryList,
  exerciesCategoryList,
} from "../utils/lookup";

class calendarService {
  static async addCalories({ userId, whenDate, calorieArray }) {
    if (!whenDate || !calorieArray) {
      const errorMessage = "whenDate, calorieArray를 모두 입력해주세요";
      throw new Error(errorMessage);
    }

    if (calorieArray.length !== 4) {
      const errorMessage = "calorieArray 길이를 확인해주세요.";
      throw new Error(errorMessage);
    }

    await Calendar.deleteByDate({ userId, whenDate });

    const itemId = uuidv4();

    const calories = [];
    for (let i = 0; i < calorieArray.length; i++) {
      const subSchema = {
        type: `${typeList[i]}`,
        calorie: `${calorieArray[i]}`,
        title: `${titleList[i]}${calorieArray[i]}`,
        start: `${whenDate}${startList[i]}`,
        backgroundColor: `${colorList[i]}`,
      };
      calories.push(subSchema);
    }
    const newItem = { itemId, userId, whenDate, calories };

    const createdNewItem = await Calendar.create({ newItem });
    createdNewItem.errorMessage = null;

    return createdNewItem;
  }

  static async getCaloriesByDate({ userId, whenDate }) {
    const item = await Calendar.findCaloriesByDate({
      userId,
      whenDate,
    });
    if (!item) {
      return [];
    }
    return item;
  }

  static async getCaloriesByMonth({ userId, whenMonth }) {
    const searchOpt = {
      $gte: `${whenMonth}-01T00:00:00.000Z`,
      $lte: `${whenMonth}-31T00:00:00.000Z`,
    };
    const items = await Calendar.findCaloriesByMonth({
      userId,
      whenDate: searchOpt,
    });
    if (!items) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    const itemList = items.reduce((acc, cur) => {
      acc = acc.concat(cur.calories);
      return acc;
    }, []);
    return itemList;
  }

  static async deleteCalories({ itemId }) {
    const deletedResult = await Calendar.deleteByItemId({ itemId });
    if (!deletedResult) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    return deletedResult;
  }

  static async deleteCaloriesList({ userId }) {
    await Calendar.deleteByUserId({ userId });
  }

  static async addItemList({ userId, whenDate, itemArray }) {
    if (!whenDate || !itemArray) {
      const errorMessage = "whenDate, itemArray를 모두 입력해주세요";
      throw new Error(errorMessage);
    }

    if (!itemArray.diet) {
      const errorMessage = "itemArray에 diet값을 입력해주세요";
      throw new Error(errorMessage);
    }

    if (!itemArray.workout) {
      const errorMessage = "itemArray에 workout값을 입력해주세요";
      throw new Error(errorMessage);
    }

    for (const { type, category, volume } of itemArray.diet) {
      if (!type || !category || !volume) {
        const errorMessage = "type, category, volume을 모두 입력해주세요";
        throw new Error(errorMessage);
      }

      if (!typeList.includes(type)) {
        const errorMessage = "breakfast, lunch, dinner 중에서만 입력해주세요";
        throw new Error(errorMessage);
      }

      if (!foodCategoryList.includes(category)) {
        const errorMessage = "카테고리를 다시 한 번 확인해 주세요.";
        throw new Error(errorMessage);
      }
    }

    for (const { category, name, time } of itemArray.workout) {
      if (!category || !name || !time) {
        const errorMessage = "category, name, time을 모두 입력해주세요";
        throw new Error(errorMessage);
      }

      if (!exerciesCategoryList.includes(category)) {
        const errorMessage = "카테고리를 다시 한 번 확인해 주세요.";
        throw new Error(errorMessage);
      }
    }

    await Diet.deleteByDate({ userId, whenDate });
    for (const { type, category, volume } of itemArray.diet) {
      const newItem = { userId, whenDate, type, category, volume };
      await Diet.create({ newItem });
    }

    await Workout.deleteByDate({ userId, whenDate });
    for (const { category, name, time } of itemArray.workout) {
      const newItem = { userId, whenDate, category, name, time };
      await Workout.create({ newItem });
    }
  }

  static async getItemList({ userId, whenDate }) {
    const itemList1 = await Attendance.findByDate({ userId, whenDate });
    const itemList2 = await DietImage.findByDate({ userId, whenDate });
    const itemList3 = await Diet.findByDate({ userId, whenDate });
    const itemList4 = await Workout.findByDate({ userId, whenDate });
    const itemAll = {
      attendance: itemList1,
      dietimage: itemList2,
      diet: itemList3,
      workout: itemList4,
    };

    return itemAll;
  }
}

export { calendarService };
