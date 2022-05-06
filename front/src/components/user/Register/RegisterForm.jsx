import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Api from "../../../api";
import {
  RegitserButton,
  StyledContainer,
  StyledTextField,
  InputLayout,
  ButtonWrapper,
  InputContainer,
  WarningMessage,
  OutLine,
  StyledButtonGroup,
  SexButton,
  HeightInput,
  WeightInput,
  HWInfo,
  NoticeMessage,
  ActivateInputWrapper,
  SubmitActivateButton,
} from "./RegisterForm.style";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TextField } from "@mui/material";
import dayjs from "dayjs";

function RegisterForm() {
  const navigate = useNavigate();

  //useState로 email 상태를 생성함.
  // const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const status = {
    WARNING: "WARNING",
    ERROR: "ERROR",
    SUCCESS: "SUCCESS",
    CHECK: "CHECK",
  };

  const NOT_VALID_ID = {
    status: status.WARNING,
    type: "NOT_VALID_ID",
    msg: "4자리 이상 적어주세요.",
  };

  const NOT_VALID_EMAIL = {
    status: status.WARNING,
    type: "NOT_VALID_EMAIL",
    msg: "이메일을 확인해주세요.",
  };

  const ALREADY_REGISTER_EMAIL = {
    status: status.ERROR,
    type: "ALREADY_REGISTER_EMAIL",
    msg: "이미 가입 된 이메일 입니다.",
  };

  const ABLE_REGISTER_EMAIL = {
    status: status.SUCCESS,
    type: "ABLE_REGISTER_EMAIL",
    msg: "사용 가능한 이메일 입니다.",
  };

  const NOT_VALID_PASSWORD = {
    status: status.WARNING,
    type: "NOT_VALID_PASSWORD",
    msg: "4자리 이상 적어주세요.",
  };

  const NOT_SAME_PASSWORD = {
    status: status.ERROR,
    type: "NOT_SAME_PASSWORD",
    msg: "비밀번호를 확인하세요.",
  };

  const ALL_VALID = {
    status: status.SUCCESS,
    type: "ALL_VALID",
    msg: "",
  };

  const CHECK_ACTIVATE_KEY = {
    status: status.CHECK,
    type: "CHECK_ACTIVATE_KEY",
    msg: "인증키가 해당이메일로 발송되었습니다.",
  };

  const [msg, setMsg] = React.useState({
    status: "",
    type: "",
    msg: "",
  });

  // const [name, setName] = useState("");
  // 생년월일
  const [birthday, setBirthday] = useState(new Date());
  // 성별
  const [isClickSexBtn, setIsClickSexBtn] = useState(false);

  const idRef = useRef();
  const emailRef = useRef();
  const confirmPasswordRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();
  const keyRef = useRef();

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
  // 비밀번호와 확인용 비밀번호가 일치하는지 여부를 확인함.
  // const isPasswordSame = password === confirmPassword;
  // 이름이 2글자 이상인지 여부를 확인함.
  // const isNameValid = name.length >= 2;

  // 위 4개 조건이 모두 동시에 만족되는지 여부를 확인함.
  // const isFormValid =
  //   isEmailValid && isPasswordValid && isPasswordSame && isNameValid;
  const handleChangeBirthday = (value) => {
    console.log(value);
    setBirthday(dayjs(value).format("YYYY-MM-DD"));
  };

  const handleOnClickRegister = async (e) => {
    // id가 4자리가 안되면 안됨
    if (idRef.current.value.length < 4) {
      setMsg(NOT_VALID_ID);
      return;
    }
    console.log(validateEmail(emailRef.current?.value));

    if (validateEmail(emailRef.current?.value) === null) {
      setMsg(NOT_VALID_EMAIL);
      return;
    }
    if (password.length < 4) {
      setMsg(NOT_VALID_PASSWORD);
      return;
    } else {
      if (password !== confirmPasswordRef.current.value) {
        setMsg(NOT_SAME_PASSWORD);
        return;
      }
    }
    e.preventDefault();

    try {
      await Api.post("user/register", {
        name: idRef.current.value,
        email: emailRef.current.value,
        password,
        passwordCheck: confirmPasswordRef.current.value,
        height: Number(heightRef.current.value),
        weight: Number(weightRef.current.value),
        gender: isClickSexBtn === true ? "male" : "female",
      });

      // 로그인 페이지로 이동함.
      navigate("/login");
    } catch (err) {
      console.log("회원가입에 실패하였습니다.", err);
    }
  };

  const checkEmail = async () => {
    // 이메일 가입 존재 여부를 따진다.
    const res = await Api.get(`user/checkEmail/${emailRef.current.value}`);
    console.log(res.data.status);
    if (res.data.status === 1) {
      setMsg(ALREADY_REGISTER_EMAIL);
    } else {
      setMsg(ABLE_REGISTER_EMAIL);
    }
  };

  const checkActivateKey = async () => {
    const res = await Api.post(
      `user/authEmail/${emailRef.current.value}/activate`,
      {
        activateKey: keyRef.current.value,
      }
    );
    console.log(res);
    if (res.data.status === 1) {
      setMsg(ALL_VALID);
    }
  };

  return (
    <StyledContainer>
      <InputLayout>
        <OutLine>
          <InputContainer>
            <StyledTextField
              id="id-input"
              label="id"
              type="text"
              autoComplete="current-id"
              variant="standard"
              color="secondary"
              inputRef={idRef}
            />
            {msg.type === NOT_VALID_ID.type && (
              <WarningMessage>{msg.msg}</WarningMessage>
            )}
          </InputContainer>
          <InputContainer>
            <ActivateInputWrapper>
              <StyledTextField
                id="email-input"
                label="email"
                type="email"
                autoComplete="current-email"
                variant="standard"
                color="secondary"
                inputRef={emailRef}
              />

              {msg.type === ABLE_REGISTER_EMAIL.type ? (
                <SubmitActivateButton
                  onClick={async () => {
                    setMsg(CHECK_ACTIVATE_KEY);
                    await Api.post(
                      `user/authEmail/${emailRef.current.value}/activateKey`
                    );
                  }}
                >
                  인증
                </SubmitActivateButton>
              ) : (
                <SubmitActivateButton
                  onClick={() => {
                    checkEmail();
                  }}
                >
                  중복 <br /> 확인
                </SubmitActivateButton>
              )}
            </ActivateInputWrapper>
            {msg.type === ALREADY_REGISTER_EMAIL.type && (
              <WarningMessage>{msg.msg}</WarningMessage>
            )}
            {msg.type === ABLE_REGISTER_EMAIL.type && (
              <NoticeMessage>{msg.msg}</NoticeMessage>
            )}
            {msg.type === NOT_VALID_EMAIL.type && (
              <WarningMessage>{msg.msg}</WarningMessage>
            )}
          </InputContainer>
          {msg.type === CHECK_ACTIVATE_KEY.type && (
            <InputContainer>
              <ActivateInputWrapper>
                <StyledTextField
                  id="key-input"
                  label="activate key"
                  type="text"
                  autoComplete="current-key"
                  variant="standard"
                  color="secondary"
                  inputRef={keyRef}
                  disabled={msg.type !== CHECK_ACTIVATE_KEY.type}
                />
                <SubmitActivateButton onClick={checkActivateKey}>
                  확인
                </SubmitActivateButton>
              </ActivateInputWrapper>
              <NoticeMessage>{msg.msg}</NoticeMessage>
            </InputContainer>
          )}
          <InputContainer>
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
            {msg.type === NOT_VALID_PASSWORD.type && (
              <WarningMessage>{msg.msg}</WarningMessage>
            )}
          </InputContainer>
          <InputContainer>
            <StyledTextField
              id="password-check-input"
              label="password check"
              type="password"
              autoComplete="current-password-check"
              variant="standard"
              color="secondary"
              inputRef={confirmPasswordRef}
              disabled={password.length < 4}
            />
            {msg.type === NOT_SAME_PASSWORD.type && (
              <WarningMessage>{msg.msg}</WarningMessage>
            )}
          </InputContainer>
          <InputContainer>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                value={birthday}
                onChange={handleChangeBirthday}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </InputContainer>
          <StyledButtonGroup
            variant="outlined"
            aria-label="outlined button group"
          >
            <SexButton
              isclicksexbtn={isClickSexBtn + ""}
              onClick={() => {
                setIsClickSexBtn(true);
              }}
            >
              남자
            </SexButton>
            <SexButton
              isclicksexbtn={!isClickSexBtn + ""}
              onClick={() => {
                setIsClickSexBtn(false);
              }}
            >
              여자
            </SexButton>
          </StyledButtonGroup>
          <HWInfo>
            <HeightInput
              id="height"
              label="height"
              type="number"
              autoComplete="current-height"
              variant="standard"
              color="secondary"
              inputRef={heightRef}
            />
            <WeightInput
              id="weight"
              label="weight"
              type="text"
              autoComplete="current-weight"
              variant="standard"
              color="secondary"
              inputRef={weightRef}
            />
          </HWInfo>
          <ButtonWrapper>
            <RegitserButton
              onClick={handleOnClickRegister}
              // disabled={msg.type !== ALL_VALID.type}
            >
              가입하기
            </RegitserButton>
          </ButtonWrapper>
        </OutLine>
      </InputLayout>
    </StyledContainer>
  );
}

export default RegisterForm;
