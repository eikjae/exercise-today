import React, { useEffect, useRef, useState } from "react";
import { get, post } from "../../../api";
import Calendar from "../../calendar/Calendar";
import {
  CalendarLayout,
  CalendarBodyLayout,
  TitleWrapper,
  BodyWrapper,
  TodayChecked,
  TodayWeight,
  StyledTextField,
  WeightTitle,
} from "./CalendarPage.style";
import EatFoodList from "./eatFoodList/EatFoodList";
import ExerciseSection from "./exerciseSection/ExerciseSection";
import MealSection from "./mealSection/MealSection";
import ExerciseList from "./selectExerciseList/ExerciseList";
import TotalSection from "./totalSection/TotalSection";
import dayjs from "dayjs";

const CalendarPage = (props) => {
  const newDate = new Date();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const [date, setDate] = useState("");
  const [strDate, setStrDate] = useState("");
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

  const weightRef = useRef();

  const handleSetDate = (month, today, day) => {
    day = dayOfWeek[day];
    setDate(`${month}월 ${today}일 ${day}`);
  };

  const getTodayDate = () => {
    setStrDate(dayjs(newDate).format("YYYY-MM-DD"));
    const month = dayjs(newDate).format("M");
    const today = dayjs(newDate).date();
    const day = dayOfWeek[dayjs(newDate).day()];
    setDate(`${month}월 ${today}일 ${day}`);
  };

  const handleSetTotalExerciseCalrorie = (cal) => {
    setTotalExerciseCalrorie((current) => {
      return current + Number(Number(cal).toFixed(0));
    });
  };

  const setChangeListWhenClick = (data) => {
    const newBreakfastList = data.diet.filter((d) => d.type === "breakfast");
    const newLunchList = data.diet.filter((d) => d.type === "lunch");
    const newDinnerList = data.diet.filter((d) => d.type === "dinner");

    setBreakfastList([...newBreakfastList]);
    setLunchList([...newLunchList]);
    setDinnerList([...newDinnerList]);
    setExerciseList([...data.workout]);
  };

  const setCalorieWhenClick = (data) => {
    console.log(data);
    if (data.length === 0) {
      setBreakfastCalrorie(0);
      setLunchCalrorie(0);
      setDinnerCalrorie(0);
      setTotalExerciseCalrorie(0);
      return;
    }
    setBreakfastCalrorie(Number(data.calories[0].title.split("+")[1]));
    setLunchCalrorie(Number(data.calories[1].title.split("+")[1]));
    setDinnerCalrorie(Number(data.calories[2].title.split("+")[1]));
    setTotalExerciseCalrorie(Number(data.calories[3].title.split("-")[1]));
  };

  const setImageUrlWhenClick = (data) => {
    if (data.dietimage.length === 0) {
      setBreakfastUrl(null);
      setLunchUrl(null);
      setDinnerUrl(null);
    } else {
      if (data.dietimage[0]) {
        setBreakfastUrl(data.dietimage[0].imgurl);
      } else {
        setBreakfastUrl(null);
      }
      if (data.dietimage[1]) {
        setLunchUrl(data.dietimage[1].imgurl);
      } else {
        setLunchUrl(null);
      }
      if (data.dietimage[2]) {
        setDinnerUrl(data.dietimage[2].imgurl);
      } else {
        setDinnerUrl(null);
      }
    }
  };

  const handleOnClickCalendar = async (clickDate) => {
    try {
      const res = await get(`calendar/items/${clickDate}`);
      setImageUrlWhenClick(res.data);
      setChangeListWhenClick(res.data);
      const res2 = await get(`calendar/calories/${clickDate}`);
      setCalorieWhenClick(res2.data);
    } catch (e) {
      throw new Error(e);
    }
  };

  const postDateData = async () => {
    try {
      await post("calendar/items", {
        whenDate: strDate,
        itemArray: {
          diet: [...breakfastList, ...lunchList, ...dinnerList],
          workout: [...exerciseList],
        },
      });
      await post("calendar/calories", {
        whenDate: strDate,
        calorieArray: [
          breakfastCalrorie,
          lunchCalrorie,
          dinnerCalrorie,
          totalExerciseCalrorie,
        ],
      });
      const res = await get(
        `calendar/calorieslist/${dayjs(strDate).format("YYYY-MM")}`
      );
      setCalendarData(res.data);
      console.log(res.data);
    } catch (e) {
      throw new Error(e);
    }
  };

  const getImage = async () => {
    const res = await get(
      `calendar/items/${dayjs(newDate).format("YYYY-MM-DD")}`
    );

    setImageUrlWhenClick(res.data);
  };

  // 오늘자 날짜 저장하기
  useEffect(() => {
    getTodayDate();
  }, []);

  // 이미지 받아오기
  useEffect(() => {
    try {
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
          `calendar/calorieslist/${dayjs(newDate).format("YYYY-MM")}`
        );
        setCalendarData(res.data);
      };

      getMonthData();
    } catch (e) {
      throw new Error(e);
    }
  }, []);
  //오늘자 리스트 정보
  useEffect(() => {
    try {
      const getCalendarItems = async () => {
        const res = await get(
          `calendar/items/${dayjs(newDate).format("YYYY-MM-DD")}`
        );
        setChangeListWhenClick(res.data);
        const res2 = await get(
          `calendar/calories/${dayjs(newDate).format("YYYY-MM-DD")}`
        );
        setCalorieWhenClick(res2.data);
      };

      getCalendarItems();
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
        handleOnClickCalendar={handleOnClickCalendar}
      />
      <CalendarBodyLayout>
        <TitleWrapper>
          <h2>{date}</h2>
        </TitleWrapper>
        <BodyWrapper>
          <TodayChecked>
            <TodayWeight>
              <WeightTitle>오늘의 몸무게 :</WeightTitle>
              <StyledTextField
                type="number"
                size="small"
                inputRef={weightRef}
                onChange={() => {
                  console.log(weightRef.current.value);
                }}
              />
              <WeightTitle>kg</WeightTitle>
            </TodayWeight>
          </TodayChecked>
          <MealSection
            title={"아침"}
            type={"breakfast"}
            strDate={strDate}
            imgUrl={breakfastUrl}
            setUrl={setBreakfastUrl}
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
            setUrl={setLunchUrl}
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
            setUrl={setDinnerUrl}
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
            weight={weightRef.current?.value}
            setExerciseList={setExerciseList}
            totalExerciseCalrorie={totalExerciseCalrorie}
            handleSetTotalExerciseCalrorie={handleSetTotalExerciseCalrorie}
          />
          <ExerciseList
            title={"운동 리스트"}
            weight={weightRef.current?.value}
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
