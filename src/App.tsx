import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import IntroPage from "./pages/IntroPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import PredictionPage from "./pages/PredictionPage";


function App() {
  return (
    <div className="app px-16 py-10">
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="leaderboard" element={<LeaderboardPage />} />
          <Route path="prediction" element={<PredictionPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
