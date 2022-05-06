import React, { useEffect, useRef, useState } from "react";
import {
  FirstSectionLeft,
  FirstSectionRight,
  H5,
  Image,
  LastSectionLeft,
  LastSectionRight,
  LeftH2,
  RightH2,
  SecondSectionLeft,
  SecondSectionRight,
  Section,
  StyledContainer,
  ThirdSectionLeft,
  ThirdSectionRight,
} from "./StartPage.style";

const StartPage = (props) => {
  return (
    <StyledContainer>
      <Section>
        <FirstSectionLeft>
          <Image
            src="startPageImg/image_1.jpg"
            alt="someone sitting and resting"
            width={"210px"}
            height={"300px"}
          />
        </FirstSectionLeft>
        <FirstSectionRight>
          <RightH2>얼마나 운동해야 하지?</RightH2>
          <H5>
            체내에서 칼로리를 에너지로 사용하고 그 나머지를 지방으로
            저장하기까지는 음식섭취를 시작한 시점부터 4-8시간이 걸립니다. 즉
            음식을 과다 섭취한 후, 신체활동이 없다면 최대 8시간 안에
            지방(살)으로 축적될 가능성이 높습니다. 380개의 운동 데이터와 사용자
            정보를 바탕으로 오늘 하루, 얼마나 운동해야 하는지 알려드립니다!
          </H5>
        </FirstSectionRight>
      </Section>
      <Section>
        <SecondSectionLeft>
          <LeftH2>어떻게 운동하는 것이 좋을까?</LeftH2>
          <H5>
            신체 부위에 따라 운동 방법이 달라지는 것은 당연합니다. 단련하고 싶은
            부위를 알려주시면 1500개의 부위별, 도구별 운동 데이터를 기반으로
            관련된 운동을 추천해드립니다!
          </H5>
        </SecondSectionLeft>
        <SecondSectionRight>
          <Image
            src="startPageImg/image_2.jpg"
            alt="
            someone doing exercise"
            width={"320px"}
            height={"220px"}
          />
        </SecondSectionRight>
      </Section>
      <Section>
        <ThirdSectionLeft>
          <LeftH2>음악을 통해 더 즐겁게!</LeftH2>
          <H5>
            음악과 함께 운동을 하면 평소보다 15% 정도 오랜 시간 운동을 할 수
            있다는 스포츠 심리학 연구결과가 있습니다. 3000개의 음악 데이터를
            기반으로 사용자가 더 즐겁게 운동할 수 있도록 음악을 추천해드립니다.
          </H5>
        </ThirdSectionLeft>
        <ThirdSectionRight>
          <Image
            src="startPageImg/image_3.jpg"
            alt="
            someone listening music"
            width={"250px"}
            height={"250px"}
          />
        </ThirdSectionRight>
      </Section>
      <Section>
        <LastSectionLeft>
          <Image
            src="startPageImg/image_4.jpg"
            alt="
            someone listening music"
            width={"250px"}
            height={"300px"}
          />
        </LastSectionLeft>
        <LastSectionRight>
          <RightH2>기록을 통해 꾸준하게</RightH2>
          <H5>
            목표설정과 기록의 중요성에 대한 연구 결과가 있습니다. 목표는
            있었지만 기록하지 않았던 13%는 목표가 전혀 없었던 84%보다 2배 이상의
            성과를, 명확한 목표와 계획을 세우고 구체적으로 기록한 3%는 84%보다
            평균 10배의 성과를 얻었다고 합니다. (1979 하버드) 캘린더 기능을 통해
            매일 기록하며 원하는 목표를 위해 꾸준하게 나아갈 수 있도록
            도와드리겠습니다.
          </H5>
        </LastSectionRight>
      </Section>
    </StyledContainer>
  );
};

export default StartPage;
