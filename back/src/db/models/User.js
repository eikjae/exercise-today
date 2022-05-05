import { UserModel } from "../schemas/user";

export class User {
  static async create({ newUser }) {
    const createdNewUser = await UserModel.create(newUser);
    return createdNewUser;
  }

  //   static async findByEmail({ email }) {
  //     const user = await UserModel.findOne({ email });
  //     return user;
  //   }

  static async findById({ user_id }) {
    const user = await UserModel.findOne({ id: user_id }).lean();
    return user;
  }

  static async findAll() {
    //회원탈퇴한 유저는 제외
    const users = await UserModel.find({ deleted: false });
    return users;
  }

  //   static async update({ user_id, fieldToUpdate, newValue }) {
  //     const filter = { id: user_id };
  //     const update = { [fieldToUpdate]: newValue };
  //     const option = { returnOriginal: false };

  //     const updatedUser = await UserModel.findOneAndUpdate(
  //       filter,
  //       update,
  //       option
  //     );
  //     return updatedUser;
  //   }
  static async updateAll({ user_id, setter }) {
    const updatedUser = await UserModel.findOneAndUpdate(
      { id: user_id },
      { $set: setter },
      { returnOriginal: false }
    );
    return updatedUser;
  }

  static async findByEmail({ email, type }) {
    const user = await UserModel.findOne({ email, type });
    return user;
  }

  static async deleteById({ user_id }) {
    const user = await UserModel.deleteOne({ id: user_id });
    return user;
  }

  static async findByLikeId({ user_id }) {
    const user = await UserModel.findOne(
      { id: user_id },
      "email id name description type gender imageLink"
    );
    return user;
  }
}
