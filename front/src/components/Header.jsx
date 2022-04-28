import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserStateContext, DispatchContext } from "../App";
import { Tab, Tabs } from "@mui/material";
import { StyledNav, StyledTitle } from "./Haeader.style";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);

  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  const isLogin = !!userState.user;
  const logout = () => {
    // sessionStorage 에 저장했던 JWT 토큰을 삭제함.
    sessionStorage.removeItem("userToken");
    // dispatch 함수를 이용해 로그아웃함.
    dispatch({ type: "LOGOUT" });
    // 기본 페이지로 돌아감.
    navigate("/");
  };

  const handleOnClickLogin = () => {
    navigate("/login");
  };

  return (
    <StyledNav>
      <StyledTitle>오늘도 운동</StyledTitle>
      <Tabs value={0}>
        <Tab label="로그인" onClick={handleOnClickLogin}></Tab>
        <Tab label="Page Two" href="/login"></Tab>
        <Tab label="Page Three" href="/login"></Tab>
      </Tabs>
    </StyledNav>
  );
}

export default Header;
