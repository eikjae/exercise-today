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
  FourthSectionLeft,
  FourthSectionRight,
  LastSectionContentWrapper,
  StyledButton,
} from "./StartPage.style";
import ScrollList from "../scrollList/ScrollList";
import { useNavigate } from "react-router-dom";

const StartPage = (props) => {
  const [section, setSection] = useState([]);
  const navigate = useNavigate();
  const section_1 = useRef();
  const section_2 = useRef();
  const section_3 = useRef();
  const section_4 = useRef();
  const section_5 = useRef();
  let [curIndex, setCurIndex] = useState(0);

  const scrollNames = [
    "얼마나 해야 할까?",
    "어떻게 해야 할까?",
    "음악 추천 기능",
    "기록 기능",
    "칼로리 확인",
  ];
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

  const handleClickGoFoodLink = () => {
    navigate("/food");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [handleScrollEvent]);

  useEffect(() => {
    setSection([section_1, section_2, section_3, section_4, section_5]);
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
              우리가 먹은 음식이 <B>지방</B>(살)이 되기까지는 <br />
              음식을 <B>먹기 시작한 시점</B>으로부터<br /> 평균적으로 <B style={{fontSize: "2rem"}}>6시간 </B>정도가 걸린다고 합니다.{" "}
            </P>
            <FirstSectionSecondContent>
              <br /> 우리가 먹은 음식이 지방이 되지 못하도록,<br /> <B>칼로리를 소모</B>하는 가장 좋은 방법은, 바로{" "}
              <B>'운동'</B>입니다. <br /> 하지만, <B style={{fontSize: "2rem"}}>'얼마나'</B> 운동을 해야 하는지는 잘 알고 있나요?{" "}
              <br />
            </FirstSectionSecondContent>
            <P>
            <B>'오늘도 운동'</B>은 <B style={{fontSize: "2rem"}}>280개</B>의 <B style={{fontSize: "2rem"}}>운동-칼로리 데이터</B>를 기반으로 <br />{" "}
              
              잔여 칼로리를 소모하기 위한 <B>추천 운동</B>들과<br /> <B>운동에 따른 권장 시간</B> 정보를 함께 제공해 드립니다.
              
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
              <B>바쁜 일상</B> 속에서 시간을 만들어 운동하신다면, <br/> <B>효율적인 운동 방법</B>이 궁금하지 않으신가요? <br />{" "}
              <br />
              <B>'오늘도 운동'</B>은 <B style={{fontSize: "2rem"}}>1,327개</B>의 <B style={{fontSize: "2rem"}}>부위별</B>,
              <br />
              <B style={{fontSize: "2rem"}}>도구별</B> 운동 데이터를 기반으로<br /> <B> 가장 효과적인 운동 방법</B>을 <B>추천</B>해 드립니다!
              
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
              음악을 들으며 운동을 하면, 평소보다 <B style={{fontSize: "2rem"}}>15%</B>정도 <B>더 오래</B> <br />{" "}
              운동을 할 수 있다는 연구결과가 있습니다.{" "}
              <br /> <br />

              <B>오늘도 운동</B>은 <B style={{fontSize: "2rem"}}>데이터 분석</B>을 통해 엄선된 <br /><B style={{fontSize: "2rem"}}>11,825개</B>의 <B>음악 데이터</B>를 기반으로<br /> 사용자가 <B>더 즐겁고, 힘들지 않게</B> 운동할 수{" "}
              <br />{" "}
              <ThirdSpan>
                있도록 <B>기호에 맞는 음악</B>을 <B>추천</B>해드립니다.
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
        <FourthSectionLeft>
          <Image
            src="startPageImg/image_4.jpg"
            alt="
            someone listening music"
            width={"400px"}
            height={"600px"}
            className={curIndex === 3 ? "target" : "non-target"}
          />
        </FourthSectionLeft>
        <FourthSectionRight>
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
              <B style={{fontSize: "2rem"}}>기록</B>의 중요성에 대한 흥미로운 연구 결과가 있습니다. <br />
              <br /> 이 연구에서, 목표는 있었지만 기록하지 않았던 <B style={{fontSize: "2rem"}}>13%</B>는 <br /> 목표가
              전혀 없었던 <B>84%</B>보다 <B style={{fontSize: "2rem"}}>2배</B> 이상의 성과를, <br />
              <br /> 명확한 목표와 계획을 세우고 구체적으로 기록한 <B style={{fontSize: "2rem"}}>
                3%
              </B>는 <br />
              앞에서의 <B>84%</B>보다 <B style={{fontSize: "2rem"}}>10배</B> 이상의 성과를 얻었다고 합니다. <br />
              <br />
              <B>오늘도 운동</B>은 <B>체중</B>과 <B>칼로리</B>를 기록하는 <B style={{fontSize: "2rem"}}>캘린더 기능</B>을 통해<br /> 여러분들이 원하는 목표를 향해 <B>꾸준히</B> 나아갈 수 있도록, <br /> 원하는 목표를 이루는 그 순간까지 <B>항상 함께</B>하겠습니다.
            </P>
          </FourthSectionContentWrapper>
        </FourthSectionRight>
      </Section>
      <Section
        ref={section_5}
        className={curIndex === 4 ? "target" : "non-target"}
      >
        <LastSectionContentWrapper>
          <h1>오늘 먹은 음식의 칼로리를 확인하러 가볼까요?</h1>
          <h4>🍕🍔🍟🌭🍿🥨🥗🍗</h4>
          <StyledButton onClick={handleClickGoFoodLink}>
            확인하러 가기
          </StyledButton>
        </LastSectionContentWrapper>
      </Section>
    </StyledContainer>
  );
};

export default StartPage;
