import { Button } from "@mui/material";
import styled, { css } from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  width: 1800px;
  ${({ theme }) => {
    return css`
      margin: ${theme.navbar.height} auto 0 auto;
    `;
  }}
`;

export const B = styled.b`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.identityColor};
    `;
  }}
`;

export const RightTitle = styled.h1`
  font-size: 2.8rem;

  ${({ theme }) => {
    return css``;
  }}

  margin-bottom: 2rem;
`;

export const LeftTitle = styled.h1`
  font-size: 2.5rem;
  ${({ theme }) => {
    return css``;
  }}

  margin-bottom: 2rem;
`;

export const P = styled.p`
  font-size: 1.6rem;
`;

export const SectionWrapper = styled.div`
  margin-left: 200px;
  padding: 1rem 0 1rem 0;

  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const FirstSectionLeft = styled.div`
  margin-bottom: 10rem;
`;
export const FirstSectionRight = styled.div`
  margin-top: 20rem;
`;
export const SecondSectionLeft = styled.div``;
export const SecondSectionRight = styled.div`
  margin-top: 1rem;
`;

export const ThirdSectionLeft = styled.div``;
export const ThirdSectionRight = styled.div``;

export const FourthSectionLeft = styled.div``;
export const FourthSectionRight = styled.div``;

export const GraphWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GraphWrapperWithTitle = styled.div`
  margin-bottom: 1.5rem;
  width: 50%;
  height: 50%;
  &:nth-child(1) {
    position: relative;
    top: -3rem;
    left: 4rem;
  }
  &:nth-child(2) {
    position: relative;
    bottom: -4rem;
    left: 5rem;
  }
  &:nth-child(3) {
    position: relative;
    top: -3rem;
    left: 5rem;
  }
`;

export const LastSectionWrapper = styled.div`
  text-align: center;
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
