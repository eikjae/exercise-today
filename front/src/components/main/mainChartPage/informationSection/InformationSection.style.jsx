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
  flex: 0.4;

  background-color: gray;

  padding: 30px;
  margin: 10px;

  border-radius: 10px;

  ${({ theme }) => theme.tablet`
        padding: 15px;
    `}
`;
