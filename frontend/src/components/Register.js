import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  // State
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register Function
  const handleRegister = () => {
    if (name === "" || mobile === "" || email === "" || password === "") {
      alert("Please fill all fields");
    } else {
      // You can connect backend here
      alert("Registration Successful!");

      // Redirect to login
      navigate("/");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Student Registration</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />

      <input
        type="text"
        placeholder="Enter Mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={styles.input}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleRegister} style={styles.button}>
        Register
      </button>

      <br /><br />

      <button onClick={() => navigate("/")} style={styles.link}>
        Already have account? Login
      </button>
    </div>
  );
}

// Styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px"
  },
  input: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    width: "250px"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    cursor: "pointer"
  },
  link: {
    background: "none",
    border: "none",
    color: "blue",
    cursor: "pointer"
  }
};

export default Register;
