import { Button } from "@mui/material";
import styled, { css, keyframes } from "styled-components";

const imageFade = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const titleLeftToRightFade = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
        transform: translateX(-40px)
    }
    100% {
        opacity: 1;
        transform: translateX(0px)
    }
`;

const titleRightToLeftFade = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
        transform: translateX(40px)
    }
    100% {
        opacity: 1;
        transform: translateX(0px)
    }
`;

const contentFade = keyframes`
    0% {
        opacity: 0;
    }
    66% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const StyledContainer = styled.div`
  padding: 3rem;
  padding-top: 0;
  width: 1400px;
  ${({ theme }) => {
    return css`
      margin: ${theme.navbar.height} auto 0 auto;
    `;
  }}
`;

export const Image = styled.img`
  border-radius: 20px;
  ${({ theme }) => {
    return css`
      &.target {
        animation: ${theme.fadeTime.image} ${imageFade} ease;
      }
    `;
  }}
`;

export const Section = styled.section`
  width: 100%;
  ${({ theme }) => {
    return css`
      height: calc(100vh - ${theme.navbar.height});
    `;
  }}

  display: flex;
  align-items: center;
  margin: 0 auto 0 auto;
  padding: 2rem;
  margin-left: 10rem;
  border-radius: 15px;

  transition: opacity 0.3s ease;
  &.target {
    opacity: 1;
  }

  &.non-target {
    opacity: 0;
  }
`;

export const B = styled.b`
  font-size: 25px;
  ${({ theme }) => {
    return css`
      color: ${theme.colors.identityColor};
    `;
  }}
`;

export const RightTitle = styled.h1`
  font-size: 2.8rem;

  ${({ theme }) => {
    return css`
      &.target {
        animation: 2s ${titleRightToLeftFade} ease;
      }
    `;
  }}

  margin-bottom: 2rem;
`;

export const LeftTitle = styled.h1`
  font-size: 2.5rem;
  ${({ theme }) => {
    return css`
      &.target {
        animation: 2s ${titleLeftToRightFade} ease;
      }
    `;
  }}

  margin-bottom: 2rem;
`;

export const P = styled.p`
  font-size: 1.6rem;
`;

export const FirstSectionLeft = styled.div`
  padding: 3rem;
`;
export const FirstSectionRight = styled.div``;

export const FirstSectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;
  ${({ theme }) => {
    return css`
      &.target {
        animation: 2.5s ${contentFade} ease;
      }
    `;
  }}
`;

export const FirstSectionSecondContent = styled(P)`
  position: relative;
  left: 130px;
`;

export const ExerciseSpan = styled.span`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.identityColor};
    `;
  }}
`;

export const SecondSectionLeft = styled.div`
  text-align: end;
  padding-right: 2rem;
  position: relative;
  left: -40px;
  top: -55px;
`;
export const SecondSectionRight = styled.div`
  position: relative;
  left: -40px;
  top: -55px;
`;

export const SecondSectionContentWrapper = styled.div`
  ${({ theme }) => {
    return css`
      &.target {
        animation: 2.5s ${contentFade} ease;
      }
    `;
  }}
`;

export const ThirdSectionLeft = styled.div`
  text-align: end;
  padding-right: 2rem;

  position: relative;
  top: -70px;
`;
export const ThirdSectionRight = styled.div`
  position: relative;
  top: -70px;
`;
export const ThirdSectionContentWrapper = styled.div`
  ${({ theme }) => {
    return css`
      &.target {
        animation: 2.5s ${contentFade} ease;
      }
    `;
  }}
`;

export const ThirdSpan = styled.span``;

export const FourthSectionLeft = styled.div``;
export const FourthSectionRight = styled.div`
  padding-left: 2rem;
`;

export const LastSectionLeft = styled.div``;
export const LastSectionRight = styled.div`
  /* padding-left: 2rem; */
`;

export const FourthSectionContentWrapper = styled.div`
  ${({ theme }) => {
    return css`
      &.target {
        animation: 2.5s ${contentFade} ease;
      }
    `;
  }}
`;

export const LastSectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 4rem;

  ${({ theme }) => {
    return css`
      &.target {
        animation: 2.5s ${contentFade} ease;
      }
    `;
  }}
`;

export const StyledButton = styled(Button)`
  width: 300px;
  height: 60px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 1rem;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.identityColor};
      &:hover {
        background-color: ${theme.colors.hoverIdentityColor};
      }
    `;
  }}
`;
