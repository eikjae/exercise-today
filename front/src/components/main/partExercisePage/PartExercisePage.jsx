/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect, useContext } from "react";
import { InputLabel, MenuItem } from "@mui/material";
import * as Api from "../../../api";
import { UserStateContext } from "../../../App";
import { toast } from "react-toastify";

import {
  StyledContainer,
  LeftWrapper,
  H2,
  H2Margin,
  SelectBodyWrapper,
  SvgWrapper,
  RightWrapper,
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
import Loading from "../../loading/Loading";

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
        return toast.error("로그인 후 사용 가능한 서비스입니다.");
      }
      // 로그인 했을 경우 좋아요 항목에 추가/삭제 요청
      await Api.put("like/exercise", { exercise: exercise.name });
      setIsLiked((prev) => !prev);

      // 좋아요 완료를 보여주는 toast
      let message = "";
      if (isLiked) {
        message = "❌좋아요가 취소되었습니다!";
      } else {
        message = "⭕좋아요가 완료되었습니다!";
      }
      return toast.success(message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledContainer>
      {bodyPartList.length === 0 ? <Loading /> : <></>}
      <LeftWrapper>
        <H2>운동을 원하는 부위를 선택해주세요</H2>
        <SelectBodyWrapper>
          <StyledBodyFormControl>
            <InputLabel>부위</InputLabel>
            <StyledSelect
              label="부위"
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
            <InputLabel>상세부위</InputLabel>
            <StyledSelect
              label="상세부위"
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
        </SelectBodyWrapper>
        <SvgWrapper>
          <svg
            style={{ width: "100%", height: "100%", border: "1px" }}
            viewBox="50 -50 413 400"
          >
            <Body />
            <Cardiovascular
              fill={partClick === "심혈관계" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("전신", "심혈관계");
                setPartClick("심혈관계");
              }}
            />
            <Quads
              fill={partClick === "허벅지 앞근육" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("윗 다리", "허벅지 앞근육");
                setPartClick("허벅지 앞근육");
              }}
            />
            <Calves
              fill={partClick === "종아리 근육" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("아랫 다리", "종아리 근육");
                setPartClick("종아리 근육");
              }}
            />
            <Pectorals
              fill={partClick === "가슴근육" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("가슴", "가슴근육");
                setPartClick("가슴근육");
              }}
            />
            <Glutes
              fill={partClick === "둔근" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("윗 다리", "둔근");
                setPartClick("둔근");
              }}
            />
            <Hamstrings
              fill={partClick === "허벅지 뒷근육" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("윗 다리", "허벅지 뒷근육");
                setPartClick("허벅지 뒷근육");
              }}
            />
            <Adductors
              fill={partClick === "내전근" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("윗 다리", "내전근");
                setPartClick("내전근");
              }}
            />

            <Triceps
              fill={partClick === "삼두근" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("윗 팔", "삼두근");
                setPartClick("삼두근");
              }}
            />
            <Spine
              fill={partClick === "척추" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("등", "척추");
                setPartClick("척추");
              }}
            />
            <Upper_back
              fill={partClick === "등 상부" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("등", "등 상부");
                setPartClick("등 상부");
              }}
            />
            <Biceps
              fill={partClick === "이두근" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("윗 팔", "이두근");
                setPartClick("이두근");
              }}
            />
            <Delts
              fill={partClick === "삼각근" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("어깨", "삼각근");
                setPartClick("삼각근");
              }}
            />
            <Forearms
              fill={partClick === "팔뚝" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("아랫 팔", "팔뚝");
                setPartClick("팔뚝");
              }}
            />
            <Traps
              fill={partClick === "상모근" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("등", "상모근");
                setPartClick("상모근");
              }}
            />
            <Serratus_anterior
              fill={partClick === "전거근" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("가슴", "전거근");
                setPartClick("전거근");
              }}
            />
            <Abductors
              fill={partClick === "외전근" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("윗 다리", "외전근");
                setPartClick("외전근");
              }}
            />
            <Levator_scapulae
              fill={partClick === "견갑거근" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("목", "견갑거근");
                setPartClick("견갑거근");
              }}
            />
            <Abs
              fill={partClick === "복근" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("허리", "복근");
                setPartClick("복근");
              }}
            />
            <Lats
              fill={partClick === "광배근" ? "#FF6666" : undefined}
              onClick={() => {
                handleClickPart("등", "광배근");
                setPartClick("광배근");
              }}
            />
          </svg>
        </SvgWrapper>
      </LeftWrapper>
      <RightWrapper>
        <H2>사용할 기구를 선택해주세요</H2>
        <StyledMuscleFormControl>
          <InputLabel>기구</InputLabel>
          <StyledSelect
            label="기구"
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
        <H2Margin>추천 운동</H2Margin>
        <StyledMuscleFormControl>
          <InputLabel>추천 운동</InputLabel>
          <ExerciseWrapper>
            <SelectExercise
              label="추천 운동"
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
        <SvgWrapper>
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
        </SvgWrapper>
      </RightWrapper>
    </StyledContainer>
  );
}
