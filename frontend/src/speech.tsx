import React from "react";
import "./speech.css";
import { FaStickyNote, FaVolumeUp } from "react-icons/fa";

const BYUSpeech: React.FC = () => {
  return (
    <div className="speech-container">
      {/* Page Title (Left-aligned and smaller) */}
      <h1 className="page-title">BYU Speech</h1>
      <br />

      {/* Speech Title and Speaker (Centered) */}
      <div className="speech-header">
        <h2 className="speech-title">Peacemakers Needed</h2>
        <h3 className="speaker-name">President Russell M. Nelson</h3>
      </div>

      {/* Highlighted Text (Under Speech Title) */}
      <p className="highlighted-text">
        "You have your agency to choose contention or reconciliation. I urge you
        to choose to be a peacemaker, now and always."
      </p>

      {/* Video (Centered) and Icons (Lined Vertically) */}
      <div className="video-section">
        <iframe
          className="speech-video"
          src="https://www.youtube.com/embed/vQghSMOOYz4"
          title="BYU Speech Video"
          allowFullScreen
        ></iframe>

        <div className="icons">
          <button className="icon-button" aria-label="Replay Audio">
            <FaVolumeUp size={24} />
          </button>
          <button className="icon-button" aria-label="Open Notes">
            <FaStickyNote size={24} />
          </button>
        </div>
      </div>

      {/* Full Speech Script */}
      <div className="speech-script">
        <h4 className="script-title">Full Script:</h4>
        <p>
          My dear brothers and sisters, it is a joy to be with you. During these
          past six months, you have been constantly on my mind and in my
          prayers. I pray that the Holy Ghost will communicate what the Lord
          wants you to hear as I speak to you now. During my surgical internship
          many years ago, I assisted a surgeon who was amputating a leg filled
          with highly infectious gangrene. The operation was difficult. Then, to
          add to the tension, one of the team performed a task poorly, and the
          surgeon erupted in anger. In the middle of his tantrum, he threw his
          scalpel loaded with germs. It landed in my forearm! Everyone in the
          operating room—except the out-of-control surgeon—was horrified by this
          dangerous breach of surgical practice. Gratefully, I did not become
          infected. But this experience left a lasting impression on me. In that
          very hour, I promised myself that whatever happened in my operating
          room, I would never lose control of my emotions. I also vowed that day
          never to throw anything in anger—whether it be scalpels or words. Even
          now, decades later, I find myself wondering if the contaminated
          scalpel that landed in my arm was any more toxic than the venomous
          contention that infects our civic dialogue and too many personal
          relationships today. Civility and decency seem to have disappeared
          during this era of polarization and passionate disagreements.
          Vulgarity, faultfinding, and evil speaking of others are all too
          common. Too many pundits, politicians, entertainers, and other
          influencers throw insults constantly. I am greatly concerned that so
          many people seem to believe that it is completely acceptable to
          condemn, malign, and vilify anyone who does not agree with them. Many
          seem eager to damage another’s reputation with pathetic and pithy
          barbs! Anger never persuades. Hostility builds no one. Contention
          never leads to inspired solutions. Regrettably, we sometimes see
          contentious behavior even within our own ranks. We hear of those who
          belittle their spouses and children, of those who use angry outbursts
          to control others, and of those who punish family members with the
          “silent treatment.” We hear of youth and children who bully and of
          employees who defame their colleagues...
        </p>
      </div>
    </div>
  );
};

export default BYUSpeech;
