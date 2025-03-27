import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BYUSpeech from "./pages/speech";
import Topics from "./pages/Topics";
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalendarPage";
import Navbar from "./components/Navbar";
import SearchPage from "./components/SearchFeature";
import LoginPage from "./components/LoginPage";

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView("search");
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/calendar"} element={<CalendarPage />} />
        <Route path={"/speech"} element={<BYUSpeech />} />
        <Route path={"/topic"} element={<Topics />} />
        <Route path={"/search"} element={<div>search!</div>} />
        <Route path={"/login"} element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
