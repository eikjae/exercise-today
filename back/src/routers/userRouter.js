import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { userAuthService } from "../services/userService";
import generateRandomPassword from "../utils/generate-random-password";
import { likeService } from "../services/likeService";
import { User } from "../db";
import { authEmailService } from "../services/authEmailService";
import { getRequiredInfoFromData } from "../utils/user";
import bcrypt from "bcrypt";

const { userImageUpload } = require("../utils/s3");
const userAuthRouter = Router();

userAuthRouter.put(
  "/users/:id/profileImage",
  login_required,
  userImageUpload.single("userImg"),
  async function (req, res, next) {
    try {
      const user_id = req.params.id;
      if (user_id != req.currentUserId) {
        throw new Error("다른 소유자의 소유물을 변경할 권한이 없습니다.");
      }
      const toUpdate = { imageLink: req.file.location };
      const updatedUser = await userAuthService.setUser({
        user_id,
        toUpdate,
      });
      if (updatedUser.errorMessage) {
        throw new Error(updatedUser.errorMessage);
      }
      const resultData = getRequiredInfoFromData(updatedUser);
      res.json(resultData);
    } catch (error) {
      next(error);
    }
  }
);
userAuthRouter.put(
  "/users/:id/defaultProfileImage",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.params.id;
      if (user_id != req.currentUserId) {
        throw new Error("다른 소유자의 소유물을 변경할 권한이 없습니다.");
      }
      const toUpdate = { imageLink: process.env.initial_image_Link };
      const updatedUser = await userAuthService.setUser({
        user_id,
        toUpdate,
      });
      if (updatedUser.errorMessage) {
        throw new Error(updatedUser.errorMessage);
      }
      const resultData = getRequiredInfoFromData(updatedUser);
      res.json(resultData);
    } catch (error) {
      next(error);
    }
  }
);
userAuthRouter.get("/user/checkEmail/:email", async function (req, res, next) {
  const email = req.params.email;
  const type = "TodayExercise";
  const user = await User.findByEmail({ email, type });
  const result = { status: 0 };
  if (user) {
    result.status = 1;
    res.json(result);
  } else {
    res.json(result);
  }
});
userAuthRouter.post(
  "/user/authEmail/:email/activateKey",
  async function (req, res, next) {
    try {
      const email = req.params.email;
      const authEmail = await authEmailService.addAuthEmail({ email });
      if (authEmail) {
        //추후 authEmail이 존재하면 성공한 것이므로 status:true로 res.json을 내보낼 것
        res.send("인증키가 해당이메일로 발송되었습니다.");
      } else {
        res.json({ status: false });
      }
    } catch (e) {
      next(e);
    }
  }
);

userAuthRouter.post(
  "/user/authEmail/:email/activate",
  async function (req, res, next) {
    try {
      const userKey = req.body.activateKey;
      const email = req.params.email;
      const authEmail = await authEmailService.activateAuthEmail({
        email,
        userKey,
      });
      if (authEmail.errorMessage) {
        throw new Error(authEmail.errorMessage);
      }
      res.json(authEmail);
    } catch (e) {
      next(e);
    }
  }
);

userAuthRouter.post("/user/register", async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    // req (request) 에서 데이터 가져오기
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const passwordCheck = req.body.passwordCheck;
    const height = req.body.height;
    const weight = req.body.weight;
    const gender = req.body.gender;
    const type = "TodayExercise";
    if (password !== passwordCheck) {
      throw new Error("password와 passwordCheck의 값이 일치하지 않습니다.");
    }

    // 위 데이터를 유저 db에 추가하기
    const newUser = await userAuthService.addUser({
      name,
      email,
      password,
      height,
      weight,
      gender,
      type,
    });

    if (newUser.errorMessage) {
      throw new Error(newUser.errorMessage);
    }

    const user_id = newUser.id;
    const newLike = await likeService.addLike({
      user_id,
    });

    if (newLike.errorMessage) {
      throw new Error(newLike.errorMessage);
    }
    const resultData = getRequiredInfoFromData(newUser);
    res.status(201).json(resultData);
  } catch (error) {
    next(error);
  }
});

