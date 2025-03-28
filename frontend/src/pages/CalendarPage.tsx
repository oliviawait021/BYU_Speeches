import React, { useState } from "react";
import Calendar from "../components/Calendar";
import EventPopup from "../components/EventPopup";
import Header from "../components/Header";
import { Speech } from "../types/Speeches";

interface CalendarPageProps {
  speeches: Speech[];
}

const CalendarPage: React.FC<CalendarPageProps> = ({ speeches }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [year, setYear] = useState(new Date().getFullYear());

  const events = speeches.filter(
    (s) => new Date(s.scheduleDate).getFullYear() === year
  );

  const handleDateClick = (date: Date) => {
    if (date.getDay() === 2) {
      setSelectedDate(date);
    } else {
      alert("Please select a Tuesday!");
      setSelectedDate(null);
    }
  };

  const handlePrevYear = () => setYear((prev) => prev - 1);
  const handleNextYear = () => setYear((prev) => prev + 1);

  return (
    <div
      style={{ backgroundColor: "#111827", minHeight: "100vh", color: "white" }}
    >
      <Header />
      <div className="page-container">
        <div className="year-toggle">
          <button onClick={handlePrevYear} className="year-button">
            ◀
          </button>
          <h2 className="year-label">{year}</h2>
          <button onClick={handleNextYear} className="year-button">
            ▶
          </button>
        </div>

        <div className="calendar-wrapper">
          <Calendar onDateClick={handleDateClick} year={year} events={events} />
        </div>

        {selectedDate && (
          <EventPopup
            date={selectedDate}
            events={speeches}
            onClose={() => setSelectedDate(null)}
          />
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
