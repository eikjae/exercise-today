import { Like } from "../db";

class likeService {
  static async setLike({ user_id, toUpdate }) {
    let likeInfo = await Like.findByUserId({ user_id });

    if (!likeInfo) {
      const errorMessage =
        "정보가 없습니다. user_id 값을 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const fieldToUpdate = "exercise";
    const exercisesInfo = likeInfo.exercise;
    const newValue = {};
    if (toUpdate.exercise in exercisesInfo) {
      const d = exercisesInfo.length;
      for (let i = 0; i < d; i++) {
        if (exercisesInfo[i] == toUpdate.exercise) {
          exercisesInfo.splice(i, 1);
          break;
        }
      }
      newValue = exercisesInfo;
    } else {
      exercisesInfo = exercisesInfo.push(toUpdate.exercise);
    }
    newValue = exercisesInfo;
    user = await User.update({ user_id, fieldToUpdate, newValue });

    return user;
  }

  static async addLike({ user_id }) {
    const isExistlikeInfo = await Like.findByUserId({ user_id });
    if (isExistlikeInfo) {
      const errorMessage =
        "user_id에 대한 likeInfo가 이미 존재합니다.";
      return { errorMessage };
    }

    const newUser = { user_id };
    const likeInfo = await Like.create({ newUser });

    return likeInfo;
  }
}

export { likeService };
