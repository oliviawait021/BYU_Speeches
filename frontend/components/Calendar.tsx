import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface MultiMonthCalendarProps {
  onDateClick: (date: Date) => void;
}

const MultiMonthCalendar: React.FC<MultiMonthCalendarProps> = ({
  onDateClick,
}) => {
  const [year, setYear] = useState(new Date().getFullYear());
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

  const handlePrevYear = () => setYear((prev) => prev - 1);
  const handleNextYear = () => setYear((prev) => prev + 1);

  return (
    <div>
      {/* Year Toggle */}
      <div style={styles.yearToggle}>
        <button onClick={handlePrevYear} style={styles.yearButton}>
          ◀
        </button>
        <h2 style={styles.yearLabel}>{year}</h2>
        <button onClick={handleNextYear} style={styles.yearButton}>
          ▶
        </button>
      </div>

      {/* Scrollable Month Container */}
      <div style={styles.scrollContainer}>
        {monthsToShow.map((monthDate, idx) => (
          <div
            key={idx}
            ref={(el) => {
              if (el) monthRefs.current[idx] = el;
            }}
            style={styles.monthContainer}
          >
            <h3 style={styles.monthLabel}>
              {monthDate.toLocaleString("default", { month: "long" })}
            </h3>

            <Calendar
              value={monthDate}
              defaultView="month"
              showNavigation={false}
              tileDisabled={() => false}
              onClickDay={(date) => onDateClick(date)} // ✅ This now uses the prop!
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  scrollContainer: {
    display: "flex" as const,
    flexDirection: "column" as const,
    overflowY: "auto" as const,
    maxHeight: "70vh",
    gap: "20px",
    padding: "0 10px",
  },
  monthContainer: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    padding: "10px",
    background: "#fff",
  },
  monthLabel: {
    textAlign: "center" as const,
    fontWeight: "bold" as const,
    marginBottom: "10px",
  },
  yearToggle: {
    display: "flex" as const,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    gap: "20px",
    margin: "20px 0",
  },
  yearButton: {
    fontSize: "1.5rem",
    cursor: "pointer" as const,
    background: "#1A1A50",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
  },
  yearLabel: {
    fontSize: "1.5rem",
    fontWeight: "bold" as const,
  },
};

export default MultiMonthCalendar;
