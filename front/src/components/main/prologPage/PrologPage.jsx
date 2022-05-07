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
    "행복과 건강",
    "당뇨와 운동",
    "체중별 심장병",
    "데이터",
    "칼로리 확인",
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
              <B>행복</B>과 <B>건강</B>
            </LeftTitle>
            <h3>건강 수명이 높은 사람들은 행복해질 확률이 높습니다</h3>
            <h3>우리가 높은 건강 수명을 갖기 위해서 무엇을 할 수 있을까요?</h3>
            {/* <h4>V1 : 꾸준한 운동을 통해 건강 수명을 늘릴 수 있습니다</h4> */}
            <h4>그 중 한가지가 꾸준한 운동입니다.</h4>
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
            <h1>당뇨와 운동과의 상관관계</h1>
            <h3>
              당뇨가 걸린 사람과, 걸리지 않은 사람들. <br /> 운동과 무슨 관계가
              있을까요?
            </h3>
            <h4>
              당뇨병 환자들을 살펴보면, 운동을 많이 하지 않는 것을 확인할 수
              있습니다.
            </h4>
            <h4>
              그에 비해 정상인들을 살펴보면, 운동을 많이 하고 있는 것을 확인할
              수 있습니다.
            </h4>
          </SecondSectionRight>
        </Section>
        <Section ref={section_3}>
          <ThirdSectionLeft>
            <h1>체중별 심장병의 비율</h1>
            <h3>비만인 사람들... 심장병으로부터 안전할까요?</h3>
            <p>
              비만인 사람들이 심장병에 걸릴 확률은 정상 체중인 사람들 보다 2배
              이상 높은 것을 확인할 수 있습니다.
            </p>
          </ThirdSectionLeft>
          <ThirdSectionRight>
            <HeartStrokeGraph />
          </ThirdSectionRight>
        </Section>
        <Section2 ref={section_4}>
          <FourthSectionLeft>
            <h1>
              오늘도 운동은 방대한 자료를 기반으로 추천 서비스를 제공하고
              있습니다!
            </h1>
          </FourthSectionLeft>
          <GraphWrapper>
            <div>
              <h3>운동 데이터</h3>
              <h6>소모 칼로리 운동 개수</h6>
              <CalorieExerciseGraph />
            </div>
            <div>
              <h3>부위별 운동 데이터</h3>
              <Test />
            </div>
            <div>
              <h3>음악 데이터</h3>
              <MusicByYearGraph />
            </div>
          </GraphWrapper>
        </Section2>
        <Section ref={section_5}>
          <LastSectionWrapper>
            <h1>오늘 먹은 음식의 칼로리를 확인하러 가볼까요?</h1>
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
