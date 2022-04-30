import { AuthEmail } from "../db";
import sendMail from "../utils/send-mail";
import { generateRandomNumberString } from "../utils/authEMail.js";

class authEmailService {
  static async addAuthEmail({ email }) {
    const authEmail = await AuthEmail.findByEmail({ email });
    const activateKey = generateRandomNumberString(6);

    if (authEmail) {
      const updatedAuthEmail = await AuthEmail.update({
        email,
        fieldToUpdate: "status",
        newValue: 0,
      });
    } else {
      const newAuthEmail = await AuthEmail.create({
        email,
        status: 0,
        activateKey,
      });
    }
    const resultAuthEmail = await AuthEmail.update({
      email,
      fieldToUpdate: "activateKey",
      newValue: activateKey,
    });
    const message = sendMail(
      email,
      "인증번호입니다.",
      `인증번호는 ${activateKey}입니다.`
    );
    return resultAuthEmail;
  }
  static async activateAuthEmail({ email, userKey }) {
    const authEmail = await AuthEmail.findByEmail({ email });
    if (!authEmail) {
      const errorMessage = "인증번호를 먼저 발급해주세요";
      return { errorMessage };
    }
    if (userKey === authEmail.activateKey) {
      let resultAuthEmail = await AuthEmail.update({
        email,
        fieldToUpdate: "status",
        newValue: 1,
      });
      return resultAuthEmail;
    } else {
      const errorMessage = "인증번호가 일치하지 않습니다.";
      return { errorMessage };
    }
  }
}

export { authEmailService };
