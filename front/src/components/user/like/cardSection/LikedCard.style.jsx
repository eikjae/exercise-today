import styled from "styled-components";

export const Layout = styled.div`
  width: 250px;
  height: 370px;
  /* border: 2px solid #462a53; */
  border-radius: 5px;
  margin: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-shadow: 0px 0px 10px #462a53;
`;

export const LikeImg = styled.img`
  padding: 15px;
  width: 90%;
`;

export const FriendLayout = styled.div`
  width: 18rem;
  height: 23rem;
  /* border: 2px solid #462a53; */
  border-radius: 5px;
  margin: 20px;
  text-align: center;
  display: flex;
  /* flex-direction: row; */
  /* justify-content: center; */
  padding: 5px;
  box-shadow: 0px 0px 10px #462a53;
`;

export const CardBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
`;

export const CardImg = styled.img`
  width: 9rem;
  height: 9rem;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const CardTitle = styled.h4`
  font-size: 24px;
  font-weight: bold;
  color: #281461;
  margin-bottom: 8px;
`;

export const SmallTitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
  color: #281461;
  margin-bottom: 8px;
`;

export const CardSubTitle = styled.h6`
  color: #a0a0a0;
  margin-bottom: 5px;
`;

export const CardTextWrapper = styled.div`
  width: 250px;
  height: 22%;
  margin-bottom: 10px;
  overflow: auto;
`;

export const NetworkButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
`;
