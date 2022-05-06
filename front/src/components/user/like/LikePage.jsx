/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Api from "../../../api";
import {
  LikedFriendTab,
  LikedFoodTab,
  LikedExerciseTab,
  LikedMusicTab,
} from "./tabSection/AllLikedTab";
import {
  Layout,
  LeftRowGrid,
  ColGrid,
  RightRowGrid,
  LikeTabs,
  UserName,
} from "./LikePage.style";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import { AppBar, Tab, Box } from "@mui/material";
import { UserStateContext } from "../../../App";
import User from "../userSection/User";
import { useRecoilValue } from "recoil";
import { isInfoChangedState } from "../userSection/UserAtom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function LikePage() {
  const theme = useTheme();
  const navigate = useNavigate();
  // like 페이지에 해당하는 사용자 id
  const { userId } = useParams();
  const tabElements = ["Friend", "Food", "Exercise", "Music"];
  const [value, setValue] = useState(0);
  const [likedFriends, setLikedFriends] = useState([]);
  const [likedFoods, setLikedFoods] = useState([]);
  const [likedExercises, setLikedExercises] = useState([]);
  const [likedMusics, setLikedMusics] = useState([]);
  const userState = useContext(UserStateContext);
  const [pageUserName, setPageUserName] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const isInfoChanged = useRecoilValue(isInfoChangedState);

  useEffect(async () => {
    try {
      // 전역 상태의 user가 null이라면 로그인이 안 된 상태이므로, 로그인 페이지로 돌림.
      if (!userState.user) {
        navigate("/login", { replace: true });
        return;
      }
      // Like 페이지의 유저id와 현재 로그인된 유저id가 같다면 편집 가능
      if (userId === userState.user?.id) {
        setIsEditable(true);
      } else {
        setIsEditable(false);
      }

      // 현재 Like 페이지의 이름을 설정
      let res = await Api.get(`users/${userId}`);
      setPageUserName(res.data.name);

      // 회원
      res = await Api.get(`like/person/info/${userId}`);
      setLikedFriends([...res.data]);
      // 음식
      // const name = userState.user.id;
      res = await Api.get(`like/food/info/${userId}`);
      setLikedFoods([...res.data]);
      // 운동
      res = await Api.get(`like/exercise/info/${userId}`);
      setLikedExercises([...res.data]);
      // 음악
      res = await Api.get(`like/music/info/${userId}`);
      setLikedMusics([...res.data]);
    } catch (err) {
      console.log(err);
    }
  }, [userId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Layout>
      <LeftRowGrid>
        <User
          myPageOwnerId={userId}
          isEditable={userId === userState.user?.id}
        />
      </LeftRowGrid>
      <RightRowGrid>
        <UserName>{pageUserName} 님의 북마크 목록</UserName>
        <AppBar position="static">
          <LikeTabs value={value} onChange={handleChange}>
            {tabElements.map((element, idx) => (
              <Tab key={idx} label={element} {...a11yProps(idx)} />
            ))}
          </LikeTabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <LikedFriendTab
              likedFriends={likedFriends}
              isEditable={isEditable}
            />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <LikedFoodTab likedFoods={likedFoods} isEditable={isEditable} />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <LikedExerciseTab
              likedExercises={likedExercises}
              isEditable={isEditable}
            />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <LikedMusicTab likedMusics={likedMusics} isEditable={isEditable} />
          </TabPanel>
        </SwipeableViews>
      </RightRowGrid>
    </Layout>
  );
}
