import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";
import { StyledCalendarLayout, StyledCalenderWrapper } from "./Calendar.style";

const Calendar = ({ data, handleSetDate }) => {
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
        events={data}
        // eventClick={(info) => {
        //   console.log("click event!");
        //   const spittedTitle = info.event.title.split(" +");
        //   console.log(spittedTitle[0]);
        //   if (spittedTitle[0].includes("아침")) {
        //     setBreakfast(spittedTitle[1]);
        //   } else if (spittedTitle[0].includes("점심")) {
        //     setLunch(spittedTitle[1]);
        //   } else {
        //     setDinner(spittedTitle[1]);
        //   }
        // }}
        dateClick={(info) => {
          console.log("data click event!");
          // console.log("info.allDay: ", info.allDay);
          // console.log("info.dateStr: ", info.dateStr);
          const day = info.date.toString().split(" ")[0];
          const today = info.dateStr.split("-");
          const month = today[1].replace("0", "");

          handleSetDate(`${month}월 ${today[2]}일 ${day}`);

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
