import React, { useState } from "react";

const Plan = () => {
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState([]);

  const generatePlan = () => {
    if (!language || !level || !goal) {
      setPlan(["❌ Please select all options to generate your plan."]);
      return;
    }

    const dailyPlan = [
      `📘 Day 1: Basic ${language} vocabulary & greetings`,
      `📝 Day 2: ${level === "Beginner" ? "Grammar basics" : "Complex sentence structures"}`,
      `🎧 Day 3: Listening to ${goal} practice materials`,
      `🗣️ Day 4: Speaking exercises based on ${goal} scenarios`,
      `📖 Day 5: Reading comprehension from ${language} blogs/articles`,
      `🧠 Day 6: Quiz yourself with practice tests`,
      `🛌 Day 7: Review + rest & reflect`
    ];

    setPlan(dailyPlan);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🎯 Create Your Personalized Language Plan</h2>

      <div style={styles.form}>
        <label style={styles.label}>Language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)} style={styles.select}>
          <option value="">Select</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="German">German</option>
        </select>

        <label style={styles.label}>Level:</label>
        <select value={level} onChange={(e) => setLevel(e.target.value)} style={styles.select}>
          <option value="">Select</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <label style={styles.label}>Goal:</label>
        <select value={goal} onChange={(e) => setGoal(e.target.value)} style={styles.select}>
          <option value="">Select</option>
          <option value="IELTS">IELTS</option>
          <option value="TOEFL">TOEFL</option>
          <option value="General fluency">General fluency</option>
        </select>

        <button onClick={generatePlan} style={styles.button}>Generate Plan</button>
      </div>

      {plan.length > 0 && (
        <div style={styles.planBox}>
          <h3>Your 7-Day Plan:</h3>
          <ul>
            {plan.map((item, index) => (
              <li key={index} style={styles.planItem}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "700px",
    margin: "auto",
    backgroundColor: "#fffaf2",
    padding: "30px",
    borderRadius: "12px",
    fontFamily: "Arial",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)"
  },
  heading: {
    fontSize: "24px",
    color: "#1a73e8",
    fontWeight: "bold",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "30px"
  },
  label: {
    fontWeight: "bold",
    marginBottom: "-8px"
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  button: {
    marginTop: "10px",
    padding: "12px 20px",
    fontSize: "16px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },
  planBox: {
    marginTop: "20px",
    backgroundColor: "#e8f0fe",
    padding: "20px",
    borderRadius: "8px"
  },
  planItem: {
    marginBottom: "10px",
    fontSize: "16px"
  }
};

export default Plan;