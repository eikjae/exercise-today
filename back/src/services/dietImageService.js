import { DietImage } from "../db";
import { v4 as uuidv4 } from "uuid";

class dietImageService {
  static async addItem({ userId, whenDate, type, imgurl }) {
    if (whenDate === undefined || type === undefined || imgurl === undefined) {
      const errorMessage = "whenDate, type, imgurl을 모두 입력해주세요";
      throw new Error(errorMessage);
    }

    const item = await DietImage.findByDateAndType({
      userId,
      whenDate,
      type,
    });
    if (item) {
      const errorMessage = "이미 사진이 있습니다. 수정을 통해 변경해주세요";
      throw new Error(errorMessage);
    }

    const typeList = ["breakfast", "lunch", "dinner"];

    if (!typeList.includes(type)) {
      const errorMessage = "breakfast, lunch, dinner 중에서만 입력해주세요";
      throw new Error(errorMessage);
    }

    const itemId = uuidv4();
    const newItem = { itemId, userId, whenDate, type, imgurl };

    const createdNewItem = await DietImage.create({ newItem });
    createdNewItem.errorMessage = null;

    return createdNewItem;
  }

  static async getItem({ itemId }) {
    const item = await DietImage.findByItemId({ itemId });
    if (!item) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }
    return item;
  }

  static async getItemListByDate({ userId, whenDate }) {
    const item = await DietImage.findByDate({
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

  static async getItemListByType({ userId, whenDate, type }) {
    const item = await DietImage.findByDateAndType({
      userId,
      whenDate,
      type,
    });
    if (!item) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }
    return item;
  }

  static async setItem({ itemId, toUpdate }) {
    let item = await DietImage.findByItemId({ itemId });
    if (!item) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    if (toUpdate.imgurl) {
      const fieldToUpdate = "imgurl";
      const newValue = toUpdate.imgurl;
      item = await DietImage.update({
        itemId,
        fieldToUpdate,
        newValue,
      });
    }

    return item;
  }

  static async deleteItem({ itemId }) {
    const deletedResult = await DietImage.deleteByItemId({ itemId });
    if (!deletedResult) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    return deletedResult;
  }

  static async deleteItemList({ userId }) {
    await DietImage.deleteByUserId({ userId });
  }
}
export { dietImageService };
