import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { UserStateContext, DispatchContext } from "../App";
import { Tab, Tabs } from "@mui/material";
import {
  StyledLink,
  StyledNav,
  StyledNavContainer,
  StyledTitle,
  TitleIcon,
  StyledeMenuIcon,
} from "./Header.style";
import { ROUTE } from "./route";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);

  const [navbarIsTop, setNavbarIsTop] = useState(null);
  const [isClicked, setIsClick] = useState(false);
  const navbarRef = useRef();

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

  const checkIsNavbarTop = () => {
    if (window.scrollY === 0) {
      console.log("끝임");
      setNavbarIsTop(true);
    } else {
      setNavbarIsTop(false);
    }
  };

  const handleClickMenuIcon = () => {
    setIsClick(!isClicked);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIsNavbarTop);
    return () => window.removeEventListener("scroll", checkIsNavbarTop);
  }, []);

  return (
    <StyledNav ref={navbarRef} navbarIsTop={navbarIsTop}>
      <StyledeMenuIcon
        onClick={handleClickMenuIcon}
        isclicked={isClicked + ""}
      />
      <StyledTitle
        onClick={() => {
          navigate("/");
        }}
      >
        <TitleIcon />
        오늘도 운동
      </StyledTitle>
      <StyledNavContainer>
        <StyledLink to={ROUTE.PROLOG.link}>프롤로그</StyledLink>
        {!isLogin && <StyledLink to={ROUTE.LOGIN.link}>로그인</StyledLink>}
        {isLogin && <StyledLink to={ROUTE.NETWORK.link}>네트워크</StyledLink>}
        {isLogin && <StyledLink to={ROUTE.CALENDAR.link}>캘린더</StyledLink>}
        {isLogin && (
          <StyledLink to={ROUTE.MYPAGE.link + `/${userState.user?.id}`}>
            마이페이지
          </StyledLink>
        )}
        {isLogin && (
          <StyledLink to={ROUTE.LOGIN.link} onClick={logout}>
            로그아웃
          </StyledLink>
        )}
      </StyledNavContainer>
    </StyledNav>
  );
}

export default Header;
