import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  ${({ theme }) => {
    return css`
      margin: ${theme.navbar.height} auto 0 auto;
      min-height: calc(100vh - ${theme.navbar.height});
    `;
  }}
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${({ theme }) => theme.tablet`
        padding-top: 0;
    `}
  ${({ theme }) => theme.miniTablet`
        padding-top: 0;
  `}
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  ${({ theme }) => theme.tablet`
        font-size: 1.7rem;
    `}
  ${({ theme }) => theme.miniTablet`
        font-size: 1.4rem;
    `}
`;

export const TopSection = styled.section`
  display: flex;
  ${({ theme }) => theme.tablet`
        display: flex;
        flex-direction: column;
    `}
  text-align: center;
`;

export const BottomSection = styled.section`
  display: flex;
  flex-direction: column;

  height: 60vh;
  ${({ theme }) => theme.tablet`
        height: 40vh;
    `}
  ${({ theme }) => theme.miniTablet`
        height: 30vh;
    `}
`;

export const TextWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  justify-content: center;
`;

export const Text = styled.h2`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.identityColor};
    `;
  }}
`;

export const StyledButton = styled.button`
  margin-top: 10px;
  padding: 5px;

  border-radius: 15px;

  width: 400px;
  height: 40px;

  color: white;
  font-weight: bold;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.identityColor};
      &:hover {
        background-color: ${theme.colors.hoverIdentityColor};
      }
    `;
  }}
  cursor: pointer;
`;
