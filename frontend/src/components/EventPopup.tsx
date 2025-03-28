import React from "react";
import { X } from "lucide-react";
import { Speech } from "../types/Speeches";

interface EventPopupProps {
  date: Date;
  events: Speech[];
  onClose: () => void;
}

const EventPopup: React.FC<EventPopupProps> = ({ date, events, onClose }) => {
  const formatDate = (date: Date): string => date.toISOString().split("T")[0];

  const selectedDateString = formatDate(date);

  const dayEvents = events.filter(
    (event) => event.scheduleDate?.split("T")[0] === selectedDateString
  );

  return (
    <div className="popup-overlay">
      <div className="popup-slide-up">
        <button className="close-button" onClick={onClose}>
          <X size={20} />
        </button>

        <h3 className="popup-title">Speeches for {date.toDateString()}</h3>

        {dayEvents.length > 0 ? (
          dayEvents.map((event, idx) => (
            <div key={idx} className="popup-event">
              <p className="popup-speaker">
                <strong>{event.speaker}</strong>
              </p>
              <p className="popup-title">{event.speechTitle}</p>
              <p className="popup-topic">Topic: {event.topic}</p>
            </div>
          ))
        ) : (
          <p className="popup-no-events">No speeches scheduled for this day.</p>
        )}
      </div>
    </div>
  );
};

export default EventPopup;
