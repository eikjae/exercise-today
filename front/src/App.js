import React, { useState, useEffect, useReducer, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as Api from "./api";
import { loginReducer } from "./reducer";

import Header from "./components/header/Header";
import LoginForm from "./components/user/login/LoginForm";
import Network from "./components/user/network/Network";
import RegisterForm from "./components/user/register/RegisterForm";

import FoodPage from "./components/main/foodPage/FoodPage";
import PrologPage from "./components/main/prologPage/PrologPage";
import MainChartPage from "./components/main/mainChartPage/MainChartPage";
import MusicPage from "./components/main/musicPage/MusicPage";
import PartExercisePage from "./components/main/partExercisePage/PartExercisePage";
import MyPage from "./components/user/myPage/MyPage";
import LikePage from "./components/user/like/LikePage";
import ErrorPage from "./components/main/errorSection/ErrorPage";
import OuathPage from "./components/oauthPage/OauthPage";

import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import CalendarPage from "./components/user/calendarPage/CalendarPage";
import StartPage from "./components/startPage/StartPage";

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

function App() {
  // useReducer 훅을 통해 userState 상태와 dispatch함수를 생성함.
  const [userState, dispatch] = useReducer(loginReducer, {
    user: null,
  });

  // 아래의 fetchCurrentUser 함수가 실행된 다음에 컴포넌트가 구현되도록 함.
  // 아래 코드를 보면 isFetchCompleted 가 true여야 컴포넌트가 구현됨.
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
      const res = await Api.get("user/current");
      const currentUser = res.data;

      // dispatch 함수를 통해 로그인 성공 상태로 만듦.
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: currentUser,
      });

      console.log("%c sessionStorage에 토큰 있음.", "color: #d93d1a;");
    } catch {
      console.log("%c SessionStorage에 토큰 없음.", "color: #d93d1a;");
    }
    // fetchCurrentUser 과정이 끝났으므로, isFetchCompleted 상태를 true로 바꿔줌
    setIsFetchCompleted(true);
  };

  // useEffect함수를 통해 fetchCurrentUser 함수를 실행함.
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (!isFetchCompleted) {
    return "loading...";
  }

  return (
    <RecoilRoot>
      <DispatchContext.Provider value={dispatch}>
        <UserStateContext.Provider value={userState}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" exact element={<StartPage />} />
              <Route path="/prolog" exact element={<PrologPage />} />
              <Route path="/food" exact element={<FoodPage />} />
              <Route
                path="/:calorie/:height/:weight"
                element={<MainChartPage />}
              />
              <Route path="/music" element={<MusicPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/exercise" element={<PartExercisePage />} />
              <Route path="/network" element={<Network />} />
              <Route path="/myPage" element={<MyPage />} />
              <Route path="/like/:userId" element={<LikePage />} />
              <Route path="/oauth/:coperation" element={<OuathPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            draggable={true}
          />
        </UserStateContext.Provider>
      </DispatchContext.Provider>
    </RecoilRoot>
  );
}

export default App;
