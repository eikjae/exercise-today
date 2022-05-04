import styled from "styled-components";

export const FoodListContainer = styled.article`
  width: 100%;
  list-style: none;

  margin: 0.5rem 0 0.5rem 0;
  padding: 0.5rem;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;

  /* box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset; */
  transition: all 0.5s ease-in;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
`;

export const H5 = styled.h5`
  margin-bottom: 0;
`;

export const TotalWrapper = styled.div`
  width: 100%;
  text-align: end;
`;
