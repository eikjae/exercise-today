import styled, { css } from "styled-components";

export const List = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &.clicked {
    font-weight: 700;
  }
  margin-bottom: 0.5rem;
`;

export const P = styled.p`
  margin-bottom: 0;
  font-size: 1.3rem;
`;
