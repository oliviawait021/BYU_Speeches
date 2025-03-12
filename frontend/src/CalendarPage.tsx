import React, { useState } from "react";
import CalendarView from "../components/Calendar";
import EventPopup from "../components/EventPopup";

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Example events - could later load these from an API
  const events = [
    { date: 3, speaker: "President Nelson" },
    { date: 10, speaker: "Gary E. Stevenson" },
    { date: 17, speaker: "Ronald A. Rasband" },
    { date: 24, speaker: "Dale G. Renlund" },
    { date: 31, speaker: "Dallin H. Oaks" },
  ];

  const handleDateClick = (date: Date) => {
    console.log("Clicked date:", date);

    // Show popup only if Tuesday (or remove this if you want all dates)
    if (date.getDay() === 2) {
      setSelectedDate(date);
    } else {
      alert("Please select a Tuesday!");
      setSelectedDate(null);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.title}>BYU Speeches Calendar</h2>

      <CalendarView onDateClick={handleDateClick} />

      {/* Conditionally show the popup if a date is selected */}
      {selectedDate && (
        <EventPopup
          date={selectedDate}
          events={events}
          onClose={() => setSelectedDate(null)}
        />
      )}
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100vh",
    backgroundColor: "#fafafa",
    padding: "20px",
  },
  title: {
    marginBottom: "20px",
  },
};

export default CalendarPage;
