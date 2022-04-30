import { AuthEmailModel } from "../schemas/authEmail";

export class AuthEmail {
  static async create(newAuthEmail) {
    const createdNewAuthEmail = await AuthEmailModel.create(newAuthEmail);
    return createdNewAuthEmail;
  }
  static async update({ email, fieldToUpdate, newValue }) {
    const updatedAuthEmail = await AuthEmailModel.findOneAndUpdate(
      { email },
      { [fieldToUpdate]: newValue },
      { returnOriginal: false }
    );
    return updatedAuthEmail;
  }
  static async findByEmail({ email }) {
    const AuthEmail = await AuthEmailModel.findOne({ email });
    return AuthEmail;
  }
}
