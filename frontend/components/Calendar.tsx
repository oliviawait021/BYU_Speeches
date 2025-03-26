import React, { useEffect, useRef } from "react";
import Calendar from "react-calendar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-calendar/dist/Calendar.css";
import "../src/css/calendar.css";

interface MultiMonthCalendarProps {
  onDateClick: (date: Date) => void;
  year: number;
  events: { date: Date; speaker: string; time: string }[];
}

const MultiMonthCalendar: React.FC<MultiMonthCalendarProps> = ({
  onDateClick,
  year,
  events,
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
    <>
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
              tileDisabled={() => false}
              onClickDay={(date) => onDateClick(date)}
              tileClassName={({ date }) => {
                const isTuesday = date.getDay() === 2;
                const isFirst = date.getDate() === 1;
                const isCurrentYear = date.getFullYear() === year;
                return isTuesday && !isFirst && isCurrentYear
                  ? "tuesday-highlight"
                  : null;
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MultiMonthCalendar;
