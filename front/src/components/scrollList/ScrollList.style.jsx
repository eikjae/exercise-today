import styled, { css } from "styled-components";

export const ListWrapper = styled.div`
  width: 200px;
  height: 200px;
  position: fixed;
  top: 120px;
  left: 0;
`;

export const List = styled.li`
  cursor: pointer;
  ${({ theme }) => {
    return css`
      &.clicked {
        font-weight: 800;
        color: ${theme.colors.identityColor};
      }
      &:hover {
        text-decoration: underline;
        text-decoration-color: ${theme.colors.identityColor};
      }
    `;
  }}

  margin-bottom: 0.5rem;
`;

export const P = styled.p`
  margin-bottom: 0;
  font-size: 1.3rem;
`;
