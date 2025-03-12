import React, { useState } from "react";
import CalendarView from "../components/Calendar"; // <-- adjust path if needed
import EventPopup from "../components/EventPopup"; // <-- adjust path if needed

const CalendarPage: React.FC = () => {
  // State to track what day is selected
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Example events - you could later load these from an API
  const events = [
    { date: 3, speaker: "President Nelson" },
    { date: 10, speaker: "Gary E. Stevenson" },
    { date: 17, speaker: "Ronald A. Rasband" },
    { date: 24, speaker: "Dale G. Renlund" },
    { date: 31, speaker: "Dallin H. Oaks" },
  ];

  // When a user clicks a date on the calendar
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

// Optional styles for layout
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
