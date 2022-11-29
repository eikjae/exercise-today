import styled, { css } from "styled-components";

export const StyledBottomSection = styled.div`
  width: 85%;
  /* min-height: 50vh; */

  margin: 2rem auto 2rem auto;
  padding: 1.5rem;

  border-radius: 1rem;

  ${({ theme }) => {
    return css`
      border: 2px solid ${theme.colors.identityColor};
    `;
  }}
`;

export const StyledBottomLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* min-height: 40vh; */
`;
