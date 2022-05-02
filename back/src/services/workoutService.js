import { Workout } from "../db";
import { v4 as uuidv4 } from "uuid";

class workoutService {
  static async addItem({ userId, whenDate, category, name, time }) {
    if (
      whenDate === undefined ||
      category === undefined ||
      name === undefined ||
      time === undefined
    ) {
      const errorMessage = "whenDate, category, name, time을 모두 입력해주세요";
      throw new Error(errorMessage);
    }

    const categoryList = [
      "유산소",
      "무산소",
      "구기",
      "라켓",
      "육상",
      "수상",
      "댄스",
      "사이클",
      "양궁",
      "복싱",
      "격투",
      "기타",
    ];

    if (!categoryList.includes(category)) {
      const errorMessage = "카테고리를 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    const itemId = uuidv4();
    const newItem = { itemId, userId, whenDate, category, name, time };

    const createdNewItem = await Workout.create({ newItem });
    createdNewItem.errorMessage = null;

    return createdNewItem;
  }

  static async getItem({ itemId }) {
    const item = await Workout.findByItemId({ itemId });
    if (!item) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }
    return item;
  }

  static async getItemList({ userId, whenDate }) {
    const itemList = await Workout.findByDate({
      userId,
      whenDate,
    });
    return itemList;
  }

  static async setItem({ itemId, toUpdate }) {
    let item = await Workout.findByItemId({ itemId });
    if (!item) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    const categoryList = [
      "유산소",
      "무산소",
      "구기",
      "라켓",
      "육상",
      "수상",
      "댄스",
      "사이클",
      "양궁",
      "복싱",
      "격투",
      "기타",
    ];

    if (!categoryList.includes(toUpdate.category)) {
      const errorMessage = "카테고리를 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    if (toUpdate.category) {
      const fieldToUpdate = "category";
      const newValue = toUpdate.category;
      item = await Workout.update({
        itemId,
        fieldToUpdate,
        newValue,
      });
    }

    if (toUpdate.name) {
      const fieldToUpdate = "name";
      const newValue = toUpdate.name;
      item = await Workout.update({
        itemId,
        fieldToUpdate,
        newValue,
      });
    }

    if (toUpdate.time) {
      const fieldToUpdate = "time";
      const newValue = toUpdate.time;
      item = await Workout.update({
        itemId,
        fieldToUpdate,
        newValue,
      });
    }

    return item;
  }

  static async deleteItem({ itemId }) {
    const deletedResult = await Workout.deleteByItemId({ itemId });
    if (!deletedResult) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    return deletedResult;
  }

  static async deleteItemList({ userId }) {
    await Workout.deleteByUserId({ userId });
  }
}
export { workoutService };
