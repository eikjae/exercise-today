import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Container } from "@mui/material";
import styled from "styled-components";

// const StyledContainer = styled(Container)`
//   display: flex;
//   justify-content: end;
//   align-items: center;
//   flex-direction: column;
// `;

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  max-width: 1200px;
  max-height: 1000px;
`;

const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

const StyledSelectBodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

const StyledBodyFormControl = styled(FormControl)`
  width: 45%;
`;

const StyledMuscleFormControl = styled(FormControl)`
  width: 100%;
`;

export default function BodyPartPage() {
  return (
    <StyledContainer>
      <StyledLeftContainer>
        <h2>운동을 원하는 부위를 선택해주세여</h2>
        <StyledSelectBodyContainer>
          <StyledBodyFormControl>
            <InputLabel id="demo-simple-select-label">Front</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>근육1</MenuItem>
              <MenuItem value={20}>근육2</MenuItem>
              <MenuItem value={30}>근육3</MenuItem>
            </Select>
          </StyledBodyFormControl>
          <StyledBodyFormControl>
            <InputLabel id="demo-simple-select-label">Back</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>근육1</MenuItem>
              <MenuItem value={20}>근육2</MenuItem>
              <MenuItem value={30}>근육3</MenuItem>
            </Select>
          </StyledBodyFormControl>
        </StyledSelectBodyContainer>
        <img src="/imgs/body.png" alt="임시 이미지" style={{ width: "100%" }} />
      </StyledLeftContainer>
      <StyledRightContainer>
        <h2>사용할 도구를 선택해주세요</h2>
        <StyledMuscleFormControl>
          <InputLabel id="demo-simple-select-label">Machine</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={10}>머신1</MenuItem>
            <MenuItem value={20}>머신2</MenuItem>
            <MenuItem value={30}>머신3</MenuItem>
          </Select>
        </StyledMuscleFormControl>
        <h2>추천 운동</h2>
        <StyledMuscleFormControl>
          <InputLabel id="demo-simple-select-label">Exercise</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={10}>운동1</MenuItem>
            <MenuItem value={20}>운동2</MenuItem>
            <MenuItem value={30}>운동3</MenuItem>
          </Select>
        </StyledMuscleFormControl>
        <img
          src="/imgs/muscle.png"
          alt="임시 이미지"
          style={{ width: "100%" }}
        />
      </StyledRightContainer>
    </StyledContainer>
  );
}
