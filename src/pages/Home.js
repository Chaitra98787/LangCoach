import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🦁 Welcome to <span style={styles.brand}>LangCoach!</span></h1>
      <p style={styles.subtitle}>
        Your personalized coach for learning English, Vocabulary, IELTS, TOEFL & more with fun!
      </p>
      <button style={styles.button} onClick={() => navigate("/plan")}>
        🚀 Start Learning
      </button>
    </div>
  );
};

const styles = {
  container: {
    marginLeft: "240px",
    padding: "80px",
    textAlign: "center",
    fontFamily: "Comic Sans MS, cursive, sans-serif",
    backgroundColor: "#fff7ed",
    height: "100vh"
  },
  title: {
    fontSize: "3.5rem",
    color: "#ff9f1c",
    marginBottom: "20px"
  },
  brand: {
    color: "#f15bb5"
  },
  subtitle: {
    fontSize: "20px",
    color: "#444",
    marginBottom: "40px"
  },
  button: {
    padding: "15px 30px",
    fontSize: "18px",
    backgroundColor: "#8ecae6",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "2px 4px 12px rgba(0, 0, 0, 0.1)"
  }
};

export default Home;