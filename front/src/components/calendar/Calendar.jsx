import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";
import { StyledCalenderWrapper } from "./Calendar.style";

import dayjs from "dayjs";

const Calendar = ({
  data,
  handleSetDate,
  setStrDate,
  handleOnClickCalendar,
}) => {
  return (
    <StyledCalenderWrapper>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "title",
          right: "today prev,next",
        }}
        editable={true}
        dayMaxEvents={true}
        selectable={true}
        // 캘린더 안의 일정 요소들 편집 불가
        eventStartEditable={false}
        events={data}
        dateClick={(info) => {
          const month = dayjs(info.date).format("M");
          const today = dayjs(info.date).date();
          const day = dayjs(info.date).day();

          handleSetDate(month, today, day);
          setStrDate(info.dateStr);
          handleOnClickCalendar(info.dateStr);
        }}
        displayEventTime={false}
        height={1000}
        locale={"ko"}
        eventBackgroundColor={"yellow"}
      />
    </StyledCalenderWrapper>
  );
};

export default Calendar;
