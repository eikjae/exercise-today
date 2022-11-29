import styled from "styled-components";

export const Layout = styled.div`
  width: 18rem;
  height: 23rem;
  border-radius: 5px;
  margin: 20px;
  text-align: center;
  display: flex;
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
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FriendTitle = styled.h4`
  font-size: 24px;
  font-weight: bold;
  color: #146147;
  margin-bottom: 8px;
`;

export const CardSubTitle = styled.h6`
  color: #a0a0a0;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardTextWrapper = styled.div`
  width: 250px;
  height: 22%;
  margin-bottom: 10px;
  overflow: scroll;
`;

export const EditButton = styled.button`
  width: 70px;
  height: 40px;
  background-color: #281461;
  color: white;
  border-radius: 5px;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: #785dc0;
  }
`;

export const NetworkButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
`;

export const EditLayout = styled(Layout)`
  height: 40rem;
`;

export const EditPWMessage = styled.h6`
  margin-top: 25px;
  color: #c45d5d;
`;

export const EditButtonWrapper = styled(NetworkButtonWrapper)`
  margin-top: 20px;
`;

export const ChangeDefaultWrapper = styled.div`
  margin-top: 0px;
`;

export const ChangeDefaultImgButton = styled(EditButton)`
  width: 150px;
  height: 35px;
  margin: 10px;
  font-size: 15px;
`;
