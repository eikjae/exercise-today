import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  min-height: 90vh;
  border: 2px solid black;
`;

export const StyledSubTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  ${({ theme }) => theme.tablet`
        font-size: 1.7rem;
    `}
  ${({ theme }) => theme.miniTablet`
        font-size: 1.4rem;
    `}
`;

export const StyledTopSection = styled.section`
  display: flex;
  ${({ theme }) => theme.tablet`
        display: flex;
        flex-direction: column;
    `}
  text-align: center;
`;

export const StyledBottomSection = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  border: 2px solid black;
  height: 60vh;
  ${({ theme }) => theme.tablet`
        height: 40vh;
    `}
  ${({ theme }) => theme.miniTablet`
        height: 30vh;
    `}
`;
