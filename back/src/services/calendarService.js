import { Diet, Workout, Attendance, DietImage, Calendar } from "../db";
import { v4 as uuidv4 } from "uuid";

class calendarService {
  static async addItem({ userId, whenDate, calorieArray }) {
    if (whenDate === undefined || calorieArray === undefined) {
      const errorMessage = "whenDate, calorieArray를 모두 입력해주세요";
      throw new Error(errorMessage);
    }

    const itemId = uuidv4();

    const titleList = ["아침  +", "점심  +", "저녁  +", "운동  -"];
    const startList = ["T08:00:00", "T13:00:00", "T18:00:00", "T20:00:00"];
    const colorList = ["yellow", "pink", "orange", "red"];
    const calories = [];
    for (let i = 0; i < calorieArray.length; i++) {
      const subSchema = {
        title: `${titleList[i]}${calorieArray[i]}`,
        start: `${whenDate}${startList[i]}`,
        backgroundColor: `${colorList[i]}`,
      };
      calories.push(subSchema);
    }
    console.log(calories);
    const newItem = { itemId, userId, whenDate, calories };

    const createdNewItem = await Calendar.create({ newItem });
    createdNewItem.errorMessage = null;

    return createdNewItem;
  }

  static async getCalories({ userId, whenDate }) {
    const item = await Calendar.findCalories({
      userId,
      whenDate,
    });
    if (!item) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }
    return item;
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

  static async setItem({ userId, whenDate, calorieArray }) {
    let item = await Calendar.findByDate({ userId, whenDate });
    if (!item) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    if (calorieArray === undefined) {
      const errorMessage = "calorieArray를 입력해주세요.";
      throw new Error(errorMessage);
    }

    const titleList = ["아침  +", "점심  +", "저녁  +", "운동  -"];
    const startList = ["T08:00:00", "T13:00:00", "T18:00:00", "T20:00:00"];
    const colorList = ["yellow", "pink", "orange", "red"];
    const calories = [];
    for (let i = 0; i < calorieArray.length; i++) {
      const subSchema = {
        title: `${titleList[i]}${calorieArray[i]}`,
        start: `${whenDate}${startList[i]}`,
        backgroundColor: `${colorList[i]}`,
      };
      calories.push(subSchema);
    }

    const fieldToUpdate = "calories";
    const newValue = calories;
    item = await Calendar.update({
      userId,
      whenDate,
      fieldToUpdate,
      newValue,
    });

    return item;
  }

  static async deleteItem({ itemId }) {
    const deletedResult = await Calendar.deleteByItemId({ itemId });
    if (!deletedResult) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    return deletedResult;
  }

  static async deleteItemList({ userId }) {
    await Calendar.deleteByUserId({ userId });
  }
}
export { calendarService };
