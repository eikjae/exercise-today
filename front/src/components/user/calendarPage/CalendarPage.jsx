import React, { useCallback, useEffect, useState } from "react";
import { post } from "../../../api";
import Calendar from "../../calendar/Calendar";
import {
  CalendarLayout,
  CalendarBodyLayout,
  TitleWrapper,
  BodyWrapper,
  TodayChecked,
  TodayWeight,
} from "./CalendarPage.style";
import EatFoodList from "./eatFoodList/EatFoodList";
import ExerciseSection from "./exerciseSection/ExerciseSection";
import MealSection from "./mealSection/MealSection";
import ExerciseList from "./selectExerciseList/ExerciseList";
import TotalSection from "./totalSection/TotalSection";

const CalendarPage = (props) => {
  const [date, setDate] = useState("");
  const [strDate, setStrDate] = useState("");
  const [weight, setWeight] = useState(80);
  const [totalExerciseCalrorie, setTotalExerciseCalrorie] = useState(0);

  const [breakfastCalrorie, setBreakfastCalrorie] = useState(0);
  const [lunchCalrorie, setLunchCalrorie] = useState(0);
  const [dinnerCalrorie, setDinnerCalrorie] = useState(0);

  const [breakfastList, setBreakfastList] = useState([]);
  const [lunchList, setLunchList] = useState([]);
  const [dinnerList, setDinnerList] = useState([]);
  const [exerciseList, setExerciseList] = useState([]);

  // 캘린더 데이터
  const [calendarData, setCalendarData] = useState([]);

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

  const handleSetTotalExerciseCalrorie = (cal) => {
    setTotalExerciseCalrorie((current) => {
      return current + Number(Number(cal).toFixed(0));
    });
  };

  useEffect(() => {
    // api 통신 캘린더전체 데이터 받아오기
    // const res = [...fakeData];
    // setCalendarData(res);

    getTodayDate();
  }, []);

  return (
    <CalendarLayout>
      <Calendar
        data={calendarData}
        handleSetDate={handleSetDate}
        setStrDate={setStrDate}
      />
      <CalendarBodyLayout>
        <TitleWrapper>
          <h2>{date}</h2>
        </TitleWrapper>
        <BodyWrapper>
          <TodayChecked>
            <TodayWeight>
              <h4>오늘의 몸무게 :</h4>
              <h4>{weight}kg</h4>
            </TodayWeight>
          </TodayChecked>
          <MealSection
            title={"아침"}
            strDate={strDate}
            setFoodList={setBreakfastList}
            setMealCalrorie={setBreakfastCalrorie}
          />
          <EatFoodList
            title={"아침 리스트"}
            foodList={breakfastList}
            totalCalrorie={breakfastCalrorie}
            setMealCalrorie={setBreakfastCalrorie}
            setFoodList={setBreakfastList}
          />
          <MealSection
            title={"점심"}
            strDate={strDate}
            setFoodList={setLunchList}
            setMealCalrorie={setLunchCalrorie}
          />
          <EatFoodList
            title={"점심 리스트"}
            foodList={lunchList}
            totalCalrorie={lunchCalrorie}
            setMealCalrorie={setLunchCalrorie}
            setFoodList={setLunchList}
          />
          <MealSection
            title={"저녁"}
            strDate={strDate}
            setFoodList={setDinnerList}
            setMealCalrorie={setDinnerCalrorie}
          />
          <EatFoodList
            title={"저녁 리스트"}
            foodList={dinnerList}
            totalCalrorie={dinnerCalrorie}
            setMealCalrorie={setDinnerCalrorie}
            setFoodList={setDinnerList}
          />
          <ExerciseSection
            weight={weight}
            setExerciseList={setExerciseList}
            totalExerciseCalrorie={totalExerciseCalrorie}
            handleSetTotalExerciseCalrorie={handleSetTotalExerciseCalrorie}
          />
          <ExerciseList
            title={"운동 리스트"}
            weight={weight}
            exerciseList={exerciseList}
            setExerciseList={setExerciseList}
            setTotalExerciseCalrorie={setTotalExerciseCalrorie}
            totalExerciseCalrorie={totalExerciseCalrorie}
          />
          <TotalSection
            totalCalrorie={breakfastCalrorie + lunchCalrorie + dinnerCalrorie}
            totalExerciseCalrorie={totalExerciseCalrorie}
          />
          <button
            onClick={async () => {
              // await post("diet", {              });
            }}
          >
            등록
          </button>
        </BodyWrapper>
      </CalendarBodyLayout>
    </CalendarLayout>
  );
};

export default CalendarPage;
