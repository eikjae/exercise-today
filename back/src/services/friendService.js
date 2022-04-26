import { Friend } from "../db";
import { v4 as uuidv4 } from "uuid";

class FriendService {
  static async addFriend({ user_id, friend_id }) {
    const id = uuidv4();
    const newFriend = { id, user_id, friend_id };
    const createdNewFriend = await Friend.create({ newFriend });

    return createdNewFriend;
  }

  static async getFriendlist({ user_id }) {
    const friendlist = await Friend.findByUserId({ user_id });

    if (!friendlist || friendlist.length === 0) {
      const errorMessage = "친구가 존재하지 않습니다.";
      return { errorMessage };
    }

    return friendlist;
  }

  static async deleteFriend({ id }) {
    const friend = await Friend.findById({ id });

    if (!friend || friend === null) {
      const errorMessage = "해당 친구가 존재하지 않습니다.";
      return { errorMessage };
    }
    await Friend.deleteById({ id });

    return friend;
  }

  static async getUsers() {
    const friendlist = await Friend.findAll();

    return friendlist;
  }
}

export { FriendService };
