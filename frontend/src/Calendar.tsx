import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventPopup from "./EventPopup";

const CalendarView = ({
  onDateClick,
}: {
  onDateClick: (date: Date) => void;
}) => {
  return (
    <div style={styles.container}>
      <Calendar
        onClickDay={(date) => onDateClick(date)}
        showNavigation={false}
      />
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f5f5f5",
  },
};

export default CalendarView;
