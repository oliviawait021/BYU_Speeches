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
          <h1 className="h4 fw-bold pt-4 justify-content-center">BYU Speeches</h1>
        </div>
      </div>
    </>
  );
}

function Card({
  title,
  image,
  imgSize = { width: "300px", height: "400px" }, // Default size
  children,
}: {
  title?: string;
  image?: string;
  imgSize?: { width: string; height: string };
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <div className="card bg-dark text-white mb-4 rounded">
        {image && (
          <img
            src={image}
            alt="Card"
            className="card-img-top mx-auto d-block rounded"
            style={{ width: imgSize.width, height: imgSize.height, objectFit: "cover" }}
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
          <Search className="w-5 h-5 text-secondary mb-4" />

          <div className="row">
            {/* Announcements */}
            <div className="col-sm-3">
            <Card 
              title="Upcoming Speeches" 
              image="/src/img/pres_nelson.webp"
              imgSize={{ width: "300px", height: "400px" }}>
              <p className="text-info fw-bold">President Russell M. Nelson</p>
              <p className="text font-grey">March 18, 2025</p>
              </Card>
            </div>

            {/* Quote of the Day */}
            <div className="col-sm-3">
              <Card title="Quote of the Day">
                <p className="fst-italic text-info">
                  “Education is the power to think clearly...”
                </p>
                <p className="text-info fw-bold">- David O. McKay</p>
              </Card>
            </div>

            {/* Browse Topics Carousel */}
            <Card title="Browse more Topics">
            <div id="topicsCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner pt-5">
                <div className="carousel-item active ">
                  <Card title="Jesus Christ" image="/src/img/jesus.webp" imgSize={{ width: "200px", height: "220px" }} />
                </div>
                <div className="carousel-item">
                  <Card title="Faith" image="/src/img/faith.jpg" imgSize={{ width: "200px", height: "220px" }}/>
                </div>
                <div className="carousel-item">
                  <Card title="Service" image="/src/img/service.jpeg" imgSize={{ width: "200px", height: "220px" }}/>
                </div>
                <div className="carousel-item">
                  <Card title="Temples and Families" image="/src/img/washington_dc_temple.webp" imgSize={{ width: "200px", height: "220px" }}/>
                </div>
              </div>
              <a className="carousel-control-prev position-absolute top-50 translate-middle-y" href="#topicsCarousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a className="carousel-control-next position-absolute top-50 translate-middle-y" href="#topicsCarousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>
            </Card>
          </div>

          {/* Study Tools Section */}
          <div className="container text-left mt-4 pb-5">
            <h2 className="fw text">Study Tools</h2>
            <div className="d-flex justify-content-center">
              <div className="card bg-dark text-white p-3 rounded shadow-lg" style={{ width: "90%" }}>
                <div className="row text-center">
                  <div className="col-sm-2">
                    <div className="d-flex flex-column align-items-center">
                      <i className="bi bi-file-text text-info fs-1"></i>
                      <p className="mt-2 text-info fw-bold">Notes</p>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="d-flex flex-column align-items-center">
                      <i className="bi bi-tag text-info fs-1"></i>
                      <p className="mt-2 text-info fw-bold">Favories</p>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="d-flex flex-column align-items-center">
                      <i className="bi bi-bookmark text-info fs-1"></i>
                      <p className="mt-2 text-info fw-bold">Saved Speeches</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </Layout>
  );
}
