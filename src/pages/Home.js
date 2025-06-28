import React from "react";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1><span role="img" aria-label="lion">🦁</span> Welcome to <span style={{ color: "#ec4899" }}>LangCoach</span>!</h1>
      <p>Your personalized coach for learning English, Vocabulary, IELTS, TOEFL & more with fun!</p>
      <button style={styles.button}>🚀 Start Learning</button>
    </div>
  );
};

const styles = {
  button: {
    marginTop: "20px",
    padding: "12px 24px",
    backgroundColor: "#8dd5f5",
    color: "#000",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default Home;
