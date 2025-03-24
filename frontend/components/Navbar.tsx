import React, { useState } from "react";
import { Home, Search, Grid, Calendar, User } from "lucide-react";

type NavbarProps = {
  setCurrentView: (view: string) => void;
  onSearch: (query: string) => void;
};

const Navbar = ({ setCurrentView, onSearch }: NavbarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm);
      setSearchTerm("");
      setShowInput(false);
    }
  };

  return (
    <>
      {showInput && (
        <form onSubmit={handleSearchSubmit} style={{ position: "fixed", top: 10, width: "100%", display: "flex", justifyContent: "center", zIndex: 999 }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search talks, speakers, topics..."
            style={{
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              width: "60%",
              maxWidth: "500px",
            }}
          />
        </form>
      )}

      <nav
        className="container"
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#10124f",
          padding: "10px 0",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          boxShadow: "0px -2px 5px rgba(0,0,0,0.2)",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          maxWidth: "960px",
          width: "100%",
          zIndex: 998,
        }}
      >
        <div onClick={() => setCurrentView("home")}><Home color="white" size={28} /></div>
        <div onClick={() => setShowInput(!showInput)}><Search color="white" size={28} /></div>
        <div onClick={() => setCurrentView("speech")}><Grid color="white" size={28} /></div>
        <div onClick={() => setCurrentView("calendar")}><Calendar color="white" size={28} /></div>
        <div onClick={() => setCurrentView("profile")}><User color="white" size={28} /></div>
      </nav>
    </>
  );
};

export default Navbar;
