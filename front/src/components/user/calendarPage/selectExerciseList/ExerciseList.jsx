import React from "react";
import {
  ExerciseListContainer,
  ListWrapper,
  IconWrapper,
  H6,
  TotalWrapper,
} from "./ExerciseList.style";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
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
                <H6>{e.exercise}</H6>
                <IconWrapper>
                  <H6 style={{ marginRight: "0.5rem" }}>{e.hour}시간</H6>
                  <AddIcon
                    style={{ cursor: "pointer" }}
                    onClick={async () => {
                      try {
                        const res = await post("exercise/calories", {
                          weight,
                          name: e.exercise,
                          time: 1,
                        });
                        setTotalExerciseCalrorie((current) => {
                          return current + Number(Number(res.data).toFixed(0));
                        });
                        const temp = [...exerciseList];
                        temp[index].hour += 1;
                        setExerciseList([...temp]);
                      } catch (e) {
                        throw new Error(e);
                      }
                    }}
                  />
                  <RemoveIcon
                    style={{ cursor: "pointer" }}
                    onClick={async () => {
                      try {
                        const res = await post("exercise/calories", {
                          weight,
                          name: e.exercise,
                          time: 1,
                        });
                        setTotalExerciseCalrorie((current) => {
                          return current - Number(Number(res.data).toFixed(0));
                        });
                        const temp = [...exerciseList];
                        if (e.hour === 1) {
                          setTotalExerciseCalrorie(0);
                          temp.splice(index, 1);
                          setExerciseList([...temp]);
                          return;
                        }
                        temp[index].hour -= 1;
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
