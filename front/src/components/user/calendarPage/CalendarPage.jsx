import React, { useCallback, useEffect, useState } from "react";
import { get, post } from "../../../api";
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
  const newDate = new Date();
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

  // 이미지 url
  const [breakfastUrl, setBreakfastUrl] = useState(null);
  const [lunchUrl, setLunchUrl] = useState(null);
  const [dinnerUrl, setDinnerUrl] = useState(null);

  // 캘린더 데이터
  const [calendarData, setCalendarData] = useState([]);

  const handleSetDate = (date) => {
    setDate(date);
  };

  const getTodayDate = () => {
    const day = newDate.toString().split(" ")[0];
    setStrDate(newDate.toISOString().split("T")[0]);
    const today = newDate.toISOString().split("T")[0].split("-");
    const month = today[1].replace("0", "");
    handleSetDate(`${month}월 ${today[2]}일 ${day}`);
  };

  const handleSetTotalExerciseCalrorie = (cal) => {
    setTotalExerciseCalrorie((current) => {
      return current + Number(Number(cal).toFixed(0));
    });
  };

  const postDateData = async () => {
    await post("calendar/items", {
      whenDate: strDate,
      itemArray: {
        diet: [...breakfastList, ...lunchList, ...dinnerList],
        workout: [...exerciseList],
      },
    });
    const res = await get(
      `calendar/calorieslist/${newDate.toISOString().split("T")[0]}`
    );
    setCalendarData(res.data);
  };

  // 오늘자 날짜 저장하기
  useEffect(() => {
    getTodayDate();
  }, []);

  // 이미지 받아오기
  useEffect(() => {
    try {
      const getImage = async () => {
        const res = await get(
          `calendar/items/${newDate.toISOString().split("T")[0]}`
        );
        setBreakfastUrl(res.data.dietimage[0].imgurl);
        setLunchUrl(res.data.dietimage[1].imgurl);
        setDinnerUrl(res.data.dietimage[2].imgurl);
      };
      getImage();
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  // 한달 치 달력 정보
  useEffect(() => {
    try {
      const getMonthData = async () => {
        const res = await get(
          `calendar/calorieslist/${newDate.toISOString().split("T")[0]}`
        );
        console.log(res);
        setCalendarData(res.data);
      };
      getMonthData();
    } catch (e) {
      throw new Error(e);
    }
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
            type={"breakfast"}
            strDate={strDate}
            imgUrl={breakfastUrl}
            setFoodList={setBreakfastList}
            setMealCalrorie={setBreakfastCalrorie}
          />
          <EatFoodList
            title={"아침 리스트"}
            type={"breakfast"}
            foodList={breakfastList}
            totalCalrorie={breakfastCalrorie}
            setMealCalrorie={setBreakfastCalrorie}
            setFoodList={setBreakfastList}
          />
          <MealSection
            title={"점심"}
            type={"lunch"}
            strDate={strDate}
            imgUrl={lunchUrl}
            setFoodList={setLunchList}
            setMealCalrorie={setLunchCalrorie}
          />
          <EatFoodList
            title={"점심 리스트"}
            type={"lunch"}
            foodList={lunchList}
            totalCalrorie={lunchCalrorie}
            setMealCalrorie={setLunchCalrorie}
            setFoodList={setLunchList}
          />
          <MealSection
            title={"저녁"}
            type={"dinner"}
            strDate={strDate}
            imgUrl={dinnerUrl}
            setFoodList={setDinnerList}
            setMealCalrorie={setDinnerCalrorie}
          />
          <EatFoodList
            title={"저녁 리스트"}
            type={"dinner"}
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
          <button onClick={postDateData}>등록</button>
        </BodyWrapper>
      </CalendarBodyLayout>
    </CalendarLayout>
  );
};

export default CalendarPage;
