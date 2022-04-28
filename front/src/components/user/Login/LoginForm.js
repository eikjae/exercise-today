import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as Api from "../../../api";
import { DispatchContext } from "../../../App";
import {
  StyledButton,
  StyledContainer,
  StyledTextField,
  StyledInputWrapper,
  StyledButtonWrapper,
} from "./LoginForm.style";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);

  //useState로 email 상태를 생성함.
  // const [email, setEmail] = useState("");
  //useState로 password 상태를 생성함.
  // const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // "user/login" 엔드포인트로 post요청함.
      const res = await Api.post("user/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
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

  return (
    <StyledContainer>
      <StyledInputWrapper>
        <StyledTextField
          id="email-input"
          label="email"
          type="email"
          autoComplete="current-email"
          variant="standard"
          color="secondary"
          ref={passwordRef}
        />
        <StyledTextField
          id="password-input"
          label="password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          color="secondary"
          ref={emailRef}
        />
        <StyledButtonWrapper>
          <StyledButton>로그인</StyledButton>
          <StyledButton>회원가입</StyledButton>
        </StyledButtonWrapper>
      </StyledInputWrapper>
    </StyledContainer>
  );
}

export default LoginForm;
