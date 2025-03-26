// CalendarPage.tsx
import React, { useState, useEffect } from "react";
import Calendar from "../src/components/Calendar";
import EventPopup from "../src/components/EventPopup";
import Header from "../src/components/Header";

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [year, setYear] = useState(new Date().getFullYear());
  const [events, setEvents] = useState<
    { date: Date; speaker: string; time: string }[]
  >([]);

  const fetchEventsForYear = (year: number) => {
    const exampleEvents = [
      {
        date: new Date(year, 0, 3),
        speaker: "President Nelson",
        time: "10:00 AM",
      },
      {
        date: new Date(year, 1, 10),
        speaker: "Gary E. Stevenson",
        time: "11:00 AM",
      },
      {
        date: new Date(year, 2, 17),
        speaker: "Ronald A. Rasband",
        time: "12:00 PM",
      },
      {
        date: new Date(year, 3, 24),
        speaker: "Dale G. Renlund",
        time: "9:00 AM",
      },
      {
        date: new Date(year, 4, 31),
        speaker: "Dallin H. Oaks",
        time: "2:00 PM",
      },
    ];
    setEvents(exampleEvents);
  };

  useEffect(() => {
    fetchEventsForYear(year);
  }, [year]);

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
    <>
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
            events={events}
            onClose={() => setSelectedDate(null)}
          />
        )}
      </div>
    </>
  );
};

export default CalendarPage;
