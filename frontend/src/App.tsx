import React from "react";
import { Search, Menu } from "lucide-react";
import CalendarPage from "./CalendarPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
function Header() {
  return (
    <>
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h4 fw-bold">BYU</h1>
          <Menu className="w-6 h-6" />
        </div>
      </div>
    </>
  );
}

function Card({
  title,
  image,
  children,
}: {
  title?: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <div className="card bg-dark text-white mb-4">
        {image && (
          <img
            src={image}
            alt="Card"
            className="card-img-top"
            style={{ width: "200px", height: "300px", objectFit: "cover" }}
          />
        )}
        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}
          <div className="card-text">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Layout> 
      <div className="flex justify-center items-center h-screen w-full bg-gray-900 text-white">
        <div className="container min-vh-100 d-flex flex-column justify-content-center text-white bg-dark">
          <Header />
          <Search className="w-5 h-5 text-secondary mb-3" />

          <div className="row">
            {/* Announcements */}
            <div className="col-md-6">
              <Card title="Announcements" image="/src/img/pres_nelson.webp">
                <p className="text-primary text-sm">Upcoming Speeches</p>
                <p className="text-info fw-bold">President Nelson</p>
                <p className="text-secondary text-xs">March 11, 2024</p>
              </Card>
            </div>

            {/* Verse of the Day */}
            <div className="col-md-6">
              <Card title="Verse of the Day">
                <p className="fst-italic text-info">
                  “Education is the power to think clearly...”
                </p>
                <p className="text-info fw-bold">- David O. McKay</p>
              </Card>
            </div>

            {/* Browse Topics */}
            <div className="col-12">
              <Card title="Topics to Browse" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
