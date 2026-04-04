import React, { useEffect, useState } from "react";
import Papa from "papaparse";

function Attendance() {
  const [data, setData] = useState([]);

  // Load CSV data
  useEffect(() => {
    fetch("/attendance.csv")
      .then((response) => response.text())
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

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Pickup Time</th>
            <th>Drop Time</th>
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
              <td style={{
                color: row.Status === "Present" ? "green" : "red"
              }}>
                {row.Status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px"
  },
  table: {
    margin: "auto",
    borderCollapse: "collapse",
    width: "90%"
  }
};

export default Attendance;
