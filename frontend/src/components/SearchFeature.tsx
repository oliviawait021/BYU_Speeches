import React, { useEffect, useState } from "react";

type SearchPageProps = {
  query: string;
};

type Speech = {
  id: number;
  title: string;
  speaker: string;
  topic: string;
  date: string; // adjust as needed
};

const SearchPage = ({ query }: SearchPageProps) => {
  const [results, setResults] = useState<Speech[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://localhost:5001/Speech/search?query=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        setResults(data);
      } catch (error) {
        console.error("Search failed:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    if (query.trim() !== "") {
      fetchResults();
    }
  }, [query]);

  return (
    <div className="text-white p-4">
      <h2>Search Results for: "{query}"</h2>
      {loading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <ul>
          {results.map((speech) => (
            <li key={speech.id}>
              <strong>{speech.title}</strong> by {speech.speaker} —{" "}
              {speech.topic}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
