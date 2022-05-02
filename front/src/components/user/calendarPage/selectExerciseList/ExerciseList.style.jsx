import styled from "styled-components";

export const ExerciseListContainer = styled.article`
  width: 100%;
  list-style: none;

  border: 1px solid pink;

  margin: 0.5rem 0 0.5rem 0;
  padding: 0.5rem;

  transition: all 0.5s ease-in;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const H6 = styled.h6`
  margin-bottom: 0;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  margin-bottom: 0.4rem;
`;

export const TotalWrapper = styled.div`
  width: 100%;
  text-align: end;
`;
