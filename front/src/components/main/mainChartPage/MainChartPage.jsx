import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { post } from "../../../api";
import InformationSection from "./informationSection/InformationSection";
import SelectExerciseSection from "./selectExerciseSection/SelectExerciseSection";
import ChartSection from "./chartSection/ChartSection";
import {
  BottomSection,
  Container,
  SubTitle,
  TopSection,
  TextWrapper,
  Text,
  StyledButton,
} from "./MainChartPage.style";

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

  const sortMappedGraphData = (exerciseInfo) => {
    const mappedData = exerciseInfo.data.map((d) => {
      const time = d.time.split("시간");
      const hour = Number(time[0]);
      const min = Number(time[1].replace("분", "")) / 60;
      return {
        name: d.name,
        hour: Number((hour + min).toFixed(2)),
      };
    });
    mappedData.sort((a, b) => {
      console.log(a, b);
      return Number(b.hour) - Number(a.hour);
    });

    return mappedData;
  };

  const handleOnClick = async (e) => {
    console.log("dd");
    const name = e.target.value;
    const index = e.target.id;
    try {
      setGraphData(null);
      const exerciseInfo = await post("exercise/timeinfo", {
        weight: Number(weight),
        category: name,
        calories: Number(calorie),
      });
      const mappedData = sortMappedGraphData(exerciseInfo);
      setGraphData(mappedData);
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
        const mappedData = sortMappedGraphData(exerciseInfo);
        setGraphData(mappedData);
      };
      postGraphData();
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  return (
    <>
      <Container fixed>
        <TopSection>
          <InformationSection
            calorie={calorie}
            height={height}
            weight={weight}
          />
          <SelectExerciseSection
            selectSwitch={selectSwitch}
            handleOnClick={handleOnClick}
          />
        </TopSection>
        <BottomSection>
          <SubTitle>칼로리 소비를 위해 얼마나 운동해야 할까요?</SubTitle>
          <ChartSection data={graphData} colors={colors} />
        </BottomSection>
      </Container>
      <Container fixed>
        <TextWrapper>
          <Text>운동과 함께할 음악도 추천해드려요!</Text>
          <StyledButton onClick={() => navigate("/music")}>
            운동에 맞는 음악 추천받기
          </StyledButton>
        </TextWrapper>
        <TextWrapper>
          <Text>원하는 운동이 없나요?!</Text>
          <StyledButton onClick={() => navigate("/exercise")}>
            부위별 운동 추천받기
          </StyledButton>
        </TextWrapper>
      </Container>
    </>
  );
};

export default MainChartPage;
