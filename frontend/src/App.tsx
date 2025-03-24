import React, { useState } from "react";
import Header from "./Header";
import CalendarPage from "./CalendarPage";
import HomePage from "./HomePage";
import SearchPage from "../components/SearchPage";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const renderView = () => {
    switch (currentView) {
      case "calendar":
        return <CalendarPage />;
      case "search":
        return <SearchPage query={searchQuery} />;
      case "home":
      default:
        return <HomePage />;
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView("search");
  };

  return (
    <Layout setCurrentView={setCurrentView} onSearch={handleSearch}>
      <div className="flex justify-center items-center h-screen w-full bg-gray-1000 text-white">
        <div className="container min-vh-100 d-flex flex-column justify-content-center text-white bg-dark">
          <Header />
          {renderView()}
        </div>
      </div>
    </Layout>
  );
}
