import { Diet } from "../db";
import { v4 as uuidv4 } from "uuid";

class dietService {
  static async addItem({ userId, whenDate, type, category, volume }) {
    if (
      whenDate === undefined ||
      type === undefined ||
      category === undefined ||
      volume === undefined
    ) {
      const errorMessage =
        "whenDate, type, category, volume을 모두 입력해주세요";
      throw new Error(errorMessage);
    }

    const typeList = ["breakfast", "lunch", "dinner"];

    if (!typeList.includes(type)) {
      const errorMessage = "breakfast, lunch, dinner 중에서만 입력해주세요";
      throw new Error(errorMessage);
    }

    const categoryList = [
      "견과류",
      "치즈",
      "잼/버터",
      "케이크류",
      "면류",
      "빵류",
      "육류",
      "유제품",
      "채소",
      "콩류",
      "주류",
      "해산물",
      "과일",
      "스프",
      "사탕",
      "패스트푸드",
      "음료(알코올x)",
      "시리얼",
      "아이스크림",
      "감자류",
    ];

    if (!categoryList.includes(category)) {
      const errorMessage = "카테고리를 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    const itemId = uuidv4();
    const newItem = { itemId, userId, whenDate, type, category, volume };

    const createdNewItem = await Diet.create({ newItem });
    createdNewItem.errorMessage = null;

    return createdNewItem;
  }

  static async getItem({ itemId }) {
    const item = await Diet.findByItemId({ itemId });
    if (!item) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }
    return item;
  }

  static async getItemListByDate({ userId, whenDate }) {
    const itemList = await Diet.findByDate({
      userId,
      whenDate,
    });
    return itemList;
  }

  static async getItemListByType({ userId, whenDate, type }) {
    const itemList = await Diet.findByDateAndType({
      userId,
      whenDate,
      type,
    });
    return itemList;
  }

  static async setItem({ itemId, toUpdate }) {
    let item = await Diet.findByItemId({ itemId });
    if (!item) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    const categoryList = [
      "견과류",
      "치즈",
      "잼/버터",
      "케이크류",
      "면류",
      "빵류",
      "육류",
      "유제품",
      "채소",
      "콩류",
      "주류",
      "해산물",
      "과일",
      "스프",
      "사탕",
      "패스트푸드",
      "음료(알코올x)",
      "시리얼",
      "아이스크림",
      "감자류",
    ];

    if (!categoryList.includes(toUpdate.category)) {
      const errorMessage = "카테고리를 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    if (toUpdate.category) {
      const fieldToUpdate = "category";
      const newValue = toUpdate.category;
      item = await Diet.update({
        itemId,
        fieldToUpdate,
        newValue,
      });
    }

    if (toUpdate.volume) {
      const fieldToUpdate = "volume";
      const newValue = toUpdate.volume;
      item = await Diet.update({
        itemId,
        fieldToUpdate,
        newValue,
      });
    }

    return item;
  }

  static async deleteItem({ itemId }) {
    const deletedResult = await Diet.deleteByItemId({ itemId });
    if (!deletedResult) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    return deletedResult;
  }

  static async deleteItemList({ userId }) {
    await Diet.deleteByUserId({ userId });
  }
}
export { dietService };
