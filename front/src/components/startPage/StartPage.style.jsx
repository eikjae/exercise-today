import styled, { css, keyframes } from "styled-components";
import Container from "@mui/material/Container";

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

export const StyledContainer = styled(Container)`
  padding: 3rem;
  ${({ theme }) => {
    return css`
      margin-top: ${theme.navbar.height};
      border: 1px solid black;
    `;
  }}
`;

export const Image = styled.img`
  border-radius: 20px;
  animation: 1s ${imageFade} ease;
`;

export const Section = styled.section`
  width: 80%;
  height: 400px;

  border: 1px solid black;

  display: flex;
  margin: auto;
`;

export const RightH2 = styled.h2`
  animation: 2s ${titleRightToLeftFade} ease;
`;

export const LeftH2 = styled.h2`
  animation: 2s ${titleLeftToRightFade} ease;
`;

export const H5 = styled.h5`
  animation: 3s ${contentFade} ease;
`;

export const FirstSectionLeft = styled.div``;
export const FirstSectionRight = styled.div`
  margin-left: 2rem;
`;

export const SecondSectionLeft = styled.div`
  text-align: end;
`;
export const SecondSectionRight = styled.div``;

export const ThirdSectionLeft = styled.div`
  text-align: end;
`;
export const ThirdSectionRight = styled.div``;

export const LastSectionLeft = styled.div``;
export const LastSectionRight = styled.div``;
