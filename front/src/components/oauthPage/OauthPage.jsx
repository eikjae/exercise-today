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

    const url = `oauth/${params.coperation}?code=${code}`;
    const res = await get(url);
    console.log("결과 : ", res);
    const user = res.data;
    const jwtToken = user.token;
    sessionStorage.setItem("userToken", jwtToken);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: user,
    });
    navigate("/", { replace: true });
  };

  useEffect(() => {
    socialLogin();
  }, []);
  return <></>;
};

export default OauthPage;
