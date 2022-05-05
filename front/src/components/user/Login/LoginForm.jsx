import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as Api from "../../../api";
import { DispatchContext } from "../../../App";
import {
  StyledButton,
  StyledContainer,
  StyledTextField,
  StyledInputLayout,
  StyledButtonWrapper,
  StyledWarningMessage,
  StyledInputContainer,
  StyledOutLine,
  StyledSocialImg,
} from "./LoginForm.style";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isValid, setIsValid] = useState(true);

  //이메일이 abc@example.com 형태인지 regex를 이용해 확인함.
  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //위 validateEmail 함수를 통해 이메일 형태 적합 여부를 확인함.
  // const isEmailValid = validateEmail(email);
  // 비밀번호가 4글자 이상인지 여부를 확인함.
  // const isPasswordValid = password.length >= 4;
  //
  // 이메일과 비밀번호 조건이 동시에 만족되는지 확인함.
  // const isFormValid = isEmailValid && isPasswordValid;

  const handleOnClickLogin = async (e) => {
    const isValidResult = validateEmail(email);
    if (isValidResult === false) return;
    setIsValid(isValidResult);

    e.preventDefault();

    try {
      const res = await Api.post("user/login", {
        email,
        password,
      });
      console.log(res.data);
      // 유저 정보는 response의 data임.
      const user = res.data;
      // JWT 토큰은 유저 정보의 token임.
      const jwtToken = user.token;
      // sessionStorage에 "userToken"이라는 키로 JWT 토큰을 저장함.
      sessionStorage.setItem("userToken", jwtToken);
      // dispatch 함수를 이용해 로그인 성공 상태로 만듦.
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: user,
      });

      // 기본 페이지로 이동함.
      navigate("/", { replace: true });
    } catch (err) {
      console.log("로그인에 실패하였습니다.\n", err);
    }
  };

  const handleOnClickRegister = () => {
    navigate("/register");
  };
  return (
    <StyledContainer>
      <StyledInputLayout>
        <StyledOutLine>
          <StyledInputContainer>
            <StyledTextField
              id="email-input"
              label="email"
              type="email"
              autoComplete="current-email"
              variant="standard"
              color="secondary"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {!isValid && (
              <StyledWarningMessage>
                이메일 혹은 패스워드가 유효하지 않습니다.
              </StyledWarningMessage>
            )}
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledTextField
              id="password-input"
              label="password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              color="secondary"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {!isValid && (
              <StyledWarningMessage>
                이메일 혹은 패스워드가 유효하지 않습니다.
              </StyledWarningMessage>
            )}
          </StyledInputContainer>
          <StyledButtonWrapper>
            <StyledButton onClick={handleOnClickLogin} type="submit">
              로그인
            </StyledButton>
            <StyledButton onClick={handleOnClickRegister}>
              회원가입
            </StyledButton>
          </StyledButtonWrapper>
          <a
            href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_ID}&redirect_uri=${process.env.REACT_APP_HOST}/oauth/kakao`}
          >
            <StyledSocialImg src="socialLoginImg/kakao.png" alt="kakao" />
          </a>
          <a
            href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_ID}&redirect_uri=${process.env.REACT_APP_HOST}/oauth/naver`}
          >
            <StyledSocialImg src="socialLoginImg/naver.png" alt="naver" />
          </a>
          <a
            href={`https://accounts.google.com/o/oauth2/auth?client_id=${process.env.REACT_APP_GOOGLE_ID}&redirect_uri=${process.env.REACT_APP_HOST}&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&response_type=code`}
          >
            <StyledSocialImg src="socialLoginImg/google.png" alt="google" />
          </a>
        </StyledOutLine>
      </StyledInputLayout>
    </StyledContainer>
  );
}

export default LoginForm;
