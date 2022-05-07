import React from "react";
import {
  ExerciseListContainer,
  ListWrapper,
  IconWrapper,
  H6,
  TotalWrapper,
  StyledAddIcon,
  StyledRemoveIcon,
  Hr,
} from "./ExerciseList.style";

import { post } from "../../../../api";
import { CalendarDeleteList } from "../../like/cardSection/calendarButtonSection/CalendarButtonComp";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      <Accordion
        style={{
          boxShadow:
            "box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5>{title}</h5>
        </AccordionSummary>
        <AccordionDetails>
          <ol>
            {exerciseList?.map((e, index) => {
              return (
                <>
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
                                return (
                                  current + Number(Number(res.data).toFixed(0))
                                );
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
                                return (
                                  current - Number(Number(res.data).toFixed(0))
                                );
                              });
                              const temp = [...exerciseList];
                              if (e.time === 1) {
                                setTotalExerciseCalrorie(0);
                                temp.splice(index, 1);
                                setExerciseList([...temp]);
                                CalendarDeleteList(e.name);

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
                  <Hr />
                </>
              );
            })}
          </ol>
        </AccordionDetails>
      </Accordion>
      <TotalWrapper>총 칼로리: {totalExerciseCalrorie}</TotalWrapper>
    </ExerciseListContainer>
  );
};

export default ExerciseList;
