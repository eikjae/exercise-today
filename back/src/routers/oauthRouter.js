import { Router } from "express";
import { userAuthService } from "../services/userService";
import { User } from "../db";
import jwt from "jsonwebtoken";
import generateRandomPassword from "../utils/generate-random-password";
import { getInfoFromKakao, getInfoFromNaver } from "../utils/authEmail";
import { likeService } from "../services/likeService";

const qs = require("qs");
const fetch = require("node-fetch");

const oauthRouter = Router();

class Kakao {
  constructor(code) {
    this.url = "https://kauth.kakao.com/oauth/token";
    this.clientId = process.env.KAKAO_ID;
    this.clientSecret = process.env.KAKAO_SecretCode;
    this.redirectUri = process.env.HOST + "/oauth/kakao";
    this.code = code;
    this.userInfoUri = "https://kapi.kakao.com/v2/user/me";
  }
}

class Naver {
  constructor(code) {
    this.url = "https://nid.naver.com/oauth2.0/token";
    this.clientId = process.env.NAVER_ID;
    this.clientSecret = process.env.NAVER_SercretCode;
    this.redirectUri = process.env.HOST + "/oauth/naver";
    this.code = code;
    this.userInfoUri = "https://openapi.naver.com/v1/nid/me";
  }
}

// class Google {
//   constructor(code) {
//     this.url = "https://nid.naver.com/oauth2.0/token";
//     this.clientId = process.env.NAVER_ID;
//     this.clientSecret = process.env.NAVER_Sercret_ID;
//     this.redirectUri = "http://localhost:5000/oauth/naver";
//     this.code = code;
//     this.userInfoUri = "https://openapi.naver.com/v1/nid/me";
//   }
// }
const getAccessToken = async (options) => {
  try {
    return await fetch(options.url, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: qs.stringify({
        grant_type: "authorization_code",
        client_id: options.clientId,
        client_secret: options.clientSecret,
        redirectUri: options.redirectUri,
        code: options.code,
      }),
    }).then((res) => res.json());
  } catch (e) {
    next(e);
  }
};
const getUserInfo = async (url, access_token) => {
  try {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        Authorization: `Bearer ${access_token}`,
      },
    }).then((res) => res.json());
  } catch (e) {
    next(e);
  }
};
const getOption = (coperation, code) => {
  switch (coperation) {
    case "kakao":
      return new Kakao(code);
      break;
    case "google":
      //return new Google(code)
      break;
    case "naver":
      return new Naver(code);
      break;
  }
};

oauthRouter.get("/oauth/:coperation", async (req, res, next) => {
  try {
    const coperation = req.params.coperation;
    const code = req.param("code");
    const options = getOption(coperation, code);
    const token = await getAccessToken(options);
    const userInfo = await getUserInfo(options.userInfoUri, token.access_token);
    let result;
    if (coperation === "kakao") {
      result = getInfoFromKakao(userInfo);
    } else if (coperation === "naver") {
      result = getInfoFromNaver(userInfo);
    } else {
    }
    const userById = await User.findById({ user_id: result.id });
    if (userById) {
      const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
      const token = jwt.sign({ user_id: result.id }, secretKey);
      userById.token = token;
      delete userById["password"];
      // console.log(userById);
      res.json(userById);
    } else {
      const password = generateRandomPassword();
      result.password = password;
      result.type = coperation;
      const createdUser = await userAuthService.addUser(result);
      if (createdUser.errorMessage) {
        throw new Error(createdUser.errorMessage);
      }
      const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
      const token = jwt.sign({ user_id: result.id }, secretKey);
      createdUser.token = token;
      // console.log(createdUser);
      //회원가입을 자동으로 해주고 로그인처리를 위해 토큰값을 넘겨준다.
      const newLike = await likeService.addLike({
        user_id: result.id,
      });
      res.json(createdUser);
    }
  } catch (error) {
    next(error);
  }
});

export { oauthRouter };
