import React from "react";
import { FaBell, FaBellSlash } from "react-icons/fa";

interface EventPopupProps {
  date: Date;
  events: { date: Date; speaker: string }[]; // ✅ Using Date here
  onClose: () => void;
}

const EventPopup: React.FC<EventPopupProps> = ({ date, events, onClose }) => {
  const dayEvents = events.filter((event) => {
    return (
      event.date.getFullYear() === date.getFullYear() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getDate() === date.getDate()
    );
  });

  return (
    <div style={styles.popup}>
      <h3>Events for {date.toDateString()}</h3>

      {dayEvents.length > 0 ? (
        dayEvents.map((event, idx) => (
          <div key={idx} style={styles.event}>
            <span>{event.speaker}</span>
            <FaBell style={styles.icon} />
          </div>
        ))
      ) : (
        <p>No events for this day.</p>
      )}

      <button onClick={onClose}>Close</button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  popup: {
    position: "fixed",
    bottom: "60px",
    right: "10px",
    backgroundColor: "#eee",
    padding: "20px",
    borderRadius: "10px",
    width: "80%",
    maxWidth: "300px",
    zIndex: 1000,
  },
  event: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
  },
  icon: {
    cursor: "pointer",
  },
};

export default EventPopup;
