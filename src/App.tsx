import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import PredictionPage from "./pages/PredictionPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app px-52">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="leaderboard" element={<LeaderboardPage />} />
          <Route path="prediction" element={<PredictionPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
