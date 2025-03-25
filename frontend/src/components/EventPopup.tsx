import React from "react";
import { X } from "lucide-react"; // for the red X icon

interface EventPopupProps {
  date: Date;
  events: { date: Date; speaker: string; time: string }[];
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
    <div className="popup-overlay">
      <div className="popup-slide-up">
        <button className="close-button" onClick={onClose}>
          <X size={20} />
        </button>

        <h3 className="popup-title">Events for {date.toDateString()}</h3>

        {dayEvents.length > 0 ? (
          dayEvents.map((event, idx) => (
            <div key={idx} className="popup-event">
              <p className="popup-speaker">{event.speaker}</p>
              <p className="popup-time">{event.time}</p>
            </div>
          ))
        ) : (
          <p className="popup-no-events">No events for this day.</p>
        )}
      </div>
    </div>
  );
};

export default EventPopup;
