import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Topics.css";

function Topics() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [speeches, setSpeeches] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all speeches when the component mounts
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("http://localhost:5276/Speech") // Fetches all speeches
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched speeches:", data);
        setSpeeches(data);
      })
      .catch((error) => {
        console.error("Error fetching speeches:", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []); // Runs only once when the component mounts

  // Handles topic click
  const handleClick = (topic: string) => {
    setSelectedTopic(topic); // Updates selected topic
  };

  // Filter speeches based on selected topic
  const filteredSpeeches = selectedTopic
    ? speeches.filter(
        (s) => s.topic?.toLowerCase() === selectedTopic.toLowerCase()
      )
    : [];

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateString));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Topics</h1>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
        {[
          { src: "/src/img/jesus.webp", alt: "Jesus Christ", label: "Jesus" },
          {
            src: "/src/img/church_logo.png",
            alt: "Core Beliefs",
            label: "Beliefs",
          },
          { src: "/src/img/faith.jpg", alt: "Faith", label: "Faith" },
          {
            src: "/src/img/Repentance.png",
            alt: "Repentance",
            label: "Repentance",
          },
          { src: "/src/img/baptism.png", alt: "Baptism", label: "Baptism" },
          {
            src: "/src/img/washington_dc_temple.webp",
            alt: "Temple",
            label: "Temple",
          },
          { src: "/src/img/prayer.png", alt: "Prayer", label: "Prayer" },
          { src: "/src/img/service.jpeg", alt: "Service", label: "Service" },
        ].map((topic, index) => (
          <div className="col" key={index}>
            <div
              className="card text-center shadow-sm clickable"
              onClick={() => handleClick(topic.label)}
            >
              <img
                src={topic.src}
                className="card-img-top"
                alt={topic.alt}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="card-text fw-bold">{topic.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedTopic && (
        <div className="mt-5">
          <h2>Speeches on "{selectedTopic}"</h2>
          {loading && <p>Loading speeches...</p>}
          {error && <p className="text-danger">{error}</p>}

          {filteredSpeeches.length === 0 && !loading && !error ? (
            <p>No speeches found.</p>
          ) : (
            <ul className="list-group mt-3">
              {filteredSpeeches.map((s) => (
                <li key={s.speechId} className="list-group-item">
                  <strong>{s.speechTitle}</strong> by {s.speaker} on{" "}
                  {formatDate(s.dateSpeechGiven)}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <br /> <br /> <br />
    </div>
  );
}

export default Topics;
