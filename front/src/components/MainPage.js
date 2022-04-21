import { Container } from "@mui/material";
import styled from "styled-components";
import BadgeVisibility from "./BadgeVisibility";

export default function MainPage() {
  const StyledContainer = styled(Container)`
    max-width: 1000px;
    height: 1000px;
    background-color: skyblue;
    ${({ theme }) => theme.tablet`
    background-color: sky-blue;
  `}
    ${({ theme }) => theme.mobile`
    background-color: red;
  `}
  border: 3px solid white;
    /* height: 100%; */
  `;

  const Title = styled.h1`
    text-align: center;
    margin-top: 100px;
  `;

  const foods = ["케이크", "주류", "육류", "해산물", "패스트푸드"];
  return (
    // 여러 props 적용 확인
    <StyledContainer>
      <header>
        <Title>오늘 뭐 먹었지?</Title>
      </header>
      {/* <BadgeVisibility key={1} food={food} /> */}
      {foods.map((food) => (
        <BadgeVisibility key={food} food={food} />
      ))}
    </StyledContainer>
  );
}
