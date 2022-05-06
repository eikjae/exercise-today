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
  width: 1200px;
  ${({ theme }) => {
    return css`
      margin: ${theme.navbar.height} auto 0 auto;
    `;
  }}
`;

export const Image = styled.img`
  border-radius: 20px;
  animation: 1s ${imageFade} ease;
`;

export const Section = styled.section`
  width: 80%;
  height: 550px;

  display: flex;
  align-items: center;
  margin: 0 auto 3rem auto;
  padding: 2rem;
  margin-left: 10rem;
  border-radius: 15px;
  ${({ theme }) => {
    return css`
      border: 2px solid ${theme.colors.identityColor};
    `;
  }};
`;

export const B = styled.b`
  font-size: 25px;
  ${({ theme }) => {
    return css`
      color: ${theme.colors.identityColor};
    `;
  }}
`;

export const RightH2 = styled.h2`
  animation: 2s ${titleRightToLeftFade} ease;
  margin-bottom: 2rem;
`;

export const LeftH2 = styled.h2`
  animation: 2s ${titleLeftToRightFade} ease;
  margin-bottom: 2rem;
`;

export const H5 = styled.h5`
  animation: 3s ${contentFade} ease;
`;

export const FirstSectionLeft = styled.div`
  padding: 3rem;
`;
export const FirstSectionRight = styled.div`
  /* padding-top: 1rem; */
  /* padding-left: 2rem; */
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
  /* padding-top: 1.5rem; */
  padding-right: 2rem;
`;
export const SecondSectionRight = styled.div`
  /* padding-top: 1.5rem; */
`;

export const ThirdSectionLeft = styled.div`
  text-align: end;
  /* padding-top: 2rem; */
  padding-right: 2rem;
`;
export const ThirdSectionRight = styled.div`
  /* padding-top: 2rem; */
`;

export const ThirdSpan = styled.span`
  /* margin-right: 18rem; */
`;

export const LastSectionLeft = styled.div`
  /* padding-top: 1rem; */
`;
export const LastSectionRight = styled.div`
  /* padding-top: 1rem; */
  padding-left: 2rem;
`;
