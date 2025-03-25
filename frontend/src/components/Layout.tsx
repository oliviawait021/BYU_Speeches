import React from "react";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
  setCurrentView: (view: string) => void;
  onSearch: (query: string) => void;
};

const Layout = ({ children, setCurrentView, onSearch }: LayoutProps) => {
  return (
    <div style={{ paddingBottom: "60px" }}>
      {children}
      <Navbar setCurrentView={setCurrentView} onSearch={onSearch} />
    </div>
  );
};

export default Layout;
