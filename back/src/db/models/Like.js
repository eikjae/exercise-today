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
}

export { Like };
