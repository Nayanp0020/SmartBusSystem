import React from "react";
import { useNavigate } from "react-router-dom";

function BusPass() {
  const navigate = useNavigate();

  // Dummy data (can connect backend later)
  const pass = {
    name: "Rahul Sharma",
    studentId: "101",
    busNo: "12",
    source: "Station A",
    destination: "College",
    validity: "01-Apr-2026 to 01-May-2026",
    status: "Active",
  };

  return (
    <div style={styles.container}>
      <h2>🎫 Digital Bus Pass</h2>

      <div style={styles.card}>
        <h3>Smart Bus System</h3>
        <hr />

        <p><b>Name:</b> {pass.name}</p>
        <p><b>Student ID:</b> {pass.studentId}</p>
        <p><b>Bus No:</b> {pass.busNo}</p>
        <p><b>Route:</b> {pass.source} → {pass.destination}</p>
        <p><b>Validity:</b> {pass.validity}</p>

        <hr />

        <p style={{
          color: pass.status === "Active" ? "green" : "red",
          fontWeight: "bold"
        }}>
          ✔ {pass.status}
        </p>
      </div>

      <br />

      <button onClick={() => navigate("/dashboard")} style={styles.button}>
        ⬅ Back to Dashboard
      </button>
    </div>
  );
}

// Styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  card: {
    width: "320px",
    margin: "auto",
    padding: "20px",
    border: "2px solid #333",
    borderRadius: "12px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
    backgroundColor: "#fff",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default BusPass;
