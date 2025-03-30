import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../src/components/Card";
import Header from "../src/components/Header";
import Navbar from "../src/components/Navbar";

export default function ProfilePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
        backgroundColor: "#111827",
        color: "white",
        paddingBottom: "6rem", // leave space for navbar
      }}
    >
      <Header />
      <Navbar setCurrentView={() => {}} onSearch={() => {}} />

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "1rem",
        }}
      >
        {/* Wrap the card in a text-center container */}
        <div className="text-center">
          <Card title="User Profile">
            <div className="mt-3 pb-3">
              <div
                className="card p-4 rounded shadow-lg w-100 text-center"
                style={{ backgroundColor: "#111827" }}
              >
                <div className="mb-3">
                  <p className="fw-bold" style={{ color: "#5dade2" }}>
                    First Name:
                  </p>
                  <p className="text-white">John</p>
                </div>
                <div className="mb-3">
                  <p className="fw-bold" style={{ color: "#5dade2" }}>
                    Last Name:
                  </p>
                  <p className="text-white">Doe</p>
                </div>
                <div className="mb-3">
                  <p className="fw-bold" style={{ color: "#5dade2" }}>
                    Username:
                  </p>
                  <p className="text-white">johndoe123</p>
                </div>
                <div className="mb-3">
                  <p className="fw-bold" style={{ color: "#5dade2" }}>
                    Email Address:
                  </p>
                  <p className="text-white">johndoe@email.com</p>
                </div>
                <div className="mb-3">
                  <p className="fw-bold" style={{ color: "#5dade2" }}>
                    Password:
                  </p>
                  <p className="text-white">password123</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
