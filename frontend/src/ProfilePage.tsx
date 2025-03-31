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
      <Navbar onSearch={() => {}} />

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "2rem 1rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#1f2937",
            border: "2px solid #5dade2",
            borderRadius: "12px",
            padding: "2rem",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h2 className="fw-bold mb-4" style={{ color: "#ffffff" }}>
            User Profile
          </h2>

          <div className="mb-4">
            <p className="fw-bold" style={{ color: "#5dade2" }}>
              First Name:
            </p>
            <p className="text-white">John</p>
          </div>
          <div className="mb-4">
            <p className="fw-bold" style={{ color: "#5dade2" }}>
              Last Name:
            </p>
            <p className="text-white">Doe</p>
          </div>
          <div className="mb-4">
            <p className="fw-bold" style={{ color: "#5dade2" }}>
              Username:
            </p>
            <p className="text-white">johndoe123</p>
          </div>
          <div className="mb-4">
            <p className="fw-bold" style={{ color: "#5dade2" }}>
              Email Address:
            </p>
            <p className="text-white">johndoe@email.com</p>
          </div>
          <div>
            <p className="fw-bold" style={{ color: "#5dade2" }}>
              Password:
            </p>
            <p className="text-white">password123</p>
          </div>
        </div>
      </div>
    </div>
  );
}