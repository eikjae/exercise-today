import styled from "styled-components";

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
  padding: 2rem;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  &:first-child {
    margin-top: 8vh;
  }
`;

export const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const WideSection = styled.div`
  /* flex: 0.6; */
`;

export const NarrowSection = styled.div`
  /* flex: 0.3; */
`;
