import React, { useState } from "react";
import quizData from "../data/quizData";

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const question = quizData[currentQuestion];

  const handleAnswer = (option) => {
    setSelected(option);
    setIsCorrect(option === question.correctAnswer);
  };

  const nextQuestion = () => {
    setSelected(null);
    setIsCorrect(false);
    setCurrentQuestion((prev) => prev + 1);
  };

  if (currentQuestion >= quizData.length) {
    return (
      <div style={styles.container}>
        <h2>🎉 Well done!</h2>
        <p>You've completed the lesson.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.progress}>
        <div
          style={{
            ...styles.bar,
            width: `${((currentQuestion + 1) / quizData.length) * 100}%`,
          }}
        ></div>
      </div>

      {/* Correct JSX usage for sentence fill-in-the-blank */}
      <h2 style={styles.sentence}>
        {question.sentence.split("___")[0]}
        <span style={{ color: "#999" }}>____</span>
        {question.sentence.split("___")[1]}
      </h2>

      <div style={styles.options}>
        {question.options.map((opt, i) => (
          <button
            key={i}
            style={{
              ...styles.button,
              backgroundColor:
                selected === opt
                  ? opt === question.correctAnswer
                    ? "#4caf50"
                    : "#f44336"
                  : "#ffffff",
              color: selected === opt ? "#fff" : "#333",
              border: selected === opt ? "none" : "2px solid #ccc",
            }}
            onClick={() => handleAnswer(opt)}
            disabled={selected}
          >
            {opt}
          </button>
        ))}
      </div>

      {selected && (
        <>
          <p
            style={{
              fontSize: "18px",
              color: isCorrect ? "green" : "red",
              marginTop: "20px",
            }}
          >
            {isCorrect ? "✅ Correct!" : "❌ Oops! Try the next one."}
          </p>
          <button style={styles.nextBtn} onClick={nextQuestion}>
            Next →
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    marginLeft: "240px", // adjust if needed
    padding: "60px",
    fontFamily: "Arial",
    textAlign: "center",
    backgroundColor: "#f7fbff",
    minHeight: "100vh",
  },
  progress: {
    height: "10px",
    backgroundColor: "#ccc",
    marginBottom: "30px",
    width: "80%",
    margin: "0 auto 30px auto",
    borderRadius: "5px",
    overflow: "hidden",
  },
  bar: {
    height: "10px",
    backgroundColor: "#1a73e8",
    transition: "width 0.4s ease",
  },
  sentence: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  options: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "18px",
    borderRadius: "10px",
    cursor: "pointer",
    minWidth: "120px",
    transition: "all 0.3s ease",
  },
  nextBtn: {
    marginTop: "30px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#1a73e8",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default QuizGame;
