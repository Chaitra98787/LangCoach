import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/plan");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        🦁 <span style={{ color: "#333" }}>Welcome to</span>{" "}
        <span style={styles.highlight}>LangCoach</span>!
      </h1>
      <p style={styles.subtext}>
        Your personalized coach for learning English, Vocabulary, IELTS, TOEFL & more with fun!
      </p>
      <button style={styles.button} onClick={handleStart}>
        🚀 Start Learning
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "80px 20px",
    backgroundColor: "#fff",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif"
  },
  heading: {
    fontSize: "38px",
    fontWeight: "600",
    marginBottom: "10px"
  },
  highlight: {
    color: "#d63384" // pastel pink/magenta
  },
  subtext: {
    fontSize: "18px",
    color: "#444",
    marginBottom: "30px"
  },
  button: {
    backgroundColor: "fff1e6", // soft blue
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease"
  }
};

export default Home;