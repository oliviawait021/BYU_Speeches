import { useState } from "react";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BYUSpeech from "./pages/speech";
import Topics from "./pages/Topics";
import ProfilePage from "./ProfilePage";

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView("search");
  };

  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/calendar"} element={<CalendarPage />} />
        <Route path={"/speech"} element={<BYUSpeech />} />
        <Route path={"/topic"} element={<Topics />} />
        <Route path={"/search"} element={<div>search!</div>} />
        <Route path={"/profile"} element={<ProfilePage />} />
        <Route path={"/login"} element={<div>login!</div>} />
      </Routes>
    </Router>
  );
}
