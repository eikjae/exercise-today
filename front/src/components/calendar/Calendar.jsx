import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";
import { StyledCalendarLayout, StyledCalenderWrapper } from "./Calendar.style";

const Calendar = ({ data, handleSetDate, setStrDate }) => {
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
          console.log("data click event!");
          // console.log("info.allDay: ", info.allDay);
          console.log("info.dateStr: ", info.dateStr);
          const day = info.date.toString().split(" ")[0];
          const today = info.dateStr.split("-");
          const month = today[1].replace("0", "");

          handleSetDate(`${month}월 ${today[2]}일 ${day}`);
          setStrDate(info.dateStr);

          console.log("info.dayEl: ", info.dayEl);
          console.log("info.dayEl: ", info.dayEl.textContent);
          console.log("info.dayEl: ", info.dayEl.textContent.split(" "));
          // console.log("info.jsEvent: ", info.jsEvent);
          // console.log("info.view: ", info.view);
        }}
        displayEventTime={false}
        height={1000}
        locale={"ko"}
      />
    </StyledCalenderWrapper>
  );
};

export default Calendar;
