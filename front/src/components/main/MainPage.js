import React, { useEffect, useState } from "react";
import * as Api from "../../api";
import { Container, Grid } from "@mui/material";
import styled from "styled-components";
import BadgeVisibility from "./BadgeVisibility";

export default function MainPage() {
  const StyledContainer = styled(Container)`
    max-width: 1000px;
    height: 1000px;
    background-color: white;
    ${({ theme }) => theme.tablet`
    background-color: blue;
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
    margin-bottom: 50px;
  `;

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await Api.get("foods");
        console.log(res.data);
        // setFoods()
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [foods]);

  return (
    // 여러 props 적용 확인
    <StyledContainer>
      <header>
        <Title>오늘 무엇을 드셨나요?</Title>
      </header>
      {/* <BadgeVisibility key={1} food={food} /> */}
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {foods.map((food) => (
          <Grid item>
            <BadgeVisibility key={food} food={food} />
          </Grid>
        ))}
      </Grid>
      <br />
      <h2 style={{ textAlign: "center" }}>(칼로리 결과)</h2>
    </StyledContainer>
  );
}
