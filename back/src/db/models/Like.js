import { LikeModel } from "../schemas/like";

class Like {
  static async findByUserId({ user_id }) {
    const likeInfo = await LikeModel.findOne({ user_id });
    return likeInfo;
  }

  static async create({ newUser }) {
    const likeInfo = await LikeModel.create(newUser);
    return likeInfo;
  }

  static async update({ user_id, fieldToUpdate, newValue }) {
    const filter = { user_id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedLike = await LikeModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedLike;
  }
}

export { Like };
