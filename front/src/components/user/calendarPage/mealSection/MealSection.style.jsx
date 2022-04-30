import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const StyledMealContainer = styled.article`
  width: 100%;
  flex: 0.18;

  display: flex;

  border: 1px solid pink;

  margin: 0.5rem 0 0.5rem 0;
  padding: 0.5rem;
`;

export const StyledImage = styled.img`
  width: 35%;
`;

export const StyledMealInfoContainer = styled.div`
  width: 65%;
  margin: 0 0.5rem 0 0.5rem;
  border: 1px solid green;
`;

export const IconWrapper = styled.div`
  text-align: center;
`;

export const StyeldAddCircleOutlineIcon = styled(AddCircleOutlineIcon)`
  &:hover {
    cursor: pointer;
  }
`;

export const StyledPWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem 0 0.5rem;
`;
export const StyledTotalCalrorie = styled.p`
  margin-bottom: 0;
`;
