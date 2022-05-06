import React from "react";
import {
  ExerciseListContainer,
  ListWrapper,
  IconWrapper,
  H6,
  TotalWrapper,
  StyledAddIcon,
  StyledRemoveIcon,
} from "./ExerciseList.style";

import { post } from "../../../../api";

const ExerciseList = ({
  title,
  weight,
  exerciseList,
  setExerciseList,
  setTotalExerciseCalrorie,
  totalExerciseCalrorie,
}) => {
  return (
    <ExerciseListContainer>
      <h5>{title}</h5>
      <ol>
        {exerciseList?.map((e, index) => {
          return (
            <li key={index}>
              <ListWrapper>
                <H6>{e.name}</H6>
                <IconWrapper>
                  <H6 style={{ marginRight: "0.5rem" }}>{e.time}시간</H6>
                  <StyledAddIcon
                    style={{ cursor: "pointer" }}
                    onClick={async () => {
                      try {
                        const res = await post("exercise/calories", {
                          weight,
                          name: e.name,
                          time: 1,
                        });
                        setTotalExerciseCalrorie((current) => {
                          return current + Number(Number(res.data).toFixed(0));
                        });
                        const temp = [...exerciseList];
                        temp[index].time += 1;
                        setExerciseList([...temp]);
                      } catch (e) {
                        throw new Error(e);
                      }
                    }}
                  />
                  <StyledRemoveIcon
                    style={{ cursor: "pointer" }}
                    onClick={async () => {
                      try {
                        const res = await post("exercise/calories", {
                          weight,
                          name: e.name,
                          time: 1,
                        });
                        setTotalExerciseCalrorie((current) => {
                          return current - Number(Number(res.data).toFixed(0));
                        });
                        const temp = [...exerciseList];
                        if (e.time === 1) {
                          setTotalExerciseCalrorie(0);
                          temp.splice(index, 1);
                          setExerciseList([...temp]);
                          return;
                        }
                        temp[index].time -= 1;
                        setExerciseList([...temp]);
                      } catch (e) {
                        throw new Error(e);
                      }
                    }}
                  />
                </IconWrapper>
              </ListWrapper>
            </li>
          );
        })}
      </ol>
      <TotalWrapper>총 칼로리: {totalExerciseCalrorie}</TotalWrapper>
    </ExerciseListContainer>
  );
};

export default ExerciseList;
