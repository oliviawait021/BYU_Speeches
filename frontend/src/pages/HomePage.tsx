import { Search, Menu } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/Card";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";


export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
        <div className="flex justify-center items-center h-screen w-full text-white" style={{ backgroundColor: "#111827" }}>
        <div className="container min-vh-100 d-flex flex-column justify-content-center text-white" style={{ backgroundColor: "#111827" }}>
          <Header />
          <div className="row">
            {/* Announcements */}
            <div className="col-sm-3">
            <Card 
              title="Upcoming Speech" onTitleClick={() => navigate("/calendar")} 
              image="https://speeches.byu.edu/wp-content/uploads/2024/12/Horwitz_Ilana_M_Web_2025.webp"
              imgSize={{ width: "300px", height: "320px" }}>
              <p style={{ color: "#5dade2", fontWeight: "bold", fontSize: "1rem" }}>Ilana M. Horwitz</p>
              <p style={{ fontSize: "0.75rem" }}><em>Assistant Professor of Jewish Studies and Sociology at Tulane University</em></p>              <p className="text font-grey">March 25, 2025</p>
              </Card>
            </div>

            {/* Quote of the Day */}
            <div className="col-sm-3">
              <Card title="Quote of the Day" onTitleClick={() => navigate("/speech")}>
              <p style={{ color: "#5dade2", fontWeight: "" }}><em>Heartbreak means you’re a step closer to finding true love. Struggles in school mean you’re 
                                                              learning new skills. Being low on funds means you’re learning how to budget and will be thankful 
                                                              and humble when more compensation arrives. God will provide. And good times are ahead.</em></p>
              <p style={{ color: "#5dade2", fontWeight: "bold" }}>Kalani Sitake, head football coach at BYU</p>
              <p style={{ color: "#5dade2", fontWeight: "bold" }}>March 11, 2025</p>
              </Card>
            </div>

            {/* Browse Topics Carousel */}
            <Card title="Browse Topics" onTitleClick={() => navigate("/topics")}>            <div id="topicsCarousel" className="carousel slide" data-bs-ride="carousel">
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
          <Card title="Saved Content" onTitleClick={() => navigate("/profile")}>
          <div className="container text-left mt-4 pb-5">
            <div className="d-flex justify-content-center">
              <div className="card text-white p-3 rounded shadow-lg" style={{ width: "90%", backgroundColor: "#111827"}}>
                <div className="row text-center">
                  <div className="col-sm-2">
                    <div className="d-flex flex-column align-items-center">
                      <i className="bi bi-file-text text-info fs-1"></i>
                      <p style={{ color: "#5dade2", fontWeight: "bold" }}>Saved Speeches</p>                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="d-flex flex-column align-items-center">
                      <i className="bi bi-tag text-info fs-1"></i>
                      <p style={{ color: "#5dade2", fontWeight: "bold" }}>Notes</p>                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="d-flex flex-column align-items-center">
                      <i className="bi bi-bookmark text-info fs-1"></i>
                      <p style={{ color: "#5dade2", fontWeight: "bold" }}>Favorites</p>                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Card>
        </div>
      </div>
      </>
  );
}

