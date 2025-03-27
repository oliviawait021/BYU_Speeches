import React, { useEffect, useRef } from "react";
import Calendar from "react-calendar";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    if (year === today.getFullYear()) {
      const monthIndex = today.getMonth();
      const todayMonthRef = monthRefs.current[monthIndex];
      if (todayMonthRef) {
        todayMonthRef.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      if (monthRefs.current[0]) {
        monthRefs.current[0].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [year]);

  return (
    <div className="scroll-container">
      {monthsToShow.map((monthDate, idx) => (
        <div
          key={idx}
          ref={(el) => {
            if (el) monthRefs.current[idx] = el;
          }}
          className="month-container"
        >
          <h3 className="month-label">
            {monthDate.toLocaleString("default", { month: "long" })}
          </h3>

          <Calendar
            value={monthDate}
            defaultView="month"
            showNavigation={false}
            onClickDay={(date) => onDateClick(date)}
            tileContent={({ date, view }) => {
              if (view === "month") {
                const hasEvent = events.some((event) => {
                  const eventDate = new Date(event.ScheduleDate);
                  return (
                    eventDate.getFullYear() === date.getFullYear() &&
                    eventDate.getMonth() === date.getMonth() &&
                    eventDate.getDate() === date.getDate()
                  );
                });
                return hasEvent ? (
                  <div className="event-indicator"></div>
                ) : null;
              }
              return null;
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default MultiMonthCalendar;
