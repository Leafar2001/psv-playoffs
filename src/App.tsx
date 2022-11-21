import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import PredictionPage from "./pages/PredictionPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="leaderboard" element={<LeaderboardPage />} />
          <Route path="prediction" element={<PredictionPage />} />
        </Routes>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="prediction">Prediction</Link>
          </li>
        </ul>
      </Router>
    </div>
  );
}

export default App;
