import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const LikePageWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin-top: auto;
  margin-bottom: 20px;
`;

export const LikePageButton = styled.button`
  width: 140px;
  height: 100%;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #281461;
  font-weight: bold;
  -webkit-appearance: none;
  cursor: pointer;
  &:hover {
    background-color: #785dc0;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LikeWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 20px;
`;

export const LikeButton = styled.button`
  width: 60px;
  height: 100%;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #281461;
  font-weight: bold;
  -webkit-appearance: none;
  cursor: pointer;
  &:hover {
    background-color: #785dc0;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotLikeIcon = styled(FavoriteBorderIcon)`
  font-size: 20px;
`;

export const LikeIcon = styled(FavoriteIcon)`
  font-size: 20px;
`;
