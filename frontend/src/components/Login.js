import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login Function
  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please enter email and password");
    } else {
      // Dummy login (you can connect backend later)
      alert("Login Successful!");
      navigate("/dashboard");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Smart Bus System Login</h2>

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

      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>

      <br /><br />

      <button onClick={() => navigate("/register")} style={styles.link}>
        New User? Register
      </button>
    </div>
  );
}

// Simple Styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px"
  },
  input: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    width: "250px"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "blue",
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

export default Login;
