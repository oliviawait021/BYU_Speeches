import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import BYUSpeech from "./pages/speech";
import Topics from "./pages/Topics";
import "bootstrap/dist/css/bootstrap.min.css";
import { Speech } from "./types/Speeches";
import Navbar from "./components/Navbar";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [speeches, setSpeeches] = useState<Speech[]>([]);
  const [currentView, setCurrentView] = useState("home");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView("search");
  };

  // ✅ Correct placement of useEffect
  useEffect(() => {
    const fetchSpeeches = async () => {
      try {
        const response = await fetch("http://localhost:5276/Speech");
        if (!response.ok) throw new Error("Failed to fetch speeches");
        const data = await response.json();
        setSpeeches(data);
      } catch (error) {}
    };

    fetchSpeeches();
  }, []);

  // ✅ This is where the closing brace goes
  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/calendar"
          element={<CalendarPage speeches={speeches} />}
        />
        <Route path="/speech" element={<BYUSpeech />} />
        <Route path="/topic" element={<Topics />} />
        <Route path="/search" element={<div>search!</div>} />
        <Route path="/profile" element={<div>profile!</div>} />
        <Route path="/login" element={<div>login!</div>} />
      </Routes>
    </Router>
  );
}
