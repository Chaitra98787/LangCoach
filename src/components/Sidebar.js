import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaPuzzlePiece } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>🌞 LangCoach</h2>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}><FaHome /> Home</Link>
        <Link to="/plan" style={styles.link}><FaBook /> Plan</Link>
        <Link to="/quiz" style={styles.link}><FaPuzzlePiece /> Quiz</Link>
      </nav>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    backgroundColor: "#fef6e4",
    color: "#001858",
    padding: "30px 20px",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)"
  },
  logo: {
    fontSize: "24px",
    marginBottom: "40px",
    fontWeight: "bold",
    color: "#f582ae"
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  link: {
    textDecoration: "none",
    color: "#001858",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
  }
};

export default Sidebar;