import styled from "styled-components";

export const StyledSubTitle = styled.h2`
  font-size: 2rem;
  ${({ theme }) => theme.tablet`
        font-size: 1.7rem;
    `}
  ${({ theme }) => theme.miniTablet`
        font-size: 1.4rem;
    `}
`;

export const StyledInfoLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 0.4;

  background-color: gray;

  padding: 1.5rem;
  margin: 1rem;

  border-radius: 10px;

  ${({ theme }) => theme.tablet`
        padding: 15px;
    `}
`;
