import { Like, TargetExercise, Food, User, Music } from "../db";
import { LikeModel } from "../db/schemas/like";

class likeService {
  static async addLike({ user_id }) {
    const existLikeInfo = await Like.findByUserId({ user_id });
    if (existLikeInfo) {
      const errorMessage = "user_id에 대한 likeInfo가 이미 존재합니다.";
      return { errorMessage };
    }

    const newUser = { user_id };
    const likeInfo = await Like.create({ newUser });

    return likeInfo;
  }

  static async setLikeExercise({ user_id, toUpdate }) {
    let likeInfo = await Like.findByUserId({ user_id });

    if (!likeInfo) {
      const errorMessage =
        "정보가 없습니다. user_id 값을 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    let exercisesInfo = likeInfo.exercises;
    let newValue = {};
    const index = exercisesInfo.findIndex((f) => f === toUpdate.exercise);
    if (index > -1) {
      exercisesInfo.splice(index, 1);
    } else {
      exercisesInfo.push(toUpdate.exercise);
    }
    newValue = exercisesInfo;
    const updatedLike = await LikeModel.findOneAndUpdate(
      { user_id },
      { $set: { exercises: newValue } },
      { returnOriginal: false }
    );

    return updatedLike;
  }

  static async setLikeFood({ user_id, toUpdate }) {
    let likeInfo = await Like.findByUserId({ user_id });

    if (!likeInfo) {
      const errorMessage =
        "정보가 없습니다. user_id 값을 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    let foodsInfo = likeInfo.foods;
    let newValue = {};

    const index = foodsInfo.findIndex((f) => f === toUpdate.food);
    if (index > -1) {
      foodsInfo.splice(index, 1);
    } else {
      foodsInfo.push(toUpdate.food);
    }
    newValue = foodsInfo;
    const updatedLike = await LikeModel.findOneAndUpdate(
      { user_id },
      { $set: { foods: newValue } },
      { returnOriginal: false }
    );

    return updatedLike;
  }

  static async setLikePerson({ user_id, toUpdate }) {
    let likeInfo = await Like.findByUserId({ user_id });

    if (!likeInfo) {
      const errorMessage =
        "정보가 없습니다. user_id 값을 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    let peopleInfo = likeInfo.people;
    let newValue = {};
    const index = peopleInfo.findIndex((f) => f === toUpdate.person);
    if (index > -1) {
      peopleInfo.splice(index, 1);
    } else {
      peopleInfo.push(toUpdate.person);
    }
    newValue = peopleInfo;
    const updatedLike = await LikeModel.findOneAndUpdate(
      { user_id },
      { $set: { people: newValue } },
      { returnOriginal: false }
    );

    return updatedLike;
  }

  static async setLikeMusic({ user_id, toUpdate }) {
    let likeInfo = await Like.findByUserId({ user_id });

    if (!likeInfo) {
      const errorMessage =
        "정보가 없습니다. user_id 값을 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    let musicsInfo = likeInfo.musics;
    let newValue = {};
    const index = musicsInfo.findIndex((f) => f === toUpdate.music);
    if (index > -1) {
      musicsInfo.splice(index, 1);
    } else {
      musicsInfo.push(toUpdate.music);
    }
    newValue = musicsInfo;
    const updatedLike = await LikeModel.findOneAndUpdate(
      { user_id },
      { $set: { musics: newValue } },
      { returnOriginal: false }
    );

    return updatedLike;
  }

  static async getLikeExercise({ user_id }) {
    const LikeInfo = await Like.findByUserId({ user_id });
    if (!LikeInfo) {
      const errorMessage = "user_id에 대한 likeInfo가 존재하지 않습니다.";
      return { errorMessage };
    }

    const LikeExercises = LikeInfo.exercises;

    return LikeExercises;
  }

  static async getLikeFood({ user_id }) {
    const LikeInfo = await Like.findByUserId({ user_id });
    if (!LikeInfo) {
      const errorMessage = "user_id에 대한 likeInfo가 존재하지 않습니다.";
      return { errorMessage };
    }

    const LikeFoods = LikeInfo.foods;

    return LikeFoods;
  }

  static async getLikePeople({ user_id }) {
    const LikeInfo = await Like.findByUserId({ user_id });
    if (!LikeInfo) {
      const errorMessage = "user_id에 대한 likeInfo가 존재하지 않습니다.";
      return { errorMessage };
    }

    const LikePeople = LikeInfo.people;

    return LikePeople;
  }

  static async getLikeMusic({ user_id }) {
    const LikeInfo = await Like.findByUserId({ user_id });
    if (!LikeInfo) {
      const errorMessage = "user_id에 대한 likeInfo가 존재하지 않습니다.";
      return { errorMessage };
    }

    const LikeMusics = LikeInfo.musics;

    return LikeMusics;
  }

  static async getLike({ user_id }) {
    const LikeInfo = await Like.findByUserId({ user_id });
    if (!LikeInfo) {
      const errorMessage = "user_id에 대한 likeInfo가 존재하지 않습니다.";
      return { errorMessage };
    }

    return LikeInfo;
  }

  static async getLikeExerciseInfo({ user_id }) {
    const LikeInfo = await Like.findByUserId({ user_id });
    if (!LikeInfo) {
      const errorMessage = "user_id에 대한 likeInfo가 존재하지 않습니다.";
      return { errorMessage };
    }

    let InfoList = [];

    for (let i = 0; i < LikeInfo.exercises.length; i++) {
      const name = LikeInfo.exercises[i];
      const LikeExerciseInfo = await TargetExercise.findByName({ name });
      InfoList.push(LikeExerciseInfo);
    }

    return InfoList;
  }

  static async getLikeFoodInfo({ user_id }) {
    const LikeInfo = await Like.findByUserId({ user_id });
    if (!LikeInfo) {
      const errorMessage = "user_id에 대한 likeInfo가 존재하지 않습니다.";
      return { errorMessage };
    }

    let InfoList = [];

    for (let i = 0; i < LikeInfo.foods.length; i++) {
      const category = LikeInfo.foods[i];

      const LikeFoodInfo = await Food.findByName({ category });
      console.log("LikeFoodInfo:", LikeFoodInfo);
      InfoList.push(LikeFoodInfo);
    }

    return InfoList;
  }

  static async getLikePersonInfo({ user_id }) {
    const LikeInfo = await Like.findByUserId({ user_id });
    if (!LikeInfo) {
      const errorMessage = "user_id에 대한 likeInfo가 존재하지 않습니다.";
      return { errorMessage };
    }

    let InfoList = [];

    for (let i = 0; i < LikeInfo.people.length; i++) {
      const user_id = LikeInfo.people[i];
      const LikePersonInfo = await User.findByLikeId({ user_id });
      InfoList.push(LikePersonInfo);
    }

    return InfoList;
  }

  static async getLikeMusicInfo({ user_id }) {
    const LikeInfo = await Like.findByUserId({ user_id });
    if (!LikeInfo) {
      const errorMessage = "user_id에 대한 likeInfo가 존재하지 않습니다.";
      return { errorMessage };
    }

    let InfoList = [];

    for (let i = 0; i < LikeInfo.musics.length; i++) {
      const musicId = LikeInfo.musics[i];
      const LikeMusicInfo = await Music.findByMusicId({ musicId });
      InfoList.push(LikeMusicInfo);
    }

    return InfoList;
  }
}

export { likeService };
