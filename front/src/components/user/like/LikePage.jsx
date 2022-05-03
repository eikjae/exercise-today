import React, { useEffect } from "react";
import * as Api from "../../../api";
import {} from "./LikePage.style";
import {
  LikedFriendTab,
  LikedFoodTab,
  LikedExerciseTab,
  LikedMusicTab,
} from "./tabSection/AllLikedTab";
import { Layout } from "./LikePage.style";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";
import PersonPinIcon from "@mui/icons-material/PersonPin";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const tabElements = ["회원", "음식", "운동", "음악"];

  useEffect(() => {
    console.log("exerciseTab Test");
  }, []);

  return (
    <Layout>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {tabElements.map((element, idx) => (
            <Tab key={idx} label={element} {...a11yProps(idx)} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <LikedFriendTab />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <LikedFoodTab />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <LikedExerciseTab />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <LikedMusicTab />
        </TabPanel>
      </SwipeableViews>
    </Layout>
  );
}
