import React from "react";
import { Search, Menu } from "lucide-react";
import CalendarPage from "./CalendarPage";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import HomePage from "./HomePage";
import BYUSpeech from "./speech";

export default function App() {
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen w-full bg-gray-1000 text-white">
        <div className="container min-vh-100 d-flex flex-column justify-content-center text-white bg-dark">
          <Header />
          <HomePage />
          <CalendarPage />
          <BYUSpeech />
        </div>
      </div>
    </Layout>
  );
}