userAuthRouter.post("/user/login", async function (req, res, next) {
  try {
    // req (request) 에서 데이터 가져오기
    const email = req.body.email;
    const password = req.body.password;
    // 가입 유형이 TodayExercise인 회원에 한해서만 로그인서비스 제공,다른 타입은 자동로그인 구현
    const type = "TodayExercise";

    // 위 데이터를 이용하여 유저 db에서 유저 찾기
    const user = await userAuthService.getUser({ email, password, type });

    if (user.errorMessage) {
      throw new Error(user.errorMessage);
    }

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

userAuthRouter.get(
  "/userlist",
  login_required,
  async function (req, res, next) {
    try {
      // 전체 사용자 목록을 얻음
      const users = await userAuthService.getUsers();
      const resultData = users.map((user) => getRequiredInfoFromData(user));
      res.status(200).send(resultData);
    } catch (error) {
      next(error);
    }
  }
);

userAuthRouter.get(
  "/user/current",
  login_required,
  async function (req, res, next) {
    try {
      // jwt토큰에서 추출된 사용자 id를 가지고 db에서 사용자 정보를 찾음.
      const user_id = req.currentUserId;
      const currentUserInfo = await userAuthService.getUserInfo({
        user_id,
      });

      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }
      const resultData = getRequiredInfoFromData(currentUserInfo);
      res.json(resultData);
    } catch (error) {
      next(error);
    }
  }
);

userAuthRouter.put(
  "/users/:id",
  login_required,
  async function (req, res, next) {
    try {
      // URI로부터 사용자 id를 추출함.
      const user_id = req.params.id;
      // body data 로부터 업데이트할 사용자 정보를 추출함.
      if (user_id != req.currentUserId) {
        throw new Error("다른 소유자의 소유물을 변경할 권한이 없습니다.");
      }
      //name,desciption,weight,height,gender만 변경가능하고 비밀번호는 다른 라우터를 사용
      const name = req.body.name ?? null;
      const description = req.body.description ?? null;
      const weight = req.body.weight ?? null;
      const height = req.body.height ?? null;
      const gender = req.body.gender ?? null;

      const toUpdate = { name, weight, height, gender, description };

      // 해당 사용자 아이디로 사용자 정보를 db에서 찾아 업데이트함. 업데이트 요소가 없을 시 생략함
      const updatedUser = await userAuthService.setUser({ user_id, toUpdate });

      if (updatedUser.errorMessage) {
        throw new Error(updatedUser.errorMessage);
      }
      const resultData = getRequiredInfoFromData(updatedUser);
      res.status(200).json(resultData);
    } catch (error) {
      next(error);
    }
  }
);

userAuthRouter.get(
  "/users/:id",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.params.id;
      const userInfo = await userAuthService.getUserInfo({ user_id });

      if (userInfo.errorMessage) {
        throw new Error(userInfo.errorMessage);
      }

      const resultData = getRequiredInfoFromData(userInfo);
      res.status(200).json(resultData);
    } catch (error) {
      next(error);
    }
  }
);

userAuthRouter.put(
  "/users/:id/changePassword",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.params.id;
      // body data 로부터 업데이트할 사용자 정보를 추출함.
      if (user_id != req.currentUserId) {
        throw new Error("다른 소유자의 소유물을 변경할 권한이 없습니다.");
      }
      const currentPassword = req.body.currentPassword;

      const checkPassword = await userAuthService.checkPassword({
        user_id,
        password: currentPassword,
      });

      if (checkPassword.errorMessage) {
        throw new Error(checkPassword.errorMessage);
      }

      const newPassword = req.body.newPassword;
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      const toUpdate = { password: hashedPassword };

      const updatedUser = await userAuthService.setUser({
        user_id,
        toUpdate,
      });
      if (updatedUser.errorMessage) {
        throw new Error(updatedUser.errorMessage);
      }

      res.status(200).send("비밀번호가 변경되었습니다.");
    } catch (err) {
      next(err);
    }
  }
);
userAuthRouter.post(
  "/users/:id/resetPassword",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.params.id;
      if (user_id != req.currentUserId) {
        throw new Error("다른 소유자의 소유물을 변경할 권한이 없습니다.");
      }
      const user = await User.findById({ user_id });

      if (!user) {
        throw new Error("해당 메일로 가입된 사용자가 없습니다.");
      }

      const name = user.name;
      const email = user.email;
      //8개 무작위 숫자 string
      const newPassword = generateRandomPassword();
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      const toUpdate = { password: hashedPassword };
      const updatedUser = await userAuthService.setUser({ user_id, toUpdate });

      if (updatedUser.errorMessage) {
        throw new Error(updatedUser.errorMessage);
      }

      await userAuthService.nodeMailer({ email, name, password: newPassword });

      res.status(200).send("임시 비밀번호가 전송되었습니다.");
    } catch (err) {
      next(err);
    }
  }
);

userAuthRouter.delete(
  "/users/:id",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.params.id;
      const password = req.body.password;
      if (user_id != req.currentUserId) {
        throw new Error("다른 소유자의 소유물을 변경할 권한이 없습니다.");
      }

      const checkPassword = await userAuthService.checkPassword({
        user_id,
        password,
      });

      if (checkPassword.errorMessage) {
        throw new Error(checkPassword.errorMessage);
      }

      const deletedUser = await userAuthService.deleteUser({
        user_id,
      });

      if (deletedUser.errorMessage) {
        throw new Error(deletedUser.errorMessage);
      }
      res.status(200).send("회원탈퇴를 완료하였습니다.");
    } catch (err) {
      next(err);
    }
  }
);

export { userAuthRouter };
