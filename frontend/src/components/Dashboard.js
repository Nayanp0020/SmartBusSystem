import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>Welcome to Smart Bus System 🚍</h2>

      <div style={styles.cardContainer}>
        
        <div style={styles.card} onClick={() => navigate("/buspass")}>
          <h3>🎫 Bus Pass</h3>
          <p>View your digital bus pass</p>
        </div>

        <div style={styles.card} onClick={() => navigate("/attendance")}>
          <h3>📊 Attendance</h3>
          <p>Check your attendance records</p>
        </div>

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
    marginTop: "50px"
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap"
  },
  card: {
    width: "200px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
    transition: "0.3s"
  }
};

export default Dashboard;
