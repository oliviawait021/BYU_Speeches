import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

export default function ProfilePage() {
  return (
    <div
      className="flex justify-center items-center min-h-screen w-full text-white p-4"
      style={{ backgroundColor: "#111827" }}
    >
      <div
        className="container d-flex flex-column align-items-center text-white p-4 rounded"
        style={{ maxWidth: "600px", width: "90%", backgroundColor: "#111827" }}
      >
        <Card title="User Profile">
          <div className="container text-left mt-3 pb-3">
            <div className="d-flex flex-column align-items-center">
              <div
                className="card p-4 rounded shadow-lg w-100"
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
                  <p className="text-white">********</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
