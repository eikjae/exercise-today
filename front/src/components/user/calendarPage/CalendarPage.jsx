import React, { useEffect, useState } from "react";
import Calendar from "../../calendar/Calendar";
import {
  CalendarLayout,
  CalendarBodyLayout,
  TitleWrapper,
  BodyWrapper,
  TodayChecked,
  TodayWeight,
} from "./CalendarPage.style";
import ExerciseSection from "./exerciseSection/ExerciseSection";
import MealSection from "./mealSection/MealSection";
import TotalSection from "./totalSection/TotalSection";

const CalendarPage = (props) => {
  const fakeData = [
    {
      title: "🥣아침  +500",
      start: "2022-04-01T07:50:00",
    },
    {
      title: "☕점심  +800",
      start: "2022-04-01T12:30:00",
      backgroundColor: "pink",
    },
    {
      title: "🍻저녁  +1200",
      start: "2022-04-01T18:30:00",
      backgroundColor: "orange",
    },
    {
      title: "🤸‍♀️🤸‍♂️운동  -500",
      start: "2022-04-01T20:30:00",
      backgroundColor: "red",
    },
    {
      title: "🥣아침  +500",
      start: "2022-04-03T07:50:00",
    },
    {
      title: "☕점심  +800",
      start: "2022-04-03T12:30:00",
      backgroundColor: "pink",
    },
    {
      title: "🍻저녁  +1200",
      start: "2022-04-03T18:30:00",
      backgroundColor: "orange",
    },
    {
      title: "🤸‍♀️🤸‍♂️운동  -500",
      start: "2022-04-03T20:30:00",
      backgroundColor: "red",
    },
    {
      title: "🥣아침  +500",
      start: "2022-04-07T07:50:00",
    },
    {
      title: "☕점심  +800",
      start: "2022-04-07T12:30:00",
      backgroundColor: "pink",
    },
    {
      title: "🍻저녁  +1200",
      start: "2022-04-07T18:30:00",
      backgroundColor: "orange",
    },
    {
      title: "🤸‍♀️🤸‍♂️운동  -500",
      start: "2022-04-07T20:30:00",
      backgroundColor: "red",
    },
    {
      title: "🥣아침  +500",
      start: "2022-04-11T07:50:00",
    },
    {
      title: "☕점심  +800",
      start: "2022-04-11T12:30:00",
      backgroundColor: "pink",
    },
    {
      title: "🍻저녁  +1200",
      start: "2022-04-11T18:30:00",
      backgroundColor: "orange",
    },
    {
      title: "🤸‍♀️🤸‍♂️운동  -500",
      start: "2022-04-11T20:30:00",
      backgroundColor: "red",
    },
    {
      title: "🥣아침  +500",
      start: "2022-04-29T07:50:00",
    },
    {
      title: "☕점심  +800",
      start: "2022-04-29T12:30:00",
      backgroundColor: "pink",
    },
    {
      title: "🍻저녁  +1200",
      start: "2022-04-29T18:30:00",
      backgroundColor: "orange",
    },
    {
      title: "🤸‍♀️🤸‍♂️운동  -500",
      start: "2022-04-29T20:30:00",
      backgroundColor: "red",
    },
  ];

  const [date, setDate] = useState("");
  const [breakfast, setBreakfast] = useState(0);
  const [lunch, setLunch] = useState(0);
  const [dinner, setDinner] = useState(0);
  const [exerciseCalories, setExerciseCalories] = useState(0);
  const [mealOptions, setMealOptions] = useState([]);

  const [data, setData] = useState([]);

  const handleSetDate = (date) => {
    setDate(date);
  };

  const getTodayDate = () => {
    const newDate = new Date();
    const day = newDate.toString().split(" ")[0];
    const today = newDate.toISOString().split("T")[0].split("-");
    const month = today[1].replace("0", "");
    handleSetDate(`${month}월 ${today[2]}일 ${day}`);
  };

  useEffect(() => {
    // api 통신 캘린더전체 데이터 받아오기
    const res = [...fakeData];
    setData(res);

    // 음식 메뉴 전체 리스트 받아오기

    getTodayDate();
  }, []);

  return (
    <CalendarLayout>
      <Calendar data={data} handleSetDate={handleSetDate} />
      <CalendarBodyLayout>
        <TitleWrapper>
          <h2>{date}</h2>
        </TitleWrapper>
        <BodyWrapper>
          <TodayChecked>
            <TodayWeight>
              <h4>오늘의 몸무게 :</h4>
              <h4>80kg</h4>
            </TodayWeight>
          </TodayChecked>
          <MealSection title={"아침"} mealOptions={breakfast} />
          <MealSection title={"점심"} mealOptions={breakfast} />
          <MealSection title={"저녁"} mealOptions={breakfast} />
          <ExerciseSection />
        </BodyWrapper>
        <TotalSection />
      </CalendarBodyLayout>
    </CalendarLayout>
  );
};

export default CalendarPage;
