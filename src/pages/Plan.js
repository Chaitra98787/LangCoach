import React, { useState } from "react";
import axios from "axios";
import QuizGame from "../components/QuizGame";

function Plan() {
  const [formData, setFormData] = useState({
    language: "",
    level: "",
    goal: "",
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/generate_plan", formData);
      setResponse(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ fontFamily: "Arial", backgroundColor: "#f0f4f8", minHeight: "100vh", marginLeft: "240px", padding: "40px" }}>
      <h2 style={{ color: "#1a73e8", fontSize: "2rem" }}>🎯 Create Your Personalized Language Plan</h2>

      <div style={{
        backgroundColor: "#fff",
        padding: "24px",
        marginTop: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        maxWidth: "600px"
      }}>
        <label>Language:</label><br />
        <select name="language" onChange={handleChange} style={{ width: "100%", marginBottom: "16px", padding: "8px" }}>
          <option value="">Select</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
        </select>

        <label>Level:</label><br />
        <select name="level" onChange={handleChange} style={{ width: "100%", marginBottom: "16px", padding: "8px" }}>
          <option value="">Select</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <label>Goal:</label><br />
        <select name="goal" onChange={handleChange} style={{ width: "100%", marginBottom: "16px", padding: "8px" }}>
          <option value="">Select</option>
          <option value="Vocabulary">Vocabulary</option>
          <option value="TOEFL">TOEFL</option>
          <option value="IELTS">IELTS</option>
          <option value="Speaking">Speaking</option>
        </select>

        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#1a73e8",
            color: "#fff",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Generate Plan
        </button>
      </div>

      {response && (
        <div style={{ marginTop: "40px", backgroundColor: "#fff", padding: "24px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", maxWidth: "700px" }}>
          <h3>📘 Flashcards</h3>
          <ul>
            {response.flashcards.map((fc, idx) => (
              <li key={idx}><b>{fc.word}</b>: {fc.meaning}</li>
            ))}
          </ul>

          <h3>🧠 Quiz</h3>
          {response.quiz.map((q, idx) => (
            <div key={idx}>
              <p><b>{q.question}</b></p>
              <ul>
                {q.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
            </div>
          ))}

          <h3>🔗 Resources</h3>
          <ul>
            {response.resources.map((link, idx) => (
              <li key={idx}><a href={link} target="_blank" rel="noreferrer">{link}</a></li>
            ))}
          </ul>

          <h3>💡 Tip</h3>
          <p>{response.tips}</p>
        </div>
      )}

      <div style={{ marginTop: "60px" }}>
        <h2 style={{ color: "#1a73e8", fontSize: "1.8rem" }}>🧩 Practice Quiz</h2>
        <QuizGame />
      </div>
    </div>
  );
}

export default Plan;
