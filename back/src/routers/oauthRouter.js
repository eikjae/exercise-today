import { Router } from "express";
import { userAuthService } from "../services/userService";
import { User } from "../db";
import jwt from "jsonwebtoken";
import generateRandomPassword from "../utils/generate-random-password";

const qs = require("qs");
const fetch = require("node-fetch");

const oauthRouter = Router();

class Kakao {
  constructor(code) {
    this.url = "https://kauth.kakao.com/oauth/token";
    this.clientId = process.env.KAKAO_ID;
    this.clientSecret = process.env.SecretCode;
    this.redirectUri = "http://localhost:5000/oauth/kakao";
    this.code = code;
    this.userInfoUri = "https://kapi.kakao.com/v2/user/me";
  }
}

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
      //return new naver(code)
      break;
  }
};

oauthRouter.get("/oauth/:coperation", async (req, res) => {
  const coperation = req.params.coperation;
  const code = req.param("code");
  const options = getOption(coperation, code);
  const token = await getAccessToken(options);
  const userInfo = await getUserInfo(options.userInfoUri, token.access_token);
  const profile = userInfo.kakao_account.profile;

  const imageLink = profile.profile_image_url;
  const id = userInfo.id;
  const name = profile.nickname + id;
  const email = userInfo.kakao_account.email;
  console.log(name, imageLink, id, email);

  const userById = await User.findById({ user_id: id });
  const password = generateRandomPassword();
  if (userById) {
    const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
    const token = jwt.sign({ user_id: id }, secretKey);
    userById.token = token;
    delete userById["password"];
    res.json(userById);
  } else {
    const createdUser = await userAuthService.addUser({
      id,
      name,
      email,
      password,
      type: coperation,
      imageLink,
    });
    res.json(createdUser);
  }
});

export { oauthRouter };
