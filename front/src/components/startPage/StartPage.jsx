import React, { useEffect, useRef, useState } from "react";
import {
  ExerciseSpan,
  FirstSectionLeft,
  FirstSectionRight,
  H5,
  Image,
  LastSectionLeft,
  LastSectionRight,
  B,
  LeftH2,
  RightH2,
  SecondSectionLeft,
  SecondSectionRight,
  Section,
  StyledContainer,
  ThirdSectionLeft,
  ThirdSectionRight,
  ThirdSpan,
} from "./StartPage.style";
import ScrollList from "../scrollList/ScrollList";

const StartPage = (props) => {
  const [section, setSection] = useState([]);
  const section_1 = useRef();
  const section_2 = useRef();
  const section_3 = useRef();
  const section_4 = useRef();

  const scrollNames = ["얼마나?", "어떻게?", "음악을 통해!", "기록을 통해!"];
  const handleOnClick = (num) => {
    window.scrollTo({
      top: section[num]?.current?.offsetTop - 80,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setSection([section_1, section_2, section_3, section_4]);
  }, []);
  return (
    <StyledContainer>
      <ScrollList
        handleOnClick={handleOnClick}
        scrollNames={scrollNames}
      ></ScrollList>
      <Section ref={section_1}>
        <FirstSectionLeft>
          <Image
            src="startPageImg/image_1.jpg"
            alt="someone sitting and resting"
            width={"210px"}
            height={"300px"}
          />
        </FirstSectionLeft>
        <FirstSectionRight>
          <RightH2>
            얼마나{" "}
            <ExerciseSpan>
              <b>운동</b>
            </ExerciseSpan>
            해야 하지?
          </RightH2>
          <H5>
            체내에서 칼로리를 에너지로 사용하고 그 나머지를 지방으로
            저장하기까지는 음식섭취를 시작한 시점부터 <B>4-8시간</B>이 걸립니다.{" "}
            <br />
            <br /> 즉 음식을 과다 섭취한 후, 신체활동이 없다면 최대 <B>
              8시간
            </B>{" "}
            안에 <br /> 지방(살)으로 축적될 가능성이 높습니다. <br />
            <br /> <B>380개</B>의 운동 데이터와 사용자 정보를 바탕으로 <br />{" "}
            오늘 하루, 얼마나 운동해야 하는지 알려드립니다!
          </H5>
        </FirstSectionRight>
      </Section>
      <Section ref={section_2}>
        <SecondSectionLeft>
          <LeftH2>
            어떻게{" "}
            <ExerciseSpan>
              <b>운동</b>
            </ExerciseSpan>
            하는 것이 좋을까?
          </LeftH2>
          <H5>
            신체 부위에 따라 운동 방법이 달라지는 것은 당연합니다. <br /> <br />
            단련하고 싶은 부위를 알려주시면 <B>1500개의</B> 부위별,
            <br />
            <br /> 도구별 운동 데이터를 기반으로 관련된 운동을 <br />{" "}
            <B>추천</B>해드립니다!
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
      <Section ref={section_3}>
        <ThirdSectionLeft>
          <LeftH2>
            <ExerciseSpan>
              <b>음악</b>
            </ExerciseSpan>
            을 통해 더 즐겁게!
          </LeftH2>
          <H5>
            음악과 함께 운동을 하면 평소보다 <B>15%</B> 정도 오랜 시간 <br />{" "}
            <B>운동</B>을 할 수 있다는 스포츠 심리학 연구결과가 있습니다. <br />{" "}
            <br />
            <B>3000개</B>의 음악 데이터를 기반으로 사용자가 더 운동할 수 <br />{" "}
            <ThirdSpan>
              있도록 음악을 <B>추천</B>해드립니다.
            </ThirdSpan>
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
      <Section ref={section_4}>
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
          <RightH2>
            <ExerciseSpan>
              <b>기록</b>
            </ExerciseSpan>
            을 통해 꾸준하게
          </RightH2>
          <H5>
            목표설정과 기록의 중요성에 대한 연구 결과가 있습니다. <br />
            <br /> 목표는 있었지만 기록하지 않았던 <B>13%</B>는 목표가 전혀
            없었던 <B>84%</B>보다 <B>2배</B> 이상의 성과를, <br />
            <br /> 명확한 목표와 계획을 세우고 구체적으로 기록한 <B>
              3%
            </B>는 <br />
            <B>84%</B>보다 평균 <B>10배</B>의 성과를 얻었다고 합니다. <br />
            <br />
            (1979 하버드) 캘린더 기능을 통해 매일 기록하며 원하는 목표를 위해
            꾸준하게 나아갈 수 있도록 도와드리겠습니다.
          </H5>
        </LastSectionRight>
      </Section>
    </StyledContainer>
  );
};

export default StartPage;
