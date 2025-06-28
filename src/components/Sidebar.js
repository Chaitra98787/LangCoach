import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaPuzzlePiece } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div style={{
      width: "240px",
      backgroundColor: "#fff1e6",
      padding: "20px",
      minHeight: "100vh"
    }}>
      <h2 style={{ color: "#f06292", fontWeight: "bold", marginBottom: "40px" }}>
        🦁 LangCoach
      </h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "20px" }}>
            <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
              <FaHome style={{ marginRight: "10px" }} /> Home
            </Link>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <Link to="/plan" style={{ textDecoration: "none", color: "#333" }}>
              <FaBook style={{ marginRight: "10px" }} /> Plan
            </Link>
          </li>
          <li>
            <Link to="/quiz" style={{ textDecoration: "none", color: "#333" }}>
              <FaPuzzlePiece style={{ marginRight: "10px" }} /> Quiz
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;