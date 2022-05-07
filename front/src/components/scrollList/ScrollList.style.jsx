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

  position: relative;
  left: 10px;

  margin-bottom: 0.5rem;

  &.clicked::before {
    transform: scale(1);
  }

  ::before {
    position: absolute;
    top: 0.67rem;
    left: -1.2rem;
    transition: all 0.3s ease;
    transform: scale(0);
    width: 10px;
    height: 10px;
    /* outline: solid red; */
    content: "";
    ${({ theme }) => {
      return css`
        color: ${theme.colors.identityColor};
        background-color: ${theme.colors.identityColor};
      `;
    }}
    display:inline-block;
    text-decoration: none;
  }
`;

export const P = styled.p`
  margin-bottom: 0;
  font-size: 1.3rem;
`;
