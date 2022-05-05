import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  CalorieExerciseGraph,
  DiabetesGraph,
  HeartStrokeGraph,
  MusicByYearGraph,
  Test,
} from "./graph/all_graph";

import HealthAndHappinessGraph from "./graph/HealthAndHappinessGraph.png";
import ScrollList from "./scrollList/ScrollList";
import {
  ListWrapper,
  NarrowSection,
  PageWrapper,
  Section,
  Section2,
  SectionWrapper,
  WideSection,
} from "./StatPage.style";

export default function StartPage() {
  const [section, setSection] = useState([]);
  let [curIndex, setCurIndex] = useState(0);
  const section_1 = useRef();
  const section_2 = useRef();
  const section_3 = useRef();
  const section_4 = useRef();

  const handleOnClick = (num) => {
    window.scrollTo({
      top: section[num]?.current?.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setSection([section_1, section_2, section_3, section_4]);
  }, []);

  return (
    <PageWrapper>
      <ListWrapper>
        <ScrollList handleOnClick={handleOnClick} />
      </ListWrapper>
      <SectionWrapper>
        <Section className="section 1" ref={section_1}>
          <WideSection>
            <h1>행복과 건강</h1>
            <h3>건강 수명이 높은 사람들은 행복해질 확률이 높습니다</h3>
            <p>우리가 높은 건강 수명을 갖기 위해서 무엇을 할 수 있을까요?</p>
            <p>
              V1 : 꾸준한 운동을 통해 건강 수명을 늘릴 수 있는것이 그 방법 중
              하나입니다.
            </p>
            <p>V1 : 그 중 한가지가 꾸준한 운동입니다.</p>
          </WideSection>
          <NarrowSection>
            <img src={HealthAndHappinessGraph} alt={"행복과 건강"} />
          </NarrowSection>
        </Section>
        <Section className="section 2" ref={section_2}>
          <NarrowSection>
            <DiabetesGraph />
          </NarrowSection>
          <WideSection>
            <h1>당뇨와 운동과의 상관관계</h1>
            <h3>
              당뇨가 걸린 사람과, 걸리지 않은 사람들. 운동과 무슨 관계가
              있을까요?
            </h3>
            <p>
              당뇨에 걸린 집단을 살펴보면, 운동을 많이 하지 않는 것을 확인할 수
              있습니다.
            </p>
            <p>
              그에 비해 당뇨에 걸리지 않은 집단을 살펴보면, 운동을 많이 하고
              있는 것을 확인할 수 있습니다.
            </p>
          </WideSection>
        </Section>
        <Section className="section 3" ref={section_3}>
          <WideSection>
            <h1>체중별 심장병의 비율</h1>
            <h3>비만인 사람들... 심장병으로부터 안전할까요?</h3>
            <p>
              비만인 사람들이 심장병에 걸릴 확률은 정상 체중인 사람들 보다 2배
              이상 높은 것을 확인할 수 있습니다.
            </p>
          </WideSection>
          <NarrowSection>
            <HeartStrokeGraph />
          </NarrowSection>
        </Section>
        <Section2 className="section 4" ref={section_4}>
          <div>
            <h1>제목 짓는중~</h1>
            <h1>
              오늘도 운동은 방대한 자료를 기반으로 다음과 같은 서비스들을
              제공해요!
            </h1>
            <h1>
              오늘도 운동은 방대한 자료를 기반으로 추천 서비스를 제공하고
              있습니다!
            </h1>
          </div>
          <div style={{ display: "flex" }}>
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
          </div>
        </Section2>
      </SectionWrapper>
    </PageWrapper>
  );
}
