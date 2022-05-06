import { Button } from "@mui/material";
import styled, { css } from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  /* max-width: 1600px; */
  min-width: 1000px;
`;

export const ListWrapper = styled.div`
  width: 200px;
  height: 200px;
  position: fixed;
  top: 120px;
  left: 0;
`;

export const SectionWrapper = styled.div`
  margin-left: 200px;
  padding: 1rem 0 1rem 0;

  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.laptop`
        width: 70%;
    `}
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  ${({ theme }) => theme.laptop`
        flex-direction: column;
    `}
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
  ${({ theme }) => theme.laptop`
        margin-bottom: 0;
    `}
`;
export const FirstSectionRight = styled.div`
  margin-top: 20rem;
  ${({ theme }) => theme.laptop`
        margin-top: 0;
    `}
`;
export const SecondSectionLeft = styled.div``;
export const SecondSectionRight = styled.div``;

export const ThirdSectionLeft = styled.div``;
export const ThirdSectionRight = styled.div``;

export const FourthSectionLeft = styled.div``;
export const FourthSectionRight = styled.div``;

export const GraphWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const LastSectionWrapper = styled.div`
  text-align: center;
`;

export const StyledButton = styled(Button)`
  width: 300px;
  height: 60px;
  color: white;
  font-weight: 700;
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
