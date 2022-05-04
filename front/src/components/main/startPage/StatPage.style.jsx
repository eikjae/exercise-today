import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  /* height: 400%; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-around;

  width: 1200px;
  margin-top: 3rem;
`;

export const WideSection = styled.div`
  flex: 0.6;
`;

export const NarrowSection = styled.div`
  flex: 0.3;
`;
