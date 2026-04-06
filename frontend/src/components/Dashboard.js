import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>🚍 Smart Bus System Dashboard</h2>
      <p>Welcome! Choose an option below:</p>

      <div style={styles.cardContainer}>
        
        {/* Bus Pass */}
        <div style={styles.card} onClick={() => navigate("/buspass")}>
          <h3>🎫 Bus Pass</h3>
          <p>View your digital bus pass</p>
        </div>

        {/* Attendance */}
        <div style={styles.card} onClick={() => navigate("/attendance")}>
          <h3>📊 Attendance</h3>
          <p>Check attendance records</p>
        </div>

        {/* Logout */}
        <div style={styles.card} onClick={() => navigate("/")}>
          <h3>🚪 Logout</h3>
          <p>Go back to login page</p>
        </div>

      </div>
    </div>
  );
}

// Styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  card: {
    width: "220px",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    cursor: "pointer",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
    transition: "0.3s",
  },
};

export default Dashboard;
