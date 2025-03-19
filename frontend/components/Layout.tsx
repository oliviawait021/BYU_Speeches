import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <main>{children}</main>
      <Navbar />
    </div>
  );
};

export default Layout;
