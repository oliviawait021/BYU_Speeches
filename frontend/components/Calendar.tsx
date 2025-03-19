import React, { useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // You can still import their base if you want

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
            tileContent={({ date, view }) => {
              if (view === "month") {
                const hasEvent = events.some(
                  (event) =>
                    event.date.getFullYear() === date.getFullYear() &&
                    event.date.getMonth() === date.getMonth() &&
                    event.date.getDate() === date.getDate()
                );
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
