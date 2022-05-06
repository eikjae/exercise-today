import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const FoodListContainer = styled.article`
  width: 100%;
  height: 100%;
  list-style: none;

  margin: 0.5rem 0 0.5rem 0;
  padding: 0.5rem;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;

  /* box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset; */
  transition: height 2s ease-in;
  /* display: ; */
`;

export const Li = styled.li`
  margin-bottom: 0.4rem;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  /* margin-bottom: 0.4rem; */
`;

export const H5 = styled.h5`
  margin-bottom: 0;
`;

export const TotalWrapper = styled.div`
  width: 100%;
  text-align: end;
`;

export const StyledAddIcon = styled(AddIcon)`
  transition: box-shadow 0.2s ease-in;
  &:hover {
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
`;

export const StyledRemoveIcon = styled(RemoveIcon)`
  transition: box-shadow 0.2s ease-in;
  &:hover {
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
`;
