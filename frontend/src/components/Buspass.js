import React from "react";

function BusPass() {
  // Dummy data (later you can fetch from backend)
  const passData = {
    name: "Rahul",
    studentId: "101",
    busNo: "12",
    route: "A → B",
    validity: "01-Apr-2026 to 01-May-2026"
  };

  return (
    <div style={styles.container}>
      <h2>🎫 Digital Bus Pass</h2>

      <div style={styles.card}>
        <h3>Smart Bus System</h3>
        <hr />

        <p><b>Name:</b> {passData.name}</p>
        <p><b>Student ID:</b> {passData.studentId}</p>
        <p><b>Bus No:</b> {passData.busNo}</p>
        <p><b>Route:</b> {passData.route}</p>
        <p><b>Validity:</b> {passData.validity}</p>

        <hr />

        <p style={{ color: "green" }}>✔ Active Pass</p>
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
  card: {
    width: "300px",
    margin: "auto",
    padding: "20px",
    border: "2px solid #333",
    borderRadius: "10px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)"
  }
};

export default BusPass;
