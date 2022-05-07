import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CalorieExerciseGraph,
  DiabetesGraph,
  HeartStrokeGraph,
  MusicByYearGraph,
  Test,
} from "./graph/all_graph";

import HealthAndHappinessGraph from "./graph/HealthAndHappinessGraph.png";
import ScrollList from "../../scrollList/ScrollList";
import {
  B,
  FirstSectionLeft,
  FirstSectionRight,
  FourthSectionLeft,
  GraphWrapper,
  GraphWrapperWithTitle,
  LastSectionWrapper,
  LeftTitle,
  PageWrapper,
  SecondSectionLeft,
  SecondSectionRight,
  Section,
  Section2,
  SectionWrapper,
  StyledButton,
  ThirdSectionLeft,
  ThirdSectionRight,
} from "./PrologPage.style";

export default function PrologPage() {
  const navigate = useNavigate();
  const [section, setSection] = useState([]);
  const section_1 = useRef();
  const section_2 = useRef();
  const section_3 = useRef();
  const section_4 = useRef();
  const section_5 = useRef();
  let [curIndex, setCurIndex] = useState(0);

  const scrollNames = [
    "건강 수명과 행복",
    "운동과 당뇨병",
    "비만과 심장병",
    "오늘도 운동 데이터",
    "오늘의 칼로리 확인",
  ];
  const handleOnClick = (num) => {
    window.scrollTo({
      top: section[num]?.current?.offsetTop,
      behavior: "smooth",
    });
  };

  const handleClickGoFoodLink = () => {
    navigate("/food");
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
    setSection([section_1, section_2, section_3, section_4, section_5]);
  }, []);

  return (
    <PageWrapper>
      <ScrollList
        handleOnClick={handleOnClick}
        scrollNames={scrollNames}
        curIndex={curIndex}
      />
      <SectionWrapper>
        <Section ref={section_1}>
          <FirstSectionLeft>
            <LeftTitle>
              <B>건강 수명</B>과 <B>행복</B>의 상관관계
            </LeftTitle>
            <h3>
              <B>2021 세계행복보고서</B>(UN 산하 자문기구 출처) 관련 자료입니다.
            </h3>
            <br />
            <h3>이 자료에는 <B>행복</B>과 관련된 여러 요인들이 등장합니다. </h3>
            <h3>그 중 하나가 바로 <B style={{fontSize: "2rem"}}>건강 수명</B>입니다.</h3>
            <h3>
              건강 수명이 <B>긴</B> 국가는 대부분 <B>행복한 국가</B>에 포함되며,
            </h3>
            <h3>
              건강 수명이 <B>짧은</B> 국가는 대부분 <B>행복지수가 낮은 국가</B>입니다.
            </h3>
            <h3>
              다시 말해, <B style={{fontSize: "2rem"}}>건강 수명</B>은 <B style={{fontSize: "2rem"}}>행복지수</B>를 높여주는 요인입니다.
            </h3>
          </FirstSectionLeft>
          <FirstSectionRight>
            <img src={HealthAndHappinessGraph} alt={"행복과 건강"} />
          </FirstSectionRight>
        </Section>
        <Section ref={section_2}>
          <SecondSectionLeft>
            <DiabetesGraph />
          </SecondSectionLeft>
          <SecondSectionRight>
            <h1>
              <B>운동</B>과 <B>당뇨병</B>의 상관관계
              <br />
              <br />
            </h1>
            <h3>
              <B>CDC(미국 질병통제예방센터)</B>의 자료입니다.<br />
              <br />
            </h3>
            <h4>
              이 자료에는 당뇨병 환자들에 대한 여러 정보가 담겨있습니다.
              <br /> 그 중 눈여겨 볼 요소는 바로 <B>'운동 유무'</B> 입니다.
            </h4>
            <h4>
              그래프는 <B>운동 유무</B>와 <B>당뇨병 유무</B>의 정보만을 가져온 것입니다.
              <br /> <B>운동을 하지 않는 사람들</B> 중 당뇨병 환자의 비율은 약 <B style={{fontSize: "2rem"}}>0.21%</B>이며,
            </h4>
            <h4>
              <B>운동을 하는 사람들</B> 중 당뇨병 환지의 비율은 <B style={{fontSize: "2rem"}}>0.12%</B>입니다.
            </h4>

          </SecondSectionRight>
        </Section>
        <Section ref={section_3}>
          <ThirdSectionLeft>
            <h1>
              <B>비만</B>과 <B>심장병</B>의 관계
            </h1>
            <br />
            <h3><B>맥킨지 앤드 컴퍼니</B>의 <B>EHR</B>(전자 건강 기록) 자료입니다.</h3>
            <br />
            <h4>
              이 자료에는 심장병 유무와 <B>비만도</B>에 대한 정보가 담겨 있습니다.
            </h4>
            <h4>
              그래프는 체중에 따른 심장병 발병률을 표현한 것입니다.
            </h4>
            <h4>
              비만 집단의 심장병 발병률은 <B style={{fontSize: "2rem"}}>0.071%</B>입니다.
            </h4>
            <h4>
              정상 집단의 심장병 발병률은 절반 정도인 <B style={{fontSize: "2rem"}}>0.031%</B>입니다.
            </h4>
            <h4>
              저체중 집단의 심장병 발병률은 <B>0.002%</B>라는 점 또한 흥미롭습니다.
            </h4>

            <br />
          </ThirdSectionLeft>
          <ThirdSectionRight>
            <HeartStrokeGraph />
          </ThirdSectionRight>
        </Section>
        <Section2 ref={section_4}>
          <FourthSectionLeft>
            <h1>
              <B style={{fontSize: "4rem"}}>오늘도 운동</B>은 방대한 자료를 기반으로
              <br /> 추천 서비스를 제공하고 있습니다!
              <br />
              <br />
            </h1>
          </FourthSectionLeft>
          <GraphWrapper>
            <GraphWrapperWithTitle>
              <h4>운동 데이터</h4>
              <h6>칼로리 소모별 운동 개수</h6>
              <CalorieExerciseGraph />
            </GraphWrapperWithTitle>
            <GraphWrapperWithTitle>
              <h4>부위별 운동 데이터</h4>
              <Test />
            </GraphWrapperWithTitle>
            <GraphWrapperWithTitle>
              <h3>음악 데이터</h3>
              <MusicByYearGraph />
            </GraphWrapperWithTitle>
          </GraphWrapper>
        </Section2>
        <Section ref={section_5}>
          <LastSectionWrapper>
            <h1>오늘 먹은 식단의 <B style={{fontSize: "3rem"}}>칼로리</B>를 확인하고 싶으신가요?</h1>
            <h4>🍕🍔🍟🌭🍿🥨🥗🍗</h4>
            <StyledButton onClick={handleClickGoFoodLink}>
              확인하러 가기
            </StyledButton>
          </LastSectionWrapper>
        </Section>
      </SectionWrapper>
    </PageWrapper>
  );
}
