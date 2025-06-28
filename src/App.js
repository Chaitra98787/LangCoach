import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import QuizPage from "./pages/QuizPage";



function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/quiz" element={<QuizPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
