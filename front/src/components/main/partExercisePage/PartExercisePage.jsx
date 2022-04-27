/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as Api from "../../../api";

import { Container } from "@mui/material";
import styled from "styled-components";

// import { ReactComponent as BodyPart } from "./body/body.svg";
// import { ReactComponent as AbsPart } from "./body/abs.svg";

import { Abs, Left, Delts } from "./body/all_body";

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

const StyledSvgContainer = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  /* display: inline-block; */
  /* vertical-align: text-top; */
  align-items: flex-start;
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

export default function PartExercisePage() {
  const [bodyPartList, setBodyPartList] = useState([]);
  const [bodyPart, setBodyPart] = useState("");
  const [targetList, setTargetList] = useState([]);
  const [target, setTarget] = useState("");
  const [equipmentList, setEquipmentList] = useState([]);
  const [equipment, setEquipment] = useState("");
  const [exerciseList, setExerciseList] = useState([]);
  const [exercise, setExercise] = useState("");
  const [exerciseImg, setExerciseImg] = useState(null);

  // 처음 렌더링시 GET 요청으로 bodyPart 카테고리를 가져옴
  useEffect(() => {
    const fetch = async () => {
      const res = await Api.get("exercise/bodypartlist");
      setBodyPartList(res.data);
    };
    fetch();
  }, []);

  // POST 요청으로 target 카테고리를 가져옴
  const handleChangeBodyPart = async (e) => {
    try {
      setBodyPart(e.target.value);
      const res = await Api.post("exercise/findtargets", {
        bodyPart: e.target.value,
      });
      setTargetList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // POST 요청으로 equipment 카테고리를 가져옴
  const handleChangeTarget = async (e) => {
    try {
      setTarget(e.target.value);
      const res = await Api.post("exercise/findequipments", {
        bodyPart,
        target: e.target.value,
      });
      setEquipmentList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // POST 요청으로 exercise 카테고리를 가져옴
  const handleChangeEquipment = async (e) => {
    try {
      setEquipment(e.target.value);
      const res = await Api.post("exercise/findpartexercises", {
        bodyPart,
        equipment: e.target.value,
        target,
      });
      setExerciseList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // exercise를 선택하면 이미지를 세팅함
  const handleChangeExercise = async (e) => {
    try {
      setExercise(e.target.value);
      setExerciseImg(e.target.value.gifUrl);
    } catch (err) {
      console.error(err);
    }
  };

  // 맨 밑에 전체 인체 svg를 깔아놓고 특정 근육을 visibility 주는 방식을 사용 시도
  return (
    <StyledContainer>
      <StyledLeftContainer>
        <h2>운동을 원하는 부위를 선택해주세요</h2>
        <StyledSelectBodyContainer>
          <StyledBodyFormControl>
            <InputLabel id="demo-simple-select-label">BodyPart</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="BodyPart"
              value={bodyPart}
              onChange={handleChangeBodyPart}
            >
              {bodyPartList.map((bodyPart) => (
                <MenuItem value={bodyPart}>{bodyPart}</MenuItem>
              ))}
            </Select>
          </StyledBodyFormControl>
          <StyledBodyFormControl>
            <InputLabel id="demo-simple-select-label">Target</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Target"
              value={target}
              onChange={handleChangeTarget}
            >
              {targetList.map((target) => (
                <MenuItem value={target}>{target}</MenuItem>
              ))}
            </Select>
          </StyledBodyFormControl>
        </StyledSelectBodyContainer>
        {/* <img src="/imgs/body.png" alt="임시 이미지" style={{ width: "100%" }} /> */}
        <StyledSvgContainer>
          <svg style={{ width: "100%" }}>
            <Abs fill="#FF6666" onClick={() => console.log("test")} />

            <Left onClick={() => console.log("left")} />
            <Delts fill="#FF6666" onClick={() => console.log("Delts")} />
          </svg>
        </StyledSvgContainer>
      </StyledLeftContainer>
      <StyledRightContainer>
        <h2>사용할 도구를 선택해주세요</h2>
        <StyledMuscleFormControl>
          <InputLabel id="demo-simple-select-label">Equipment</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Equipment"
            value={equipment}
            onChange={handleChangeEquipment}
          >
            {equipmentList.map((equipment) => (
              <MenuItem value={equipment}>{equipment}</MenuItem>
            ))}
          </Select>
        </StyledMuscleFormControl>
        <h2>추천 운동</h2>
        <StyledMuscleFormControl>
          <InputLabel id="demo-simple-select-label">Exercise</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Exercise"
            value={exercise.name}
            onChange={handleChangeExercise}
          >
            {exerciseList.map((exercise) => (
              <MenuItem value={exercise}>{exercise.name}</MenuItem>
            ))}
          </Select>
        </StyledMuscleFormControl>
        {exerciseImg !== null ? (
          <img src={exerciseImg} alt="임시 이미지" style={{ width: "100%" }} />
        ) : (
          <img
            src="http://d205bpvrqc9yn1.cloudfront.net/0150.gif"
            alt="빈 이미지"
            style={{ visibility: "hidden" }}
          />
        )}
      </StyledRightContainer>
    </StyledContainer>
  );
}
