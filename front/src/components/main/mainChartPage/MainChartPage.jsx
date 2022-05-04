import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { post } from "../../../api";
import InformationSection from "./informationSection/InformationSection";
import SelectExerciseSection from "./selectExerciseSection/SelectExerciseSection";
import ChartSection from "./chartSection/ChartSection";
import {
  StyledBottomSection,
  StyledContainer,
  StyledSubTitle,
  StyledTopSection,
} from "./MainChartPage.style";

const StyledTextWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  justify-content: center;
`;

const StyledText = styled.h2`
  color: #281461;
`;

const StyledButton = styled.button`
  margin-top: 10px;
  border-radius: 15px;
  padding: 5px;
  width: 400px;
  height: 40px;
  color: white;
  border: none;
  background-color: #281461;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #785dc0;
  }
`;

const MainChartPage = (props) => {
  const navigate = useNavigate();
  const [selectSwitch, setSelectSwitch] = useState([
    {
      id: 0,
      isSelected: true,
      name: "유산소",
    },
    {
      id: 1,
      isSelected: false,
      name: "무산소",
    },
    {
      id: 2,
      isSelected: false,
      name: "구기",
    },
    {
      id: 3,
      isSelected: false,
      name: "라켓",
    },
    {
      id: 4,
      isSelected: false,
      name: "육상",
    },
    {
      id: 5,
      isSelected: false,
      name: "수상",
    },
    {
      id: 6,
      isSelected: false,
      name: "댄스",
    },
    {
      id: 7,
      isSelected: false,
      name: "사이클",
    },
    {
      id: 8,
      isSelected: false,
      name: "양궁",
    },
    {
      id: 9,
      isSelected: false,
      name: "복싱",
    },
    {
      id: 10,
      isSelected: false,
      name: "격투",
    },
    {
      id: 11,
      isSelected: false,
      name: "기타",
    },
  ]);
  const colors = [
    "#B22727",
    "#78938A",
    "#525E75",
    "#A64B2A",
    "#B22727",
    "#78938A",
    "#525E75",
    "#A64B2A",
  ];
  const { calorie, height, weight } = useParams();
  const [graphData, setGraphData] = useState(null);

  const handleOnClick = async (e) => {
    const name = e.target.value;
    const index = e.target.id;
    try {
      setGraphData(null);
      const exerciseInfo = await post("exercise/timeinfo", {
        weight: Number(weight),
        category: name,
        calories: Number(calorie),
      });
      setGraphData(
        exerciseInfo.data.sort((a, b) => {
          if (a.time < b.time) return 1;
          if (a.time > b.time) return -1;
          return 0;
        })
      );
      setNewSwitch(index);
    } catch (e) {
      throw new Error(e);
    }
  };

  const setNewSwitch = (index) => {
    setSelectSwitch(() => {
      const newSwitch = selectSwitch.map((s) => {
        const newS = { ...s };
        newS.isSelected = false;
        return newS;
      });
      newSwitch[index].isSelected = true;
      setSelectSwitch(newSwitch);
    });
  };

  useEffect(() => {
    try {
      const postGraphData = async () => {
        const exerciseInfo = await post("exercise/timeinfo", {
          weight: Number(weight),
          category: "유산소",
          calories: Number(calorie),
        });
        setGraphData(
          exerciseInfo.data.sort((a, b) => {
            if (a.time < b.time) return 1;
            if (a.time > b.time) return -1;
            return 0;
          })
        );
      };
      postGraphData();
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  return (
    <>
      <StyledContainer fixed>
        <StyledTopSection>
          <InformationSection
            calorie={calorie}
            height={height}
            weight={weight}
          />
          <SelectExerciseSection
            selectSwitch={selectSwitch}
            handleOnClick={handleOnClick}
          />
        </StyledTopSection>
        <StyledBottomSection>
          <StyledSubTitle>
            칼로리 소비를 위해 얼마나 운동해야 할까요?
          </StyledSubTitle>
          <ChartSection data={graphData} colors={colors} />
        </StyledBottomSection>
      </StyledContainer>
      <StyledContainer fixed>
        <StyledTextWrapper>
          <StyledText>운동과 함께할 음악도 추천해드려요!</StyledText>
          <StyledButton onClick={() => navigate("/music")}>
            운동에 맞는 음악 추천받기
          </StyledButton>
        </StyledTextWrapper>
        <StyledTextWrapper>
          <StyledText>원하는 운동이 없나요?!</StyledText>
          <StyledButton onClick={() => navigate("/exercise")}>
            부위별 운동 추천받기
          </StyledButton>
        </StyledTextWrapper>
      </StyledContainer>
    </>
  );
};

export default MainChartPage;
