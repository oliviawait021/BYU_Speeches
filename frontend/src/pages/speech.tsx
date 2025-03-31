import React, { useEffect, useState } from "react";
import "../css/speech.css";
import { FaStickyNote, FaVolumeUp } from "react-icons/fa";

interface SpeechInfo {
  speechId: number;
  speaker: string;
  speechTitle: string;
}

interface SpeechContent {
  speechId: number;
  speechText: string;
  speechHighlightText: string;
  audioUrl: string;
  videoUrl: string;
}

const BYUSpeech: React.FC = () => {
  const [speechInfo, setSpeechInfo] = useState<SpeechInfo | null>(null);
  const [speechContent, setSpeechContent] = useState<SpeechContent | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpeech = async () => {
      try {
        const response = await fetch("http://localhost:5276/Speech/default"); // Fetch SpeechId = 1
        if (!response.ok) {
          throw new Error("Speech not found");
        }
        const data = await response.json();
        setSpeechInfo(data.speechInfo);
        setSpeechContent(data.speechContent);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSpeech();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!speechInfo || !speechContent) return <p>No speech found</p>;

  return (
    <div className="speech-container">
      {/* Page Title (Left-aligned and smaller) */}
      <h1 className="page-title">BYU Speech</h1>
      <br />

      {/* Speech Title and Speaker (Centered) */}
      <div className="speech-header">
        <h2 className="speech-title">{speechInfo.speechTitle}</h2>
        <h3 className="speaker-name">{speechInfo.speaker}</h3>
      </div>

      {/* Highlighted Text (Under Speech Title) */}
      <p className="highlighted-text">{speechContent.speechHighlightText}</p>

      {/* Video (Centered) and Icons (Lined Vertically) */}
      <div className="video-section">
        <iframe
          className="speech-video"
          src="https://www.youtube.com/embed/rHKe9EqB5vE"
          // {speechContent.videoUrl}
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
        <p>{speechContent.speechText}</p>
      </div>
    </div>
  );
};

export default BYUSpeech;
