import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ExerciseSpan,
  FirstSectionLeft,
  FirstSectionRight,
  P,
  Image,
  LastSectionLeft,
  LastSectionRight,
  B,
  SecondSectionLeft,
  SecondSectionRight,
  Section,
  StyledContainer,
  ThirdSectionLeft,
  ThirdSectionRight,
  ThirdSpan,
  FirstSectionSecondContent,
  FirstSectionContentWrapper,
  RightTitle,
  LeftTitle,
  SecondSectionContentWrapper,
  ThirdSectionContentWrapper,
  FourthSectionContentWrapper,
} from "./StartPage.style";
import ScrollList from "../scrollList/ScrollList";

const StartPage = (props) => {
  const [section, setSection] = useState([]);
  const section_1 = useRef();
  const section_2 = useRef();
  const section_3 = useRef();
  const section_4 = useRef();
  let [curIndex, setCurIndex] = useState(0);

  const scrollNames = ["얼마나?", "어떻게?", "음악을 통해!", "기록을 통해!"];
  const handleOnClick = (num) => {
    window.scrollTo({
      top: section[num]?.current?.offsetTop - 80,
      behavior: "smooth",
    });
  };

  const handleScrollEvent = useCallback(() => {
    const y = window.scrollY;
    const height = window.innerHeight / 1.5;
    for (let i = 0; section.length; i++) {
      if (
        y > section[i].current.offsetTop - height &&
        y <=
          section[i].current.offsetTop -
            height +
            section[i].current.offsetHeight
      ) {
        console.log(section[i].current.className);
        setCurIndex(i);
        break;
      }
    }
  }, [section]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [handleScrollEvent]);

  useEffect(() => {
    setSection([section_1, section_2, section_3, section_4]);
  }, []);
  return (
    <StyledContainer>
      <ScrollList
        handleOnClick={handleOnClick}
        scrollNames={scrollNames}
        curIndex={curIndex}
      ></ScrollList>
      <Section
        ref={section_1}
        className={curIndex === 0 ? "target" : "non-target"}
      >
        <FirstSectionLeft>
          <Image
            src="startPageImg/image_1.jpg"
            alt="someone sitting and resting"
            width={"360px"}
            height={"540px"}
            className={curIndex === 0 ? "target" : "non-target"}
          />
        </FirstSectionLeft>
        <FirstSectionRight>
          <RightTitle className={curIndex === 0 ? "target" : "non-target"}>
            얼마나{" "}
            <ExerciseSpan>
              <b>운동</b>
            </ExerciseSpan>
            해야 하지?
          </RightTitle>
          <FirstSectionContentWrapper
            className={curIndex === 0 ? "target" : "non-target"}
          >
            <P>
              체내에서 칼로리를 에너지로 사용하고 그 나머지를 지방으로 <br />
              저장하기까지는 음식섭취를 시작한 시점부터 <B>4-8시간</B>이
              걸립니다.{" "}
            </P>
            <FirstSectionSecondContent>
              <br /> 즉 음식을 과다 섭취한 후, 신체활동이 없다면 최대{" "}
              <B>8시간</B> 안에 <br /> 지방(살)으로 축적될 가능성이 높습니다.{" "}
              <br />
            </FirstSectionSecondContent>
            <P>
              <br /> <B>380개</B>의 운동 데이터와 사용자 정보를 바탕으로 <br />{" "}
              <P style={{ marginLeft: "150px" }}>
                오늘 하루, 얼마나 운동해야 하는지 알려드립니다!
              </P>
            </P>
          </FirstSectionContentWrapper>
        </FirstSectionRight>
      </Section>
      <Section
        ref={section_2}
        className={curIndex === 1 ? "target" : "non-target"}
      >
        <SecondSectionLeft>
          <LeftTitle className={curIndex === 1 ? "target" : "non-target"}>
            어떻게{" "}
            <ExerciseSpan>
              <b>운동</b>
            </ExerciseSpan>
            하는 것이 좋을까?
          </LeftTitle>
          <SecondSectionContentWrapper
            className={curIndex === 1 ? "target" : "non-target"}
          >
            <P>
              신체 부위에 따라 운동 방법이 달라지는 것은 당연합니다. <br />{" "}
              <br />
              단련하고 싶은 부위를 알려주시면 <B>1500개의</B> 부위별,
              <br />
              <br /> 도구별 운동 데이터를 기반으로 관련된 운동을 <br />{" "}
              <P style={{ position: "relative", left: "-250px" }}>
                {" "}
                <br />
                <B>추천</B>해드립니다!
              </P>
            </P>
          </SecondSectionContentWrapper>
        </SecondSectionLeft>
        <SecondSectionRight>
          <Image
            src="startPageImg/image_2.jpg"
            alt="
            someone doing exercise"
            width={"600px"}
            height={"360px"}
            className={curIndex === 1 ? "target" : "non-target"}
          />
        </SecondSectionRight>
      </Section>
      <Section
        ref={section_3}
        className={curIndex === 2 ? "target" : "non-target"}
      >
        <ThirdSectionLeft>
          <LeftTitle className={curIndex === 2 ? "target" : "non-target"}>
            <ExerciseSpan>
              <b>음악</b>
            </ExerciseSpan>
            을 통해 더 즐겁게!
          </LeftTitle>
          <ThirdSectionContentWrapper
            className={curIndex === 2 ? "target" : "non-target"}
          >
            <P>
              음악과 함께 운동을 하면 평소보다 <B>15%</B> 정도 오랜 시간 <br />{" "}
              <B>운동</B>을 할 수 있다는 스포츠 심리학 연구결과가 있습니다.{" "}
              <br /> <br />
              <B>3000개</B>의 음악 데이터를 기반으로 사용자가 더 운동할 수{" "}
              <br />{" "}
              <ThirdSpan>
                있도록 음악을 <B>추천</B>해드립니다.
              </ThirdSpan>
            </P>
          </ThirdSectionContentWrapper>
        </ThirdSectionLeft>
        <ThirdSectionRight>
          <Image
            src="startPageImg/image_3.jpg"
            alt="
            someone listening music"
            width={"480px"}
            height={"320px"}
            className={curIndex === 2 ? "target" : "non-target"}
          />
        </ThirdSectionRight>
      </Section>
      <Section
        ref={section_4}
        className={curIndex === 3 ? "target" : "non-target"}
      >
        <LastSectionLeft>
          <Image
            src="startPageImg/image_4.jpg"
            alt="
            someone listening music"
            width={"400px"}
            height={"600px"}
            className={curIndex === 3 ? "target" : "non-target"}
          />
        </LastSectionLeft>
        <LastSectionRight>
          <RightTitle className={curIndex === 3 ? "target" : "non-target"}>
            <ExerciseSpan>
              <b>기록</b>
            </ExerciseSpan>
            을 통해 꾸준하게
          </RightTitle>
          <FourthSectionContentWrapper
            className={curIndex === 3 ? "target" : "non-target"}
          >
            <P>
              목표설정과 기록의 중요성에 대한 연구 결과가 있습니다. <br />
              <br /> 목표는 있었지만 기록하지 않았던 <B>13%</B>는 <br /> 목표가
              전혀 없었던 <B>84%</B>보다 <B>2배</B> 이상의 성과를, <br />
              <br /> 명확한 목표와 계획을 세우고 구체적으로 기록한 <B>
                3%
              </B>는 <br />
              <B>84%</B>보다 평균 <B>10배</B>의 성과를 얻었다고 합니다. <br />
              <br />
              캘린더 기능을 통해 매일 기록하며 원하는 목표를 위해 꾸준하게
              나아갈 수 있도록 도와드리겠습니다.
            </P>
          </FourthSectionContentWrapper>
        </LastSectionRight>
      </Section>
    </StyledContainer>
  );
};

export default StartPage;
