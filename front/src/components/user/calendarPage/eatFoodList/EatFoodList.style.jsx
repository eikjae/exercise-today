import styled, { css } from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const FoodListContainer = styled.article`
  width: 100%;
  height: 100%;
  list-style: none;

  transition: height 2s ease-in;
`;

export const Li = styled.li`
  margin-bottom: 0.4rem;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const H5 = styled.h5`
  margin-bottom: 0;
`;

export const TotalWrapper = styled.div`
  width: 100%;
  font-size: 1.2rem;
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

export const Hr = styled.hr`
  width: 110%;
  left: -23px;
  position: relative;
  margin-top: 3px;
  ${({ theme }) => {
    return css`
      color: ${theme.colors.identityColor};
    `;
  }};
`;
