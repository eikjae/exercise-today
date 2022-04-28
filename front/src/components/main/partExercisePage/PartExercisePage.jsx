/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as Api from "../../../api";

import { Container } from "@mui/material";
import styled from "styled-components";

import {
  Body,
  Abs,
  Quads,
  Lats,
  Calves,
  Pectorals,
  Glutes,
  Hamstrings,
  Adductors,
  Triceps,
  Cardiovascular,
  Spine,
  Upper_back,
  Biceps,
  Delts,
  Forearms,
  Traps,
  Serratus_anterior,
  Abductors,
  Levator_scapulae,
} from "./body/all_body";

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
`;

const StyledH2 = styled.h2`
  color: #281461;
  margin-bottom: 15px;
`;

const StyledH2Margin = styled.h2`
  color: #281461;
  margin-top: 30px;
  margin-bottom: 15px;
`;

const StyledSelectBodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledSvgContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid #281461;
  border-radius: 5px;
  margin-top: 20px;
`;

const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  margin-left: 20px;
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

  const [click, setClick] = useState("not-hovering");

  // 처음 렌더링시 GET 요청으로 bodyPart 카테고리를 가져옴
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await Api.get("exercise/bodypartlist");
        setBodyPartList(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  const handleClick = async (bodyPart, target) => {
    try {
      setBodyPart(bodyPart);
      setTarget(target);
      let res = await Api.post("exercise/findtargets", {
        bodyPart,
      });
      setTargetList(res.data);

      res = await Api.post("exercise/findequipments", {
        bodyPart,
        target,
      });
      setEquipmentList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

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
      setClick(e.target.value);
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
        <StyledH2>운동을 원하는 부위를 선택해주세요</StyledH2>
        <StyledSelectBodyContainer>
          <StyledBodyFormControl>
            <InputLabel id="demo-simple-select-label">BodyPart</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="BodyPart"
              value={bodyPart || ""}
              onChange={handleChangeBodyPart}
            >
              {bodyPartList.map((bodyPart) => (
                <MenuItem key={bodyPart} value={bodyPart}>
                  {bodyPart}
                </MenuItem>
              ))}
            </Select>
          </StyledBodyFormControl>
          <StyledBodyFormControl>
            <InputLabel id="demo-simple-select-label">Target</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Target"
              value={target || ""}
              onChange={handleChangeTarget}
            >
              {targetList.map((target) => (
                <MenuItem key={target} value={target}>
                  {target}
                </MenuItem>
              ))}
            </Select>
          </StyledBodyFormControl>
        </StyledSelectBodyContainer>
        <StyledSvgContainer>
          <svg
            style={{ width: "100%", height: "100%", border: "1px" }}
            viewBox="50 -50 413 400"
          >
            <Body />
            <Cardiovascular
              fill={click === "cardio" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("cardio", "cardiovascular system");
                setClick("cardio");
              }}
            />
            <Quads
              fill={click === "quads" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("upper legs", "quads");
                setClick("quads");
              }}
            />
            <Calves
              fill={click === "calves" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("lower legs", "calves");
                setClick("calves");
              }}
            />
            <Pectorals
              fill={click === "pectorals" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("chest", "pectorals");
                setClick("pectorals");
              }}
            />
            <Glutes
              fill={click === "glutes" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("upper legs", "glutes");
                setClick("glutes");
              }}
            />
            <Hamstrings
              fill={click === "hamstrings" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("upper legs", "hamstrings");
                setClick("hamstrings");
              }}
            />
            <Adductors
              fill={click === "adductors" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("upper legs", "adductors");
                setClick("adductors");
              }}
            />

            <Triceps
              fill={click === "triceps" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("upper arms", "triceps");
                setClick("triceps");
              }}
            />
            <Spine
              fill={click === "spine" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("back", "spine");
                setClick("spine");
              }}
            />
            <Upper_back
              fill={click === "upper back" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("back", "upper back");
                setClick("upper back");
              }}
            />
            <Biceps
              fill={click === "biceps" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("upper arms", "biceps");
                setClick("biceps");
              }}
            />
            <Delts
              fill={click === "delts" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("shoulders", "delts");
                setClick("delts");
              }}
            />
            <Forearms
              fill={click === "forearms" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("lower arms", "forearms");
                setClick("forearms");
              }}
            />
            <Traps
              fill={click === "traps" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("back", "traps");
                setClick("traps");
              }}
            />
            <Serratus_anterior
              fill={click === "serratus anterior" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("chest", "serratus anterior");
                setClick("serratus anterior");
              }}
            />
            <Abductors
              fill={click === "abductors" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("upper legs", "abductors");
                setClick("abductors");
              }}
            />
            <Levator_scapulae
              fill={click === "levator scapulae" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("neck", "levator scapulae");
                setClick("levator scapulae");
              }}
            />
            <Abs
              fill={click === "abs" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("waist", "abs");
                setClick("abs");
              }}
            />
            <Lats
              fill={click === "lats" ? "#FF6666" : undefined}
              onClick={() => {
                handleClick("back", "lats");
                setClick("lats");
              }}
            />
          </svg>
        </StyledSvgContainer>
      </StyledLeftContainer>
      <StyledRightContainer>
        <StyledH2>사용할 기구를 선택해주세요</StyledH2>
        <StyledMuscleFormControl>
          <InputLabel id="demo-simple-select-label">Equipment</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Equipment"
            value={equipment || ""}
            onChange={handleChangeEquipment}
          >
            {equipmentList.map((equipment) => (
              <MenuItem key={equipment} value={equipment}>
                {equipment}
              </MenuItem>
            ))}
          </Select>
        </StyledMuscleFormControl>
        <StyledH2Margin>추천 운동</StyledH2Margin>
        <StyledMuscleFormControl>
          <InputLabel id="demo-simple-select-label">Exercise</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Exercise"
            value={exercise.name || ""}
            onChange={handleChangeExercise}
          >
            {exerciseList.map((exercise) => (
              <MenuItem key={exercise.name} value={exercise}>
                {exercise.name}
              </MenuItem>
            ))}
          </Select>
        </StyledMuscleFormControl>
        <StyledSvgContainer>
          {exerciseImg !== null ? (
            <img
              src={exerciseImg}
              alt="임시 이미지"
              style={{ width: "100%" }}
            />
          ) : (
            <img
              src="http://d205bpvrqc9yn1.cloudfront.net/0150.gif"
              alt="빈 이미지"
              style={{ width: "100%", visibility: "hidden" }}
            />
          )}
        </StyledSvgContainer>
      </StyledRightContainer>
    </StyledContainer>
  );
}
