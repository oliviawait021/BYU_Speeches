import React, { useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../css/calendar.css";
import { Speech } from "../types/Speeches";

interface CalendarProps {
  year: number;
  events: Speech[];
  onDateClick: (date: Date) => void;
}

const MultiMonthCalendar: React.FC<CalendarProps> = ({
  year,
  events,
  onDateClick,
}) => {
  const monthsToShow = Array.from(
    { length: 12 },
    (_, idx) => new Date(year, idx)
  );
  const today = new Date();
  const monthRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const monthIndex = today.getFullYear() === year ? today.getMonth() : 0;
    const scrollToMonth = monthRefs.current[monthIndex];
    if (scrollToMonth) {
      scrollToMonth.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [year, today]);

  return (
    <div className="scroll-container">
      {monthsToShow.map((monthDate, idx) => (
        <div
          key={idx}
          ref={(el: HTMLDivElement | null) => {
            monthRefs.current[idx] = el;
          }}
          className="month-container"
        >
          <h3 className="month-label">
            {monthDate.toLocaleString("default", { month: "long" })}
          </h3>

          <Calendar
            activeStartDate={monthDate}
            defaultView="month"
            showNavigation={false}
            onClickDay={onDateClick}
            tileClassName={({ date, view }) => {
              if (view === "month") {
                const isTuesday = date.getDay() === 2;
                const isFirst = date.getDate() === 1;

                if (isTuesday && !isFirst) {
                  return "highlight-tuesday";
                }
              }
              return null;
            }}
            tileContent={({ date, view }) => {
              if (view !== "month") return null;

              const hasEvent = events.some((event) => {
                const eventDate = new Date(event.scheduleDate);
                return (
                  eventDate.getFullYear() === date.getFullYear() &&
                  eventDate.getMonth() === date.getMonth() &&
                  eventDate.getDate() === date.getDate()
                );
              });

              return hasEvent ? <div className="event-indicator"></div> : null;
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default MultiMonthCalendar;
