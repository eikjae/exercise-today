/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect, useContext } from "react";
import { InputLabel, MenuItem } from "@mui/material";
import * as Api from "../../../api";
import { UserStateContext } from "../../../App";
import NotLoginedModal from "../errorSection/NotLoginedModal";

import {
  StyledContainer,
  StyledLeftContainer,
  StyledH2,
  StyledH2Margin,
  StyledSelectBodyContainer,
  StyledSvgContainer,
  StyledRightContainer,
  StyledBodyFormControl,
  StyledSelect,
  StyledMuscleFormControl,
  ExerciseWrapper,
  SelectExercise,
  LikeButton,
  NotLikeIcon,
  LikeIcon,
  StyledH5,
} from "./PartExercise.style";

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
} from "./bodySection/all_body";

export default function PartExercisePage() {
  // 부위 카테고리, 상세 부위, 기구, 운동
  const [bodyPartList, setBodyPartList] = useState([]);
  const [bodyPart, setBodyPart] = useState("");
  const [targetList, setTargetList] = useState([]);
  const [target, setTarget] = useState("");
  const [equipmentList, setEquipmentList] = useState([]);
  const [equipment, setEquipment] = useState("");
  const [exerciseList, setExerciseList] = useState([]);
  const [exercise, setExercise] = useState(null);

  // 실제 운동 이미지
  const [exerciseImg, setExerciseImg] = useState(null);
  const [exerciseName, setExerciseName] = useState("");

  // 클릭된 부분 확인용
  const [partClick, setPartClick] = useState("not-click");

  const userState = useContext(UserStateContext);
  const [isLiked, setIsLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);

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

  // 운동을 원하는 신체부위 클릭시 bodyPart와 target을 알게 됨
  // POST 요청을 통해 targetList와 equipmentList를 가져옴
  // Equipment와 ExerciseName이 초기화 되도록 함
  const handleClickPart = async (bodyPart, target) => {
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
      setEquipment("");
      setExerciseName("");
    } catch (err) {
      console.error(err);
    }
  };

  // POST 요청으로 targetList를 가져옴
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

  // POST 요청으로 equipmentList를 가져옴
  const handleChangeTarget = async (e) => {
    try {
      setTarget(e.target.value);
      setPartClick(e.target.value);
      const res = await Api.post("exercise/findequipments", {
        bodyPart,
        target: e.target.value,
      });
      setEquipmentList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // POST 요청으로 exerciseList를 가져옴
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
      const selectedExercise = exerciseList.find(
        (exercise) => exercise.name === e.target.value
      );
      setExercise(selectedExercise);
      setExerciseImg(selectedExercise.gifUrl);
      setExerciseName(selectedExercise.name);

      // 로그인 했을시, GET 요청으로 이미 Like 됐는지 확인
      // res를 이용하여 setIsLiked()를 세팅
      if (userState.user) {
        const res = await Api.get("like/exercise");
        const likedExercises = res.data;
        const isExistExercise = likedExercises.findIndex(
          (currentExerciseName) => currentExerciseName === selectedExercise.name
        );
        if (isExistExercise !== -1) {
          // 있으면 true
          setIsLiked(true);
        } else {
          // 없으면 false
          setIsLiked(false);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickLike = async (e) => {
    try {
      // 로그인한 사용자가 아닐시 좋아요 기능을 사용할 수 없음
      if (!userState.user) {
        setShowModal(true);
        return;
      }
      // 로그인 했을 경우 좋아요 항목에 추가/삭제 요청
      await Api.put("like/exercise", { exercise: exercise.name });
      setIsLiked((prev) => !prev);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledContainer>
      <StyledLeftContainer>
        <StyledH2>운동을 원하는 부위를 선택해주세요</StyledH2>
        <StyledSelectBodyContainer>
          <StyledBodyFormControl>
            <InputLabel>BodyPart</InputLabel>
            <StyledSelect
              label="BodyPart"
              value={bodyPart || ""}
              onChange={handleChangeBodyPart}
            >
              {bodyPartList.map((bodyPart) => (
                <MenuItem key={bodyPart} value={bodyPart || ""}>
                  {bodyPart}
                </MenuItem>
              ))}
            </StyledSelect>
          </StyledBodyFormControl>
          <StyledBodyFormControl>
            <InputLabel>Target</InputLabel>
            <StyledSelect
              label="Target"
              value={target || ""}
              onChange={handleChangeTarget}
            >
              {targetList.map((target) => (
                <MenuItem key={target} value={target}>
                  {target}
                </MenuItem>
              ))}
            </StyledSelect>
          </StyledBodyFormControl>
        </StyledSelectBodyContainer>
        <StyledSvgContainer>
          <svg
            style={{ width: "100%", height: "100%", border: "1px" }}
            viewBox="50 -50 413 400"
          >
            <Body />
            <Cardiovascular
              fill={
                partClick === "cardiovascular system" ? "#FF6666" : undefined
              }
              onClick={() => {
                handleClickPart("cardio", "cardiovascular system");
                setPartClick("cardiovascular system");
              }}
            />
            <Quads
              fill={partClick === "quads" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("upper legs", "quads");
                setPartClick("quads");
              }}
            />
            <Calves
              fill={partClick === "calves" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("lower legs", "calves");
                setPartClick("calves");
              }}
            />
            <Pectorals
              fill={partClick === "pectorals" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("chest", "pectorals");
                setPartClick("pectorals");
              }}
            />
            <Glutes
              fill={partClick === "glutes" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("upper legs", "glutes");
                setPartClick("glutes");
              }}
            />
            <Hamstrings
              fill={partClick === "hamstrings" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("upper legs", "hamstrings");
                setPartClick("hamstrings");
              }}
            />
            <Adductors
              fill={partClick === "adductors" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("upper legs", "adductors");
                setPartClick("adductors");
              }}
            />

            <Triceps
              fill={partClick === "triceps" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("upper arms", "triceps");
                setPartClick("triceps");
              }}
            />
            <Spine
              fill={partClick === "spine" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("back", "spine");
                setPartClick("spine");
              }}
            />
            <Upper_back
              fill={partClick === "upper back" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("back", "upper back");
                setPartClick("upper back");
              }}
            />
            <Biceps
              fill={partClick === "biceps" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("upper arms", "biceps");
                setPartClick("biceps");
              }}
            />
            <Delts
              fill={partClick === "delts" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("shoulders", "delts");
                setPartClick("delts");
              }}
            />
            <Forearms
              fill={partClick === "forearms" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("lower arms", "forearms");
                setPartClick("forearms");
              }}
            />
            <Traps
              fill={partClick === "traps" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("back", "traps");
                setPartClick("traps");
              }}
            />
            <Serratus_anterior
              fill={partClick === "serratus anterior" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("chest", "serratus anterior");
                setPartClick("serratus anterior");
              }}
            />
            <Abductors
              fill={partClick === "abductors" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("upper legs", "abductors");
                setPartClick("abductors");
              }}
            />
            <Levator_scapulae
              fill={partClick === "levator scapulae" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("neck", "levator scapulae");
                setPartClick("levator scapulae");
              }}
            />
            <Abs
              fill={partClick === "abs" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("waist", "abs");
                setPartClick("abs");
              }}
            />
            <Lats
              fill={partClick === "lats" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("back", "lats");
                setPartClick("lats");
              }}
            />
          </svg>
        </StyledSvgContainer>
      </StyledLeftContainer>
      <StyledRightContainer>
        <StyledH2>사용할 기구를 선택해주세요</StyledH2>
        <StyledMuscleFormControl>
          <InputLabel>Equipment</InputLabel>
          <StyledSelect
            label="Equipment"
            value={equipment || ""}
            onChange={handleChangeEquipment}
          >
            {equipmentList.map((equipment) => (
              <MenuItem key={equipment} value={equipment}>
                {equipment}
              </MenuItem>
            ))}
          </StyledSelect>
        </StyledMuscleFormControl>
        <StyledH2Margin>추천 운동</StyledH2Margin>
        <StyledMuscleFormControl>
          <InputLabel>Exercise</InputLabel>
          <ExerciseWrapper>
            <SelectExercise
              label="Exercise"
              value={exerciseName || ""}
              onChange={handleChangeExercise}
            >
              {exerciseList.map((exercise) => (
                <MenuItem key={exercise.name} value={exercise.name}>
                  {exercise.name}
                </MenuItem>
              ))}
            </SelectExercise>
            <LikeButton onClick={handleClickLike}>
              {isLiked ? <LikeIcon /> : <NotLikeIcon />}
            </LikeButton>
          </ExerciseWrapper>
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
          {exercise ? (
            <StyledH5>{exercise?.name}</StyledH5>
          ) : (
            <StyledH5 style={{ visibility: "hidden" }}>빈 운동</StyledH5>
          )}
        </StyledSvgContainer>
      </StyledRightContainer>
      <NotLoginedModal showModal={showModal} closeModal={handleCloseModal} />
    </StyledContainer>
  );
}
