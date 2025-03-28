import React, { useState, useRef, useEffect } from "react";
import {
  Home,
  Search,
  Grid,
  Calendar,
  User,
  BookAIcon,
  BookCopyIcon,
  BookDashed,
  BookIcon,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

type NavbarProps = {
  onSearch: (query: string) => void;
};

const Navbar = ({ onSearch }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLFormElement>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm);
      navigate("/search");
      setSearchTerm("");
      setShowInput(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setShowInput(false);
      }
    };

    if (showInput) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInput]);

  return (
    <>
      {showInput && (
        <form
          ref={inputRef}
          onSubmit={handleSearchSubmit}
          style={{
            position: "fixed",
            top: 10,
            left: 0,
            right: 0,
            width: "100%",
            padding: "0 1rem",
            display: "flex",
            justifyContent: "center",
            zIndex: 1001,
          }}
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search talks, speakers, topics..."
            autoFocus
            style={{
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              width: "100%",
              maxWidth: "500px",
              boxSizing: "border-box",
            }}
          />
        </form>
      )}

      <nav
        className="container"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#10124f",
          padding: "10px 0",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          boxShadow: "0px -2px 5px rgba(0,0,0,0.2)",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <div onClick={() => navigate("/")}>
          <Home color="white" size={28} />
        </div>
        <div onClick={() => setShowInput(true)}>
          <Search color="white" size={28} />
        </div>
        <div onClick={() => navigate("/speech")}>
          <Grid color="white" size={28} />
        </div>
        <div onClick={() => navigate("/calendar")}>
          <Calendar color="white" size={28} />
        </div>
        <div onClick={() => navigate("/topic")}>
          <BookIcon color="white" size={28} />
        </div>
        <div onClick={() => navigate("/login")}>
          <User color="white" size={28} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
