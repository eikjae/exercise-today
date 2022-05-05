import React, { useEffect, useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import queryString from "query-string";
import { DispatchContext } from "../../App";
import { get } from "../../api";
import qs from "qs";

const OauthPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const location = useLocation();
  const params = useParams();

  const socialLogin = async () => {
    // console.log(window.location);
    const { code } = queryString.parse(location.search);
    console.log("params.coperation: ", params.coperation);
    console.log("code: ", code);
    let res = "";
    if (params.coperation === "kakao") {
      res = await fetch("https://kauth.kakao.com/oauth/token", {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: queryString.stringify({
          grant_type: "authorization_code",
          client_id: process.env.REACT_APP_KAKAO_ID,
          client_secret: process.env.REACT_APP_KAKAO_CODE,
          redirect_uri: process.env.REACT_APP_HOST + "/oauth/kakao",
          code,
        }),
      }).then((res) => res.json());
    } else if (params.coperation === "naver") {
      res = await fetch("https://nid.naver.com/oauth2.0/token", {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: qs.stringify({
          grant_type: "authorization_code",
          client_id: process.env.REACT_APP_NAVER_ID,
          client_secret: process.env.REACT_APP_NAVER_CODE,
          redirect_uri: process.env.REACT_APP_HOST + "/oauth/naver",
          code: code,
        }),
      }).then((res) => res.json());
    }

    console.log(res);
    const result = `oauth/${params.coperation}?accessToken=${res.access_token}`;

    const userData = await get(result);
    console.log(userData);

    // const user = res.data;
    // const jwtToken = user.token;
    // sessionStorage.setItem("userToken", jwtToken);
    // dispatch({
    //   type: "LOGIN_SUCCESS",
    //   payload: user,
    // });
    // navigate("/", { replace: true });
  };

  useEffect(() => {
    socialLogin();
  });
  return <></>;
};

export default OauthPage;
