import { Like } from "../db";

class likeService {

  static async addLike({ user_id }) {
    const existLikeInfo = await Like.findByUserId({ user_id });
    if (existLikeInfo) {
      const errorMessage =
        "user_id에 대한 likeInfo가 이미 존재합니다.";
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

    const fieldToUpdate = "exercises";
    let exercisesInfo = likeInfo.exercises;
    let newValue = {};
    if (exercisesInfo.includes(toUpdate.exercise)) {
      const d = exercisesInfo.length;
      for (let i = 0; i < d; i++) {
        if (exercisesInfo[i] == toUpdate.exercise) {
          exercisesInfo.splice(i, 1);
          break;
        }
      }
      newValue = exercisesInfo;
    } else {
      exercisesInfo.push(toUpdate.exercise);
    }
    newValue = exercisesInfo;
    const updatedLike = await Like.update({ user_id, fieldToUpdate, newValue });

    return updatedLike;
  }

  static async setLikeFood({ user_id, toUpdate }) {
    let likeInfo = await Like.findByUserId({ user_id });

    if (!likeInfo) {
      const errorMessage =
        "정보가 없습니다. user_id 값을 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const fieldToUpdate = "foods";
    let foodsInfo = likeInfo.foods;
    let newValue = {};
    if (foodsInfo.includes(toUpdate.food)) {
      const d = foodsInfo.length;
      for (let i = 0; i < d; i++) {
        if (foodsInfo[i] == toUpdate.food) {
          foodsInfo.splice(i, 1);
          break;
        }
      }
      newValue = foodsInfo;
    } else {
      foodsInfo.push(toUpdate.food);
    }
    newValue = foodsInfo;
    const updatedLike = await Like.update({ user_id, fieldToUpdate, newValue });

    return updatedLike;
  }

  static async setLikePerson({ user_id, toUpdate }) {
    let likeInfo = await Like.findByUserId({ user_id });

    if (!likeInfo) {
      const errorMessage =
        "정보가 없습니다. user_id 값을 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const fieldToUpdate = "people";
    let peopleInfo = likeInfo.people;
    let newValue = {};
    if (peopleInfo.includes(toUpdate.person)) {
      const d = peopleInfo.length;
      for (let i = 0; i < d; i++) {
        if (peopleInfo[i] == toUpdate.person) {
          peopleInfo.splice(i, 1);
          break;
        }
      }
      newValue = peopleInfo;
    } else {
      peopleInfo.push(toUpdate.person);
    }
    newValue = peopleInfo;
    const updatedLike = await Like.update({ user_id, fieldToUpdate, newValue });

    return updatedLike;
  }

  static async setLikeMusic({ user_id, toUpdate }) {
    let likeInfo = await Like.findByUserId({ user_id });

    if (!likeInfo) {
      const errorMessage =
        "정보가 없습니다. user_id 값을 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const fieldToUpdate = "musics";
    let musicsInfo = likeInfo.musics;
    let newValue = {};
    if (musicsInfo.includes(toUpdate.music)) {
      const d = musicsInfo.length;
      for (let i = 0; i < d; i++) {
        if (musicsInfo[i] == toUpdate.music) {
          musicsInfo.splice(i, 1);
          break;
        }
      }
      newValue = musicsInfo;
    } else {
      musicsInfo.push(toUpdate.music);
    }
    newValue = musicsInfo;
    const updatedLike = await Like.update({ user_id, fieldToUpdate, newValue });

    return updatedLike;
  }
}

export { likeService };
