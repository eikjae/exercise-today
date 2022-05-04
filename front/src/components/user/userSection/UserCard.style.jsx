import styled from "styled-components";

export const Layout = styled.div`
  width: 18rem;
  height: 22rem;
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

export const CardSubTitle = styled.h6`
  color: #a0a0a0;
`;

export const CardTextWrapper = styled.div`
  width: 250px;
  height: 22%;
  margin-bottom: 10px;
  overflow: auto;
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
