import React from "react";
import { X } from "lucide-react";
import { Speech } from "../types/Speeches";

interface EventPopupProps {
  date: Date;
  events: Speech[];
  onClose: () => void;
}

const EventPopup: React.FC<EventPopupProps> = ({ date, events, onClose }) => {
  const dayEvents = events.filter((event) => {
    const eventDate = new Date(event.ScheduleDate);
    return (
      eventDate.getFullYear() === date.getFullYear() &&
      eventDate.getMonth() === date.getMonth() &&
      eventDate.getDate() === date.getDate()
    );
  });

  return (
    <div className="popup-overlay">
      <div className="popup-slide-up">
        <button className="close-button" onClick={onClose}>
          <X size={20} />
        </button>

        <h3 className="popup-title">Events for {date.toDateString()}</h3>

        {dayEvents.map((event, idx) => (
          <div key={idx} className="popup-event">
            <p className="popup-speaker">{event.Speaker}</p>
            <p className="popup-title">{event.SpeechTitle}</p>
            <p className="popup-time">{event.DurationOfSpeech} mins</p>
            <p className="popup-topic">{event.Topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPopup;
