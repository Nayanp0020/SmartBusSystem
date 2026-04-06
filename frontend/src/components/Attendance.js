import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";

function Attendance() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Load CSV file
  useEffect(() => {
    fetch("/attendance.csv")
      .then((res) => res.text())
      .then((csvText) => {
        const result = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });
        setData(result.data);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h2>📊 Attendance Records</h2>

      <table style={styles.table} border="1">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Pickup</th>
            <th>Drop</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.Student_ID}</td>
              <td>{row.Name}</td>
              <td>{row.Date}</td>
              <td>{row.Pickup_Time}</td>
              <td>{row.Drop_Time}</td>
              <td
                style={{
                  color: row.Status === "Present" ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {row.Status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
    marginTop: "40px",
  },
  table: {
    margin: "auto",
    borderCollapse: "collapse",
    width: "90%",
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

export default Attendance;
