import React from "react";
import { Home, Search, Grid, Calendar, User } from "lucide-react";

const Navbar = () => {
  return (
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
      }}
    >
      <Home color="white" size={28} />
      <Search color="white" size={28} />
      <Grid color="white" size={28} />
      <Calendar color="white" size={28} />
      <User color="white" size={28} />
    </nav>
  );
};

export default Navbar;
